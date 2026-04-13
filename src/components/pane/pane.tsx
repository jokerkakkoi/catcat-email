import * as React from "react"
import { cn } from "@/lib/utils"

interface Email {
  id: string
  sender: string
  subject: string
  preview: string
  time: string
  unread: boolean
  starred: boolean
}

interface PaneProps {
  className?: string
}

const mockEmails: Email[] = [
  {
    id: "1",
    sender: "张三",
    subject: "项目进度更新",
    preview: "您好，这是本周的项目进度报告，请查收...",
    time: "10:30",
    unread: true,
    starred: false,
  },
  {
    id: "2",
    sender: "李四",
    subject: "会议邀请：产品评审",
    preview: "邀请您参加明天下午2点的产品评审会议...",
    time: "昨天",
    unread: true,
    starred: true,
  },
  {
    id: "3",
    sender: "王五",
    subject: "合同签署确认",
    preview: "合同已经审核完毕，请确认后签署...",
    time: "昨天",
    unread: false,
    starred: false,
  },
  {
    id: "4",
    sender: "赵六",
    subject: "周末聚餐",
    preview: "这周末有空吗？大家一起聚个餐...",
    time: "周一",
    unread: false,
    starred: false,
  },
  {
    id: "5",
    sender: "系统通知",
    subject: "账户安全提醒",
    preview: "您的账户在新设备上登录，如非本人操作...",
    time: "11/15",
    unread: false,
    starred: false,
  },
]

export function Pane({ className }: PaneProps) {
  const [selectedEmailId, setSelectedEmailId] = React.useState<string | null>(null)

  return (
    <div
      className={cn(
        "w-72 h-[calc(100vh-64px)] sticky top-16 bg-gray-50 border-r border-gray-200 flex flex-col shrink-0",
        className
      )}
    >
      {/* 标题栏 */}
      <div className="px-4 py-3 border-b border-gray-200 bg-white">
        <h2 className="text-lg font-semibold text-gray-900">邮件列表</h2>
        <p className="text-sm text-gray-500 mt-0.5">共 {mockEmails.length} 封邮件</p>
      </div>

      {/* 邮件列表 */}
      <div className="flex-1 overflow-y-auto">
        {mockEmails.map((email) => (
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
            <div className="flex items-center justify-between mb-1">
              <span className={cn(
                "text-sm",
                email.unread ? "font-semibold text-gray-900" : "text-gray-700"
              )}>
                {email.sender}
              </span>
              <span className="text-xs text-gray-400">{email.time}</span>
            </div>
            <div className={cn(
              "text-sm mb-1 truncate",
              email.unread ? "font-medium text-gray-900" : "text-gray-700"
            )}>
              {email.subject}
            </div>
            <p className="text-xs text-gray-500 truncate">{email.preview}</p>
          </button>
        ))}
      </div>
    </div>
  )
}
