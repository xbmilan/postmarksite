import React, { useState } from 'react'
import { Mail, MapPin, Heart, ArrowRight, Feather, Scroll, Users } from 'lucide-react'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import HowItWorksSection from './components/HowItWorksSection'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-50 to-parchment-100">
      <HeroSection />
      <FeatureSection />
      <HowItWorksSection />
    </div>
  )
}

export default App
