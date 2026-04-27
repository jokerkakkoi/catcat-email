import * as React from "react";
import { Settings, SlidersHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SystemSettingsDialog } from "./system-settings-dialog";

export function SettingsMenu() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [settingsOpen, setSettingsOpen] = React.useState(false);

  return (
    <>
      <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            aria-label="设置菜单"
          >
            <Settings className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-36">
          <DropdownMenuItem
            className="px-3 py-2"
            onSelect={() => {
              setMenuOpen(false);
              setSettingsOpen(true);
            }}
          >
            <SlidersHorizontal className="h-4 w-4 text-gray-500" />
            系统设置
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <SystemSettingsDialog
        open={settingsOpen}
        onOpenChange={setSettingsOpen}
      />
    </>
  );
}

export default SettingsMenu;
