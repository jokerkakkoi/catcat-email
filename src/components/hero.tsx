import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Sparkles } from "lucide-react"

function TauriLogoLarge({ className }: { className?: string }) {
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

const stats = [
  { value: "600KB", label: "App Size" },
  { value: "50K+", label: "GitHub Stars" },
  { value: "1M+", label: "Downloads" },
]

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 animated-gradient" />
      
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#24C8DB]/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FFC131]/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1.5s' }} />
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-200 mb-8 animate-fade-in">
            <Sparkles className="h-4 w-4 text-[#FFC131]" />
            <span className="text-sm text-gray-700">Tauri 2.0 is now available</span>
            <ArrowRight className="h-4 w-4 text-gray-500" />
          </div>
          
          {/* Logo */}
          <div className="relative mb-8">
            <TauriLogoLarge className="h-24 w-24 sm:h-32 sm:w-32 animate-float" />
            <div className="absolute inset-0 bg-[#24C8DB]/30 blur-[60px] rounded-full" />
          </div>
          
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="text-gray-900">Build</span>{" "}
            <span className="gradient-text">smaller</span>
            <br />
            <span className="text-gray-900">faster</span>{" "}
            <span className="gradient-text">more secure</span>
            <br />
            <span className="text-gray-900">desktop apps</span>
          </h1>
          
          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mb-10 leading-relaxed">
            A framework for building tiny, blazingly fast binaries for all major desktop and mobile platforms.
            Developers can integrate any front-end framework that compiles to HTML, JS and CSS for building their user interface.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button 
              size="lg" 
              className="bg-[#24C8DB] hover:bg-[#1eb5c7] text-black font-semibold px-8 py-6 text-lg rounded-xl transition-all hover:scale-105 glow-blue"
            >
              <Download className="mr-2 h-5 w-5" />
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-8 py-6 text-lg rounded-xl"
            >
              <GithubIcon className="mr-2 h-5 w-5" />
              View on GitHub
            </Button>
          </div>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 sm:gap-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}

export default Hero
