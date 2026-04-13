import * as React from "react"
import { Inbox, Send, FileText, Settings, User, Star, Trash2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface SidebarProps {
  className?: string
  style?: React.CSSProperties
}

type TabType = "mail" | "folders"

const mailItems = [
  { icon: Inbox, label: "收件箱", count: 12 },
  { icon: Send, label: "已发送", count: 0 },
  { icon: Star, label: "星标邮件", count: 3 },
  { icon: Trash2, label: "回收站", count: 0 },
]

const folderItems = [
  { icon: FileText, label: "工作文档", count: 5 },
  { icon: User, label: "个人", count: 2 },
  { icon: Settings, label: "设置", count: 0 },
]

export function Sidebar({ className, style }: SidebarProps) {
  const [activeTab, setActiveTab] = React.useState<TabType>("mail")
  const [activeIndex, setActiveIndex] = React.useState(0)

  const items = activeTab === "mail" ? mailItems : folderItems

  return (
    <aside
      className={cn(
        "h-[calc(100vh-64px)] sticky top-16 bg-white border-r border-gray-200 flex flex-col shrink-0",
        className
      )}
      style={style}
    >
      {/* 标签页切换 */}
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => {
            setActiveTab("mail")
            setActiveIndex(0)
          }}
          className={cn(
            "flex-1 py-3 text-sm font-medium text-center transition-colors relative",
            activeTab === "mail"
              ? "text-gray-900"
              : "text-gray-500 hover:text-gray-700"
          )}
        >
          邮件
          {activeTab === "mail" && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#24C8DB]" />
          )}
        </button>
        <button
          onClick={() => {
            setActiveTab("folders")
            setActiveIndex(0)
          }}
          className={cn(
            "flex-1 py-3 text-sm font-medium text-center transition-colors relative",
            activeTab === "folders"
              ? "text-gray-900"
              : "text-gray-500 hover:text-gray-700"
          )}
        >
          文件夹
          {activeTab === "folders" && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#24C8DB]" />
          )}
        </button>
      </div>

      {/* 内容区域 */}
      <div className="flex-1 overflow-y-auto py-2">
        <nav className="px-2 space-y-1">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-colors",
                "hover:bg-gray-100",
                activeIndex === index
                  ? "bg-gray-100 text-gray-900 font-medium"
                  : "text-gray-600"
              )}
            >
              <div className="flex items-center gap-3">
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </div>
              {item.count > 0 && (
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                  {item.count}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* 底部用户信息 */}
      <div className="border-t border-gray-200 p-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFC131] to-[#24C8DB] flex items-center justify-center text-white text-sm font-medium">
            U
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">User</p>
            <p className="text-xs text-gray-500 truncate">user@example.com</p>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
