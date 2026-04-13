import { Monitor, Smartphone, Tablet, Apple, AppWindow } from "lucide-react"

const platforms = [
  {
    name: "macOS",
    icon: Apple,
    description: "Native macOS apps with full system integration",
    color: "#24C8DB",
  },
  {
    name: "Windows",
    icon: AppWindow,
    description: "Modern Windows applications with native APIs",
    color: "#00A4EF",
  },
  {
    name: "Linux",
    icon: Monitor,
    description: "Linux desktop apps that feel right at home",
    color: "#FFC131",
  },
  {
    name: "iOS",
    icon: Smartphone,
    description: "iPhone and iPad apps from the same codebase",
    color: "#24C8DB",
  },
  {
    name: "Android",
    icon: Tablet,
    description: "Android apps with native performance",
    color: "#3DDC84",
  },
]

export function Platforms() {
  return (
    <section className="relative py-24 sm:py-32 bg-gray-50">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#FFC131]/5 rounded-full blur-[150px]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#24C8DB]/5 rounded-full blur-[150px]" />
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 mb-6">
            <span className="text-sm text-gray-700">One codebase, all platforms</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Build for{" "}
            <span className="gradient-text">every platform</span>
          </h2>
          <p className="text-lg text-gray-600">
            Write once, deploy everywhere. Tauri supports all major desktop and mobile platforms
            from a single Rust codebase.
          </p>
        </div>
        
        {/* Platforms Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:bg-gray-50 text-center"
            >
              <div
                className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${platform.color}15` }}
              >
                <platform.icon
                  className="h-8 w-8 transition-colors"
                  style={{ color: platform.color }}
                />
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {platform.name}
              </h3>

              <p className="text-sm text-gray-500 group-hover:text-gray-600">
                {platform.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "5", label: "Platforms" },
            { value: "600KB", label: "Min App Size" },
            { value: "0s", label: "Cold Start" },
            { value: "100%", label: "Native API Access" },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white border border-gray-200 text-center"
            >
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Platforms
