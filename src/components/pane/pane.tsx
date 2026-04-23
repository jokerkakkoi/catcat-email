import * as React from "react"

import { cn } from "@/lib/utils"
import { inboxList } from "@/src/mock"

interface PaneProps {
  className?: string
}

export function Pane({ className }: PaneProps) {
  const [selectedEmailId, setSelectedEmailId] = React.useState<string | null>(
    inboxList[0]?.id ?? null
  )

  return (
    <div
      className={cn(
        "w-72 h-[calc(100vh-64px)] sticky top-16 bg-gray-50 border-r border-gray-200 flex flex-col shrink-0",
        className
      )}
    >
      <div className="px-4 py-3 border-b border-gray-200 bg-white">
        <h2 className="text-lg font-semibold text-gray-900">邮件列表</h2>
        <p className="text-sm text-gray-500 mt-0.5">
          共 {inboxList.length} 封邮件
        </p>
      </div>

      <div className="flex-1 overflow-y-auto">
        {inboxList.map((email) => (
          <button
            key={email.id}
            onClick={() => setSelectedEmailId(email.id)}
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
                {email.sender}
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
  )
}
