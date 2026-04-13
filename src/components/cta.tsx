import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function CTA() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-white" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#24C8DB]/10 to-[#FFC131]/10 rounded-full blur-[150px]" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-200 mb-8">
            <Sparkles className="h-4 w-4 text-[#FFC131]" />
            <span className="text-sm text-gray-700">Ready to start building?</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Start building with{" "}
            <span className="gradient-text">Tauri today</span>
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Join thousands of developers building the next generation of desktop and mobile applications.
            Get started in minutes with our CLI and comprehensive documentation.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#24C8DB] hover:bg-[#1eb5c7] text-white font-semibold px-8 py-6 text-lg rounded-xl transition-all hover:scale-105 glow-blue"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-8 py-6 text-lg rounded-xl"
            >
              Read the Docs
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 pt-16 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-8">Trusted by developers at</p>
            <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 opacity-70">
              {["GitHub", "Vercel", "Netlify", "Supabase", "Stripe"].map((company, index) => (
                <span key={index} className="text-lg font-semibold text-gray-600">
                  {company}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
