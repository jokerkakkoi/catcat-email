import * as React from "react"
import { Menu, MessageSquare } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { SearchBox } from "./search"

const navLinks = [
  { title: "Develop", href: "#develop" },
  { title: "Guides", href: "#guides" },
  { title: "Reference", href: "#reference" },
  { title: "Blog", href: "#blog" },
]

function TauriLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 206 231"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M143.143 84C143.143 96.1503 133.293 106 121.143 106C108.992 106 99.1426 96.1503 99.1426 84C99.1426 71.8497 108.992 62 121.143 62C133.293 62 143.143 71.8497 143.143 84Z"
        fill="#FFC131"
      />
      <ellipse
        cx="84.1426"
        cy="147"
        rx="22"
        ry="22"
        transform="rotate(180 84.1426 147)"
        fill="#24C8DB"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M166.738 154.548C157.86 160.818 148.04 163.973 136.989 163.973C111.703 163.973 91.376 143.655 91.376 118.357C91.376 113.377 92.1286 108.551 93.5462 103.971C95.4771 97.9814 88.7432 92.9544 83.0783 96.7411C67.2481 107.365 57 125.438 57 145.899C57 179.393 83.7595 206.16 117.243 206.16C135.185 206.16 151.337 198.153 162.36 185.395C166.118 180.855 160.496 174.578 154.637 176.36C150.402 177.656 146.079 178.355 141.626 178.355C120.718 178.355 103.676 161.304 103.676 140.387C103.676 128.649 109.051 118.135 117.243 111.309C123.617 106.003 132.576 109.456 133.695 117.4C134.897 125.869 142.425 132.209 151.021 130.028C153.534 129.389 155.966 128.439 158.276 127.215C166.587 122.928 174.582 134.099 166.738 154.548Z"
        fill="#FFC131"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M57.8856 72.9883C66.9356 66.6124 77.0858 63.4439 88.5485 63.4439C114.666 63.4439 136.073 84.8517 136.073 110.969C136.073 116.091 135.289 121.062 133.813 125.779C131.82 131.957 138.754 137.155 144.57 133.258C160.767 122.32 171.299 103.865 171.299 82.8445C171.299 48.6395 143.649 21 109.455 21C91.1503 21 74.6666 29.2023 63.4351 42.2236C59.5862 46.8806 65.3149 53.2851 71.2454 51.4609C75.5668 50.1263 80.0404 49.4241 84.6698 49.4241C106.354 49.4241 124.041 67.1112 124.041 88.7955C124.041 100.838 118.491 111.636 109.455 118.635C102.841 123.999 93.5661 120.434 92.4075 112.258C91.1336 103.385 83.2923 96.8748 74.3397 99.1006C71.7483 99.7613 69.2443 100.737 66.8574 101.994C58.3006 106.452 49.9857 94.9685 57.8856 72.9883Z"
        fill="#24C8DB"
      />
    </svg>
  )
}

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
  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-white/70 backdrop-blur-md">
      <div className="flex h-16 items-center px-4 sm:px-6 lg:px-8">
        <div className="mr-8 flex items-center">
          <a href="/" className="flex items-center space-x-3 group">
            <TauriLogo className="h-8 w-8 transition-transform group-hover:scale-110" />
            <span className="text-xl font-bold text-gray-900 tracking-tight">Tauri</span>
          </a>
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
              <div className="flex items-center space-x-3 p-6 border-b border-gray-200">
                <TauriLogo className="h-8 w-8" />
                <span className="text-xl font-bold text-gray-900">Tauri</span>
              </div>
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
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navigation
