import React from 'react'
import { BookOpen, Mail, Users } from 'lucide-react'

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: BookOpen,
      title: "Pick Your Story Series",
      description: "Choose from our three captivating series: Mysteries by Mail, Historic Adventures, or Faith & Courage. Each offers a unique journey tailored to your family's interests."
    },
    {
      number: "02",
      icon: Mail,
      title: "Receive Your Letters Twice a Month",
      description: "Every two weeks, a beautifully designed envelope arrives at your door, containing premium paper, vintage-style illustrations, and immersive storytelling elements."
    },
    {
      number: "03",
      icon: Users,
      title: "Read, Explore, and Enjoy Together",
      description: "Gather your family around and dive into stories that spark imagination, encourage discussion, and create lasting memories. No screens required—just pure storytelling magic."
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-cream-100 to-parchment-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink-800 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-ink-600 max-w-2xl mx-auto">
            Getting started with Postmark Tales is simple. Here's how your postal adventure begins.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Step content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="mb-4">
                  <span className="inline-block font-serif text-6xl font-bold text-vintage-red/20">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-serif text-3xl font-semibold text-ink-800 mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-ink-600 leading-relaxed max-w-lg">
                  {step.description}
                </p>
              </div>

              {/* Step visual */}
              <div className="flex-1 flex justify-center">
                <div className="relative">
                  {/* Background circle */}
                  <div className="w-48 h-48 bg-gradient-to-br from-cream-200 to-parchment-300 rounded-full flex items-center justify-center shadow-xl">
                    <step.icon className="w-20 h-20 text-ink-700" />
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-vintage-red rounded-full opacity-60"></div>
                  <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-vintage-gold rounded-full opacity-40"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center mt-20">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-cream-300 max-w-2xl mx-auto">
            <h3 className="font-serif text-3xl font-semibold text-ink-800 mb-4">
              Ready to Begin?
            </h3>
            <p className="text-lg text-ink-600 mb-6">
              Join thousands of families already on our waitlist. Be the first to know when Postmark Tales launches.
            </p>
            <button 
              onClick={() => {
                document.querySelector('input[name="email"]').scrollIntoView({ behavior: 'smooth' })
                setTimeout(() => document.querySelector('input[name="email"]').focus(), 500)
              }}
              className="btn-primary text-lg"
            >
              Join the Adventure
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection
