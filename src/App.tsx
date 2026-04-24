import * as React from "react";
import "./assets/styles/globals.css";
import Navigation from "./components/navigation/navigation";
import { Pane } from "./components/pane/pane";
import { MailReader } from "./components/reader/mail-reader";
import { Sidebar } from "./components/sidebar/sidebar";
import { inboxList } from "./mock";

function App() {
  const [sidebarWidth, setSidebarWidth] = React.useState(216);
  const [isDragging, setIsDragging] = React.useState(false);
  const [selectedEmailId, setSelectedEmailId] = React.useState<string | null>(
    inboxList[0]?.id ?? null
  );
  const minWidth = 192;
  const maxWidth = 256;

  const selectedEmail = React.useMemo(
    () => inboxList.find((email) => email.id === selectedEmailId) ?? null,
    [selectedEmailId]
  );

  const handleMouseDown = React.useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleMouseUp = React.useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseMove = React.useCallback(
    (event: MouseEvent) => {
      if (!isDragging) {
        return;
      }

      const newWidth = Math.max(minWidth, Math.min(maxWidth, event.clientX));
      setSidebarWidth(newWidth);
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
        <div
          onMouseDown={handleMouseDown}
          className="w-1 h-[calc(100vh-64px)] sticky top-16 cursor-col-resize bg-transparent hover:bg-[#24C8DB] transition-colors z-10 flex-shrink-0"
          style={{
            backgroundColor: isDragging ? "#24C8DB" : undefined,
          }}
        />
        <Pane
          emails={inboxList}
          selectedEmailId={selectedEmailId}
          onSelectEmail={setSelectedEmailId}
        />
        <main className="flex-1 min-w-0 overflow-y-auto bg-white">
          <MailReader email={selectedEmail} />
        </main>
      </div>
    </div>
  );
}

export default App;
