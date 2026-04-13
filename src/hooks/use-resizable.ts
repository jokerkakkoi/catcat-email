import * as React from "react";

interface UseResizableOptions {
  initialWidth: number;
  minWidth: number;
  maxWidth: number;
  /** 偏移量，可以是固定值或返回动态值的函数 */
  offset?: number | (() => number);
}

interface UseResizableReturn {
  width: number;
  isDragging: boolean;
  handleMouseDown: () => void;
  setWidth: React.Dispatch<React.SetStateAction<number>>;
}

export function useResizable({
  initialWidth,
  minWidth,
  maxWidth,
  offset: offsetProp = 0,
}: UseResizableOptions): UseResizableReturn {
  const [width, setWidth] = React.useState(initialWidth);
  const [isDragging, setIsDragging] = React.useState(false);
  const offsetRef = React.useRef(offsetProp);

  // 更新 offsetRef，支持动态 offset
  React.useEffect(() => {
    offsetRef.current = offsetProp;
  }, [offsetProp]);

  const getOffset = React.useCallback(() => {
    const offset = offsetRef.current;
    return typeof offset === "function" ? offset() : offset;
  }, []);

  const handleMouseDown = React.useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleMouseUp = React.useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseMove = React.useCallback(
    (e: MouseEvent) => {
      if (isDragging) {
        // 实时获取最新的 offset
        const currentOffset = getOffset();
        const newWidth = Math.max(
          minWidth,
          Math.min(maxWidth, e.clientX - currentOffset)
        );
        setWidth(newWidth);
      }
    },
    [isDragging, minWidth, maxWidth, getOffset]
  );

  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "col-resize";
      document.body.style.userSelect = "none";
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return { width, isDragging, handleMouseDown, setWidth };
}
