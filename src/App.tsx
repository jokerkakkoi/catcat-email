import * as React from "react";
import "./assets/styles/globals.css";
import Navigation from "./components/navigation/navigation";
import { Sidebar } from "./components/sidebar/sidebar";
import { Pane } from "./components/pane/pane";
import Hero from "./components/hero";
import Features from "./components/features";
import Platforms from "./components/platforms";
import CTA from "./components/cta";
import Footer from "./components/footer";

function App() {
  const [sidebarWidth, setSidebarWidth] = React.useState(216); // 初始宽度 w-54 = 13.5rem = 216px
  const [isDragging, setIsDragging] = React.useState(false);
  const minWidth = 192; // w-54 = 192px
  const maxWidth = 256; // w-64 = 256px

  const handleMouseDown = React.useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleMouseUp = React.useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseMove = React.useCallback(
    (e: MouseEvent) => {
      if (isDragging) {
        const newWidth = Math.max(minWidth, Math.min(maxWidth, e.clientX));
        setSidebarWidth(newWidth);
      }
    },
    [isDragging]
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

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <div className="flex flex-1 relative">
        <Sidebar style={{ width: sidebarWidth }} />
        {/* 拖拽条 */}
        <div
          onMouseDown={handleMouseDown}
          className="w-1 h-[calc(100vh-64px)] sticky top-16 cursor-col-resize bg-transparent hover:bg-[#24C8DB] transition-colors z-10 flex-shrink-0"
          style={{
            backgroundColor: isDragging ? "#24C8DB" : undefined,
          }}
        />
        <Pane />
        <main className="flex-1 overflow-y-auto">
          <Hero />
          <Features />
          <Platforms />
          <CTA />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
