import { cn } from "@/lib/utils";
import type { EmailItem } from "@/src/mock";

interface PaneProps {
  emails: EmailItem[];
  selectedEmailId: string | null;
  onSelectEmail: (emailId: string) => void;
  className?: string;
}

export function Pane({
  emails,
  selectedEmailId,
  onSelectEmail,
  className,
}: PaneProps) {
  return (
    <div
      className={cn(
        "w-72 h-[calc(100vh-64px)] sticky top-16 bg-gray-50 border-r border-gray-200 flex flex-col shrink-0",
        className
      )}
    >
      <div className="px-4 py-3 border-b border-gray-200 bg-white">
        <h2 className="text-lg font-semibold text-gray-900">Inbox</h2>
        <p className="text-sm text-gray-500 mt-0.5">{emails.length} messages</p>
      </div>

      <div className="flex-1 overflow-y-auto">
        {emails.map((email) => (
          <button
            key={email.id}
            type="button"
            aria-pressed={selectedEmailId === email.id}
            onClick={() => onSelectEmail(email.id)}
            className={cn(
              "w-full text-left px-4 py-3 border-b border-gray-200 transition-colors",
              "hover:bg-white",
              selectedEmailId === email.id
                ? "bg-white border-l-4 border-l-[#24C8DB]"
                : "border-l-4 border-l-transparent"
            )}
          >
            <div className="flex items-center justify-between mb-1 gap-3">
              <span
                className={cn(
                  "text-sm truncate",
                  email.unread ? "font-semibold text-gray-900" : "text-gray-700"
                )}
              >
                {email.from.name}
              </span>
              <span className="text-xs text-gray-400 shrink-0">{email.time}</span>
            </div>
            <div
              className={cn(
                "text-sm mb-1 truncate",
                email.unread ? "font-medium text-gray-900" : "text-gray-700"
              )}
            >
              {email.subject}
            </div>
            <p className="text-xs text-gray-500 truncate">{email.preview}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
