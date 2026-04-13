import { cn } from "@/lib/utils";

interface ResizableDividerProps {
  isDragging: boolean;
  onMouseDown: () => void;
  className?: string;
}

export function ResizableDivider({
  isDragging,
  onMouseDown,
  className,
}: ResizableDividerProps) {
  return (
    <div
      onMouseDown={onMouseDown}
      className={cn(
        "w-1 h-[calc(100vh-64px)] sticky top-16 cursor-col-resize",
        "bg-transparent hover:bg-[#24C8DB] transition-colors z-10 flex-shrink-0",
        isDragging && "bg-[#24C8DB]",
        className
      )}
    />
  );
}
