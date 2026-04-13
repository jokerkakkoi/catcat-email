import { cn } from "@/lib/utils";
import { Reply, Forward, Trash2, Archive, MoreVertical, Paperclip, Download } from "lucide-react";

interface EmailContentProps {
  className?: string;
}

export function EmailContent({ className }: EmailContentProps) {
  return (
    <div
      className={cn(
        "flex-1 h-[calc(100vh-64px)] sticky top-16 bg-white flex flex-col",
        className
      )}
    >
      {/* 邮件头部 */}
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-xl font-semibold text-gray-900">
              项目进度更新
            </h1>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-8 h-8 rounded-full bg-[#24C8DB] flex items-center justify-center text-white text-sm font-medium">
                张
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">张三</div>
                <div className="text-xs text-gray-500">zhangsan@example.com</div>
              </div>
              <span className="text-xs text-gray-400 ml-2">10:30</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Archive className="h-4 w-4 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Trash2 className="h-4 w-4 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <MoreVertical className="h-4 w-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* 邮件正文 */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-700 leading-relaxed">您好，</p>
          <p className="text-gray-700 leading-relaxed mt-4">
            这是本周的项目进度报告，请查收。目前项目整体进展顺利，主要完成了以下工作：
          </p>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-[#24C8DB] mt-1">•</span>
              <span>前端界面设计已完成 80%，剩余部分预计下周完成</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#24C8DB] mt-1">•</span>
              <span>后端 API 接口开发已完成 60%，正在进行联调测试</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#24C8DB] mt-1">•</span>
              <span>数据库设计已确定，正在迁移数据</span>
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            附件中是详细的项目进度文档，如有任何问题，请随时联系我。
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            谢谢！
          </p>
          <p className="text-gray-700 leading-relaxed mt-2">张三</p>
        </div>

        {/* 附件 */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-sm font-medium text-gray-900 mb-3 flex items-center gap-2">
            <Paperclip className="h-4 w-4" />
            附件 (2)
          </h3>
          <div className="flex gap-3">
            <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg border border-gray-200">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <span className="text-xs font-medium text-red-600">PDF</span>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">项目进度报告.pdf</div>
                <div className="text-xs text-gray-500">2.5 MB</div>
              </div>
              <button className="p-1.5 hover:bg-gray-200 rounded transition-colors ml-2">
                <Download className="h-4 w-4 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 底部操作栏 */}
      <div className="px-6 py-4 border-t border-gray-200 flex items-center gap-3">
        <button className="flex items-center gap-2 px-4 py-2 bg-[#24C8DB] text-white rounded-lg hover:bg-[#1fb5c7] transition-colors text-sm font-medium">
          <Reply className="h-4 w-4" />
          回复
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium">
          <Forward className="h-4 w-4" />
          转发
        </button>
      </div>
    </div>
  );
}
