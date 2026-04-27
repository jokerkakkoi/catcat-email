import { Inbox, Menu, MessageSquare } from "lucide-react"
import { invoke } from "@tauri-apps/api/core"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { SettingsMenu } from "./settings-menu"
import { SearchBox } from "./search"

const navLinks = [
  { title: "Develop", href: "#develop" },
  { title: "Guides", href: "#guides" },
  { title: "Reference", href: "#reference" },
  { title: "Blog", href: "#blog" },
]

function GithubIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.2 5.2 0 0 0-1.39-3.6 4.9 4.9 0 0 0-.12-3.55s-1.14-.36-3.7 1.38a13.1 13.1 0 0 0-7 0C5.14 1.15 4 1.51 4 1.51a4.9 4.9 0 0 0-.12 3.55A5.2 5.2 0 0 0 2.5 8.72c0 5.22 3 6.42 6 6.76-.7.6-1 1.5-1 2.5v5" />
      <path d="M9 18c-4.5 1.5-5-2-7-2" />
    </svg>
  )
}

function TwitterIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

export function Navigation() {
  const handleReceiveEmail = async () => {
    try {
      await invoke("receive_email")
    } catch (error) {
      console.error("Failed to receive email", error)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-white/70 backdrop-blur-md">
      <div className="flex h-16 items-center px-4 sm:px-6 lg:px-8">
        <div className="mr-8 flex items-center">
          <Button
            type="button"
            variant="outline"
            size="lg"
            onClick={handleReceiveEmail}
            className="border-gray-200 bg-white text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            <Inbox className="h-4 w-4" />
            收件
          </Button>
        </div>

        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-gray-600 rounded-lg transition-all hover:text-gray-900 hover:bg-gray-100"
            >
              {link.title}
            </a>
          ))}
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-gray-700 hover:bg-gray-100"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[280px] bg-white border-gray-200 p-0">
            <div className="flex flex-col h-full">
              <nav className="flex flex-col p-4 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="px-4 py-3 text-gray-600 rounded-lg transition-all hover:text-gray-900 hover:bg-gray-100 font-medium"
                  >
                    {link.title}
                  </a>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <div className="hidden sm:block">
            <SearchBox />
          </div>

          <nav className="flex items-center space-x-1">
            <a href="https://github.com/tauri-apps/tauri" target="_blank" rel="noreferrer" className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all">
              <GithubIcon className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://discord.com/invite/tauri" target="_blank" rel="noreferrer" className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all">
              <MessageSquare className="h-4 w-4" />
              <span className="sr-only">Discord</span>
            </a>
            <a href="https://twitter.com/TauriApps" target="_blank" rel="noreferrer" className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all">
              <TwitterIcon className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </a>
            <SettingsMenu />
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navigation
