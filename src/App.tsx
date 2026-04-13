import "./assets/styles/globals.css";
import Navigation from "./components/navigation/navigation";
import { Sidebar } from "./components/sidebar/sidebar";
import { Pane } from "./components/pane/pane";
import { EmailContent } from "./components/content/email-content";
import { ResizableDivider } from "./components/resizable/resizable-divider";
import { useResizable } from "./hooks/use-resizable";

function App() {
  // Sidebar 拖拽调整（无偏移量，从屏幕左侧开始）
  const sidebar = useResizable({
    initialWidth: 200,
    minWidth: 160,
    maxWidth: 280,
  });

  // Pane 拖拽调整（偏移量 = Sidebar 宽度 + 拖拽条宽度）
  const pane = useResizable({
    initialWidth: 300,
    minWidth: 240,
    maxWidth: 360,
    offset: sidebar.width + 4, // 4px 是拖拽条宽度
  });

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <div className="flex flex-1 relative">
        {/* Sidebar */}
        <Sidebar style={{ width: sidebar.width }} />
        
        {/* Sidebar 和 Pane 之间的拖拽条 */}
        <ResizableDivider
          isDragging={sidebar.isDragging}
          onMouseDown={sidebar.handleMouseDown}
        />
        
        {/* Pane */}
        <Pane style={{ width: pane.width }} />
        
        {/* Pane 和 Content 之间的拖拽条 */}
        <ResizableDivider
          isDragging={pane.isDragging}
          onMouseDown={pane.handleMouseDown}
        />
        
        {/* 正文内容 */}
        <EmailContent />
      </div>
    </div>
  );
}

export default App;
