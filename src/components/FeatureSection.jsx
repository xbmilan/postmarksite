import React from 'react'
import { Search, MapPin, Heart } from 'lucide-react'

const FeatureSection = () => {
  const features = [
    {
      icon: Search,
      title: "Mysteries by Mail",
      description: "Solve family-friendly whodunits together. Each letter contains clues, puzzles, and interactive elements that bring detective work to your dining table.",
      color: "text-vintage-red"
    },
    {
      icon: MapPin,
      title: "Historic Adventures",
      description: "Journey to distant lands and times through immersive storytelling. From ancient civilizations to pioneering expeditions, history comes alive in your hands.",
      color: "text-ink-700"
    },
    {
      icon: Heart,
      title: "Faith & Courage",
      description: "Be inspired by real-life heroes of history who showed extraordinary courage and faith. Stories that uplift and encourage the whole family.",
      color: "text-vintage-gold"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-parchment-100 to-cream-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink-800 mb-6">
            Three Worlds of Wonder
          </h2>
          <p className="text-xl text-ink-600 max-w-2xl mx-auto">
            Each subscription series offers a unique journey, carefully crafted to engage, educate, and inspire readers of all ages.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-cream-300 card-hover group"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-cream-200 to-parchment-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-serif text-2xl font-semibold text-ink-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-ink-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative element */}
              <div className="mt-6 pt-6 border-t border-cream-300">
                <div className="flex items-center gap-2 text-sm text-ink-500">
                  <div className={`w-2 h-2 rounded-full ${feature.color.replace('text-', 'bg-')}`}></div>
                  <span>Coming Soon</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-ink-600 mb-6">
            Ready to begin your postal adventure?
          </p>
          <button 
            onClick={() => document.querySelector('input[name="email"]').focus()}
            className="btn-secondary"
          >
            Join the Waitlist Above
          </button>
        </div>
      </div>
    </section>
  )
}

export default FeatureSection
