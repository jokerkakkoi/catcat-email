import * as React from "react"
import { createPortal } from "react-dom"
import { Search, FileText, BookOpen, Code2, Newspaper } from "lucide-react"
import { Button } from "@/components/ui/button"

// 模拟搜索结果数据
const searchResults = [
  { title: "Getting Started", description: "Learn how to get started with Tauri", icon: BookOpen, category: "Guide" },
  { title: "Configuration", description: "Configure your Tauri application", icon: FileText, category: "Reference" },
  { title: "API Reference", description: "Explore the Tauri API", icon: Code2, category: "API" },
  { title: "Blog", description: "Latest news and updates", icon: Newspaper, category: "Blog" },
]

export function SearchBox() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [isOpen, setIsOpen] = React.useState(false)
  const searchInputRef = React.useRef<HTMLInputElement>(null)

  // Ctrl+K 快捷键监听
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setIsOpen(true)
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen])

  // 打开弹窗时聚焦输入框
  React.useEffect(() => {
    if (isOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 100)
    }
  }, [isOpen])

  // 过滤搜索结果
  const filteredResults = searchQuery
    ? searchResults.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : searchResults

  return (
    <>
      {/* 搜索按钮 */}
      <Button
        variant="outline"
        onClick={() => setIsOpen(true)}
        className="relative h-9 w-64 justify-start rounded-full bg-gray-100 border-gray-200 text-gray-500 hover:bg-gray-200 hover:text-gray-700 hover:border-gray-300 transition duration-300 ease-in-out"
      >
        <Search className="mr-2 h-4 w-4" />
        <span className="text-sm">Search documentation...</span>
        <kbd className="absolute right-3 top-1/2 -translate-y-1/2 hidden sm:inline-flex h-5 items-center gap-1 rounded border border-gray-300 bg-gray-50 px-1.5 font-mono text-[10px] font-medium text-gray-500">
          <span className="text-xs">Ctrl</span>K
        </kbd>
      </Button>

      {/* 搜索弹窗 - 使用 Portal 渲染到 body */}
      {isOpen &&
        createPortal(
          <div className="fixed inset-0 z-[9999] flex items-start justify-center pt-[20vh]">
            {/* 背景遮罩 */}
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* 弹窗内容 */}
            <div className="relative w-full max-w-2xl mx-4 bg-white rounded-xl shadow-2xl overflow-hidden">
              {/* 搜索输入框 */}
              <div className="flex items-center border-b border-gray-200 px-4">
                <Search className="h-5 w-5 text-gray-400" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search documentation..."
                  className="flex-1 h-14 px-4 text-gray-900 placeholder:text-gray-400 focus:outline-none text-base"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-500"
                >
                  <span className="text-xs font-medium px-1">ESC</span>
                </button>
              </div>

              {/* 搜索结果 */}
              <div className="max-h-[60vh] overflow-y-auto py-2">
                {filteredResults.length > 0 ? (
                  <div className="px-2">
                    <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      {searchQuery ? "Search Results" : "Recent"}
                    </div>
                    {filteredResults.map((item, index) => (
                      <button
                        key={index}
                        className="w-full flex items-start gap-3 px-3 py-3 rounded-lg hover:bg-gray-100 transition-colors text-left group"
                      >
                        <div className="p-2 rounded-md bg-gray-100 group-hover:bg-white">
                          <item.icon className="h-4 w-4 text-gray-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-gray-900">{item.title}</span>
                            <span className="text-xs text-gray-400">{item.category}</span>
                          </div>
                          <p className="text-sm text-gray-500 mt-0.5">{item.description}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="px-4 py-8 text-center text-gray-500">
                    No results found for &quot;{searchQuery}&quot;
                  </div>
                )}
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  )
}

export default SearchBox
