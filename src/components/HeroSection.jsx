import React, { useState } from 'react'
import { Mail, ArrowRight } from 'lucide-react'

const HeroSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log('Waitlist signup:', formData)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '' })
    }, 3000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-pattern">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream-100/90 to-parchment-200/90"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <div className="w-16 h-16 border-2 border-vintage-gold rounded-full"></div>
      </div>
      <div className="absolute bottom-32 right-16 opacity-20">
        <div className="w-12 h-12 border-2 border-vintage-red rounded-full"></div>
      </div>
      <div className="absolute top-1/3 right-20 opacity-10">
        <Mail className="w-24 h-24 text-ink-600" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Main headline */}
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-ink-800 mb-6 text-shadow leading-tight">
          Stories Worth Waiting For you,
          <span className="block text-vintage-red">Delivered to Your Mailbox</span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-ink-700 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          Twice a month, your family will receive an envelope filled with adventure, mystery, and wonder — 
          <span className="font-medium text-vintage-red"> a story you can hold in your hands.</span>
        </p>
        
        {/* Email signup form */}
        <div className="max-w-md mx-auto">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-cream-300">
                <div className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-cream-400 focus:border-vintage-red focus:ring-2 focus:ring-vintage-red/20 outline-none transition-all duration-300 bg-cream-50"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-cream-400 focus:border-vintage-red focus:ring-2 focus:ring-vintage-red/20 outline-none transition-all duration-300 bg-cream-50"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full mt-6 btn-primary flex items-center justify-center gap-2 text-lg"
                >
                  Join the Waitlist
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </form>
          ) : (
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-cream-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-ink-800 mb-2">
                  Welcome to the Adventure!
                </h3>
                <p className="text-ink-600">
                  Thank you for joining our waitlist. We'll be in touch soon with more details about your upcoming postal adventures.
                </p>
              </div>
            </div>
          )}
        </div>
        
        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-ink-600">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-vintage-gold rounded-full"></div>
            <span>Family-Friendly Stories</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-vintage-gold rounded-full"></div>
            <span>Premium Paper & Design</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-vintage-gold rounded-full"></div>
            <span>Twice Monthly Delivery</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
