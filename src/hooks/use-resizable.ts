import * as React from "react";

interface UseResizableOptions {
  initialWidth: number;
  minWidth: number;
  maxWidth: number;
  /** 偏移量，用于计算相对宽度（如 Pane 需要减去 Sidebar 宽度） */
  offset?: number;
}

interface UseResizableReturn {
  width: number;
  isDragging: boolean;
  handleMouseDown: () => void;
}

export function useResizable({
  initialWidth,
  minWidth,
  maxWidth,
  offset = 0,
}: UseResizableOptions): UseResizableReturn {
  const [width, setWidth] = React.useState(initialWidth);
  const [isDragging, setIsDragging] = React.useState(false);

  const handleMouseDown = React.useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleMouseUp = React.useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseMove = React.useCallback(
    (e: MouseEvent) => {
      if (isDragging) {
        // 计算实际宽度：鼠标位置减去偏移量
        const newWidth = Math.max(
          minWidth,
          Math.min(maxWidth, e.clientX - offset)
        );
        setWidth(newWidth);
      }
    },
    [isDragging, minWidth, maxWidth, offset]
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

  return { width, isDragging, handleMouseDown };
}
