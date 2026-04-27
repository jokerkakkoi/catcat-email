import * as React from "react";
import {
  Globe2,
  Inbox,
  Mail,
  Package,
  ShieldCheck,
  SlidersHorizontal,
  UserRound,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type SystemSettingsDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

type SettingsCategoryId =
  | "general"
  | "account"
  | "compose"
  | "network"
  | "spam"
  | "plugins"
  | "advanced";

type SettingsCategory = {
  id: SettingsCategoryId;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
};

const settingsCategories: SettingsCategory[] = [
  { id: "general", name: "常用", icon: Inbox },
  { id: "account", name: "账号", icon: UserRound },
  { id: "compose", name: "写邮件", icon: Mail },
  { id: "network", name: "网络", icon: Globe2 },
  { id: "spam", name: "反垃圾", icon: ShieldCheck },
  { id: "plugins", name: "插件", icon: Package },
  { id: "advanced", name: "高级", icon: SlidersHorizontal },
];

function SettingsField({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[88px_minmax(0,1fr)] items-center gap-3">
      <label htmlFor={id} className="text-right text-sm text-gray-700">
        {label}
      </label>
      {children}
    </div>
  );
}

function GeneralSettingsPanel() {
  return (
    <div className="space-y-4 px-5 py-5">
      <div>
        <h3 className="text-sm font-semibold text-gray-900">收取与通知</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          管理默认收取频率、桌面提醒和未读邮件提示。
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <label className="flex min-h-20 items-start gap-3 rounded-lg border border-border bg-white p-3 text-sm text-gray-700">
          <input
            type="checkbox"
            defaultChecked
            className="mt-0.5 h-4 w-4 rounded border-input accent-[#24C8DB]"
          />
          <span>
            <span className="block font-medium text-gray-900">启动后自动收取</span>
            <span className="mt-1 block text-muted-foreground">
              打开应用后自动检查新邮件。
            </span>
          </span>
        </label>

        <label className="flex min-h-20 items-start gap-3 rounded-lg border border-border bg-white p-3 text-sm text-gray-700">
          <input
            type="checkbox"
            defaultChecked
            className="mt-0.5 h-4 w-4 rounded border-input accent-[#24C8DB]"
          />
          <span>
            <span className="block font-medium text-gray-900">桌面通知</span>
            <span className="mt-1 block text-muted-foreground">
              新邮件到达时显示系统通知。
            </span>
          </span>
        </label>
      </div>
    </div>
  );
}

function AccountSettingsPanel() {
  return (
    <div className="flex min-w-0 flex-col bg-white">
      <div className="border-b border-border px-5 pt-4">
        <div className="flex items-end gap-1">
          <button
            type="button"
            className="rounded-t-lg border border-b-white border-border bg-white px-4 py-2 text-sm font-semibold text-gray-900"
          >
            设置
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm text-gray-500 transition-colors hover:text-gray-900"
          >
            服务器
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm text-gray-500 transition-colors hover:text-gray-900"
          >
            高级
          </button>
        </div>
      </div>

      <div className="flex-1 space-y-3 px-5 py-5">
        <SettingsField id="settings-email" label="Email地址">
          <input
            id="settings-email"
            readOnly
            value="lubz@chinatelecom.cn"
            className="h-8 rounded-md border border-input bg-white px-2 text-sm text-gray-900 outline-none"
          />
        </SettingsField>

        <SettingsField id="settings-password" label="密码">
          <input
            id="settings-password"
            readOnly
            type="password"
            value="catcat-settings"
            className="h-8 rounded-md border border-input bg-white px-2 text-sm text-gray-900 outline-none"
          />
        </SettingsField>

        <SettingsField id="settings-display-name" label="显示名称">
          <input
            id="settings-display-name"
            readOnly
            value="chinatelecom(lubz)"
            className="h-8 rounded-md border border-input bg-white px-2 text-sm text-gray-900 outline-none"
          />
        </SettingsField>

        <SettingsField id="settings-sender-name" label="发信名称">
          <input
            id="settings-sender-name"
            readOnly
            value="lubz@chinatelecom.cn"
            className="h-8 rounded-md border border-input bg-white px-2 text-sm text-gray-900 outline-none"
          />
        </SettingsField>

        <SettingsField id="settings-status" label="账号状态">
          <select
            id="settings-status"
            defaultValue="active"
            className="h-8 w-36 rounded-md border border-input bg-white px-2 text-sm text-gray-900 outline-none"
          >
            <option value="active">正常使用</option>
            <option value="paused">暂停收取</option>
          </select>
        </SettingsField>

        <div className="grid grid-cols-[88px_minmax(0,1fr)] items-center gap-3 pt-1">
          <div />
          <label className="flex flex-wrap items-center gap-2 text-sm text-gray-700">
            <input
              type="checkbox"
              defaultChecked
              className="h-4 w-4 rounded border-input accent-[#24C8DB]"
            />
            <span>定时收取邮件</span>
            <span>每隔</span>
            <input
              aria-label="收取间隔分钟"
              defaultValue="15"
              className="h-8 w-12 rounded-md border border-input bg-white px-2 text-sm text-gray-900 outline-none"
            />
            <span>分钟</span>
          </label>
        </div>
      </div>
    </div>
  );
}

function PlaceholderSettingsPanel({ category }: { category: SettingsCategory }) {
  return (
    <div className="flex h-full flex-col justify-center px-8 py-8">
      <div className="max-w-sm">
        <h3 className="text-sm font-semibold text-gray-900">{category.name}</h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          这个页面已经接入左侧分类切换，后续可以在这里继续放置
          {category.name} 相关设置。
        </p>
      </div>
    </div>
  );
}

function SettingsPanel({ category }: { category: SettingsCategory }) {
  if (category.id === "general") {
    return <GeneralSettingsPanel />;
  }

  if (category.id === "account") {
    return <AccountSettingsPanel />;
  }

  return <PlaceholderSettingsPanel category={category} />;
}

export function SystemSettingsDialog({
  open,
  onOpenChange,
}: SystemSettingsDialogProps) {
  const [activeCategoryId, setActiveCategoryId] =
    React.useState<SettingsCategoryId>("general");
  const wasOpenRef = React.useRef(open);

  React.useEffect(() => {
    if (!wasOpenRef.current && open) {
      setActiveCategoryId("general");
    }

    wasOpenRef.current = open;
  }, [open]);

  const activeCategory =
    settingsCategories.find((category) => category.id === activeCategoryId) ??
    settingsCategories[0];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[760px]">
        <DialogHeader className="border-b border-border bg-muted/40 pr-12">
          <DialogTitle>系统设置</DialogTitle>
          <DialogDescription>账户、邮件、安全和高级选项</DialogDescription>
        </DialogHeader>

        <div className="grid min-h-[420px] grid-cols-[156px_minmax(0,1fr)] overflow-hidden">
          <div
            role="tablist"
            aria-label="系统设置分类"
            className="border-r border-border bg-muted/30 p-3"
          >
            {settingsCategories.map((category) => {
              const Icon = category.icon;
              const selected = category.id === activeCategoryId;

              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={selected ? "true" : "false"}
                  onClick={() => setActiveCategoryId(category.id)}
                  className={cn(
                    "flex h-9 w-full items-center gap-2 rounded-lg px-3 text-left text-sm text-gray-600 transition-colors hover:bg-white hover:text-gray-900",
                    selected &&
                      "bg-[#24C8DB]/10 font-semibold text-[#0f6974] shadow-sm ring-1 ring-[#24C8DB]/15"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            aria-label={activeCategory.name}
            className="min-w-0 bg-white"
          >
            <SettingsPanel category={activeCategory} />
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">确定</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant="outline">取消</Button>
          </DialogClose>
          <Button variant="outline" disabled>
            应用
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default SystemSettingsDialog;
