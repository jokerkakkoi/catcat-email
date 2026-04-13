import { 
  Zap, 
  Shield, 
  Globe, 
  Smartphone, 
  Code2, 
  Layers,
  Cpu,
  Lock,
  Rocket
} from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Build applications with Rust that run at native speed. Tauri apps are significantly smaller and faster than Electron alternatives.",
    color: "#FFC131",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description: "Security is our priority. Tauri uses a multi-process architecture with sandboxed webviews and Rust's memory safety guarantees.",
    color: "#24C8DB",
  },
  {
    icon: Globe,
    title: "Cross Platform",
    description: "Build for Linux, macOS, Windows, iOS and Android from a single codebase. One codebase, all platforms.",
    color: "#FFC131",
  },
  {
    icon: Smartphone,
    title: "Mobile Ready",
    description: "Tauri 2.0 brings mobile support to the framework. Build for iOS and Android using the same codebase as desktop.",
    color: "#24C8DB",
  },
  {
    icon: Code2,
    title: "Frontend Agnostic",
    description: "Use any frontend framework that compiles to HTML, CSS and JavaScript. React, Vue, Svelte, Angular, or vanilla JS.",
    color: "#FFC131",
  },
  {
    icon: Cpu,
    title: "Native Performance",
    description: "Rust-powered backend with direct access to native APIs. No bottlenecks, just pure performance.",
    color: "#24C8DB",
  },
]

const techStack = [
  { name: "React", icon: "⚛️" },
  { name: "Vue", icon: "💚" },
  { name: "Svelte", icon: "🔥" },
  { name: "Angular", icon: "🅰️" },
  { name: "Solid", icon: "💠" },
  { name: "Vanilla", icon: "🍦" },
]

export function Features() {
  return (
    <section id="develop" className="relative py-24 sm:py-32 bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#24C8DB]/5 rounded-full blur-[150px]" />
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything you need to{" "}
            <span className="gradient-text">build amazing apps</span>
          </h2>
          <p className="text-lg text-gray-600">
            Tauri provides a complete toolchain for building secure, fast, and cross-platform applications
            with your favorite frontend framework.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-gray-50 border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:bg-gray-100"
            >
              {/* Glow Effect */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${feature.color}10, transparent 40%)`,
                }}
              />

              <div className="relative z-10">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${feature.color}15` }}
                >
                  <feature.icon className="h-6 w-6" style={{ color: feature.color }} />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-800">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Tech Stack Section */}
        <div className="relative rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 p-8 sm:p-12 overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFC131]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Works with your favorite stack
              </h3>
              <p className="text-gray-600 text-lg mb-8">
                Bring your own frontend framework. Tauri is completely agnostic,
                meaning you can use whatever you're most comfortable with.
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <span>{tech.icon}</span>
                    <span className="font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Code Preview */}
            <div className="flex-1 w-full max-w-lg">
              <div className="rounded-xl bg-gray-900 border border-gray-700 overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-700">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs text-gray-400">src-tauri/Cargo.toml</span>
                </div>
                <div className="p-4 font-mono text-sm overflow-x-auto">
                  <pre className="text-gray-300">
                    <code>{`[package]
name = "my-tauri-app"
version = "0.1.0"
edition = "2021"

[dependencies]
tauri = { version = "2.0", features = [] }

[build-dependencies]
tauri-build = { version = "2.0", features = [] }`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
