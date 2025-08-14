import { Crown, Star, Sparkles } from 'lucide-react';

/**
 * Success message component displayed after successful waitlist signup
 * Features adventure-themed styling with animated elements
 */
export default function SuccessMessage() {
  return (
    <div
      className="text-center py-12 animate-fade-in"
      role="alert"
      aria-labelledby="success-title"
    >
      {/* Animated crown with glow effect */}
      <div className="relative mb-8">
        <div className="w-20 h-20 mx-auto bg-gradient-to-br from-muted-gold to-accent rounded-full flex items-center justify-center animate-pulse-glow">
          <Crown className="w-10 h-10 text-ink-blue" />
        </div>
        
        {/* Floating decorative elements */}
        <Star className="absolute -top-2 -left-2 w-6 h-6 text-muted-gold animate-bounce-gentle" />
        <Sparkles className="absolute -top-4 -right-4 w-5 h-5 text-accent animate-wiggle" />
        <Star 
          className="absolute -bottom-2 -right-2 w-4 h-4 text-muted-gold animate-bounce-gentle" 
          style={{ animationDelay: '1s' }} 
        />
        <Sparkles 
          className="absolute -bottom-4 -left-4 w-6 h-6 text-accent animate-wiggle" 
          style={{ animationDelay: '0.5s' }} 
        />
      </div>

      {/* Success message */}
      <h2
        id="success-title"
        className="font-playfair text-3xl md:text-4xl font-bold text-ink-blue mb-4 text-shadow-vintage"
      >
        Welcome to the Adventure!
      </h2>
      
      <p className="font-lato text-lg text-warm-gray mb-6 max-w-md mx-auto">
        You&apos;ve successfully joined our waitlist. Your epic journey begins soon!
      </p>
      
      <div className="bg-parchment border border-muted-gold/30 rounded-lg p-6 max-w-md mx-auto">
        <p className="font-lato text-sm text-ink-blue">
          <strong>What&apos;s next?</strong> We&apos;ll send you exclusive updates about Postmark Tales, 
          including early access opportunities and behind-the-scenes content.
        </p>
      </div>
    </div>
  );
}
