import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Crown, Star, Sparkles, Scroll, Compass, Sword } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import SuccessMessage from '@/components/SuccessMessage';
import { insertWaitlistSignupSchema, type InsertWaitlistSignup } from '@/schema';
import { API_BASE_URL } from '@/lib/utils';

/**
 * Home page component featuring the Postmark Tales landing page
 * Includes hero section, waitlist form, feature cards, and how-it-works section
 */
export default function Home() {
  const [showSuccess, setShowSuccess] = useState(false);
  const queryClient = useQueryClient();

  // Fetch waitlist count
  const { data: countData } = useQuery({
    queryKey: ['waitlist-count'],
    queryFn: async () => {
      const response = await fetch(`${API_BASE_URL}/waitlist/count`);
      if (!response.ok) throw new Error('Failed to fetch count');
      return response.json();
    },
  });

  // Form setup
  const form = useForm<InsertWaitlistSignup>({
    resolver: zodResolver(insertWaitlistSignupSchema),
    defaultValues: {
      name: '',
      email: '',
    },
  });

  // Waitlist signup mutation
  const signupMutation = useMutation({
    mutationFn: async (data: InsertWaitlistSignup) => {
      const response = await fetch(`${API_BASE_URL}/waitlist/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error?.message || 'Failed to join waitlist');
      }
      
      return result;
    },
    onSuccess: () => {
      setShowSuccess(true);
      form.reset();
      queryClient.invalidateQueries({ queryKey: ['waitlist-count'] });
    },
  });

  const onSubmit = (data: InsertWaitlistSignup) => {
    signupMutation.mutate(data);
  };

  if (showSuccess) {
    return (
      <main className="min-h-screen bg-vintage-paper">
        <div className="container mx-auto px-4 py-8">
          <SuccessMessage />
          <div className="text-center mt-8">
            <Button
              onClick={() => setShowSuccess(false)}
              variant="outline"
              className="font-lato"
            >
              Back to Home
            </Button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-vintage-paper">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          {/* Floating decorative elements */}
          <Star className="absolute top-20 left-10 w-8 h-8 text-muted-gold animate-float opacity-60" />
          <Sparkles className="absolute top-32 right-16 w-6 h-6 text-accent animate-bounce-gentle opacity-70" />
          <Crown 
            className="absolute bottom-20 left-20 w-10 h-10 text-vintage-red animate-float opacity-50" 
            style={{ animationDelay: '2s' }} 
          />
          
          <div className="animate-slide-up">
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-ink-blue mb-6 text-shadow-vintage">
              Postmark Tales
            </h1>
            <p className="font-lato text-xl md:text-2xl text-warm-gray mb-8 max-w-3xl mx-auto">
              Where every story becomes an epic adventure. Join thousands of storytellers 
              crafting legendary tales that span realms, time, and imagination.
            </p>
            
            {/* Social proof */}
            {countData?.data?.count !== undefined && (
              <div className="inline-flex items-center gap-2 bg-parchment border border-muted-gold/30 rounded-full px-6 py-3 mb-12 animate-fade-in">
                <Crown className="w-5 h-5 text-muted-gold" />
                <span className="font-lato text-sm font-medium text-ink-blue">
                  {countData.data.count.toLocaleString()} adventurers already joined
                </span>
              </div>
            )}
          </div>

          {/* Waitlist Form */}
          <div className="max-w-md mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-cream border border-muted-gold/20 rounded-lg p-8 shadow-lg">
              <h2 className="font-playfair text-2xl font-semibold text-ink-blue mb-6">
                Begin Your Quest
              </h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-lato font-medium text-ink-blue">
                          Your Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your name"
                            className="font-lato"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-lato font-medium text-ink-blue">
                          Email Address
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Enter your email"
                            className="font-lato"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button
                    type="submit"
                    className="w-full bg-vintage-red hover:bg-vintage-red/90 text-cream font-lato font-medium py-3"
                    disabled={signupMutation.isPending}
                  >
                    {signupMutation.isPending ? 'Joining...' : 'Join the Waitlist'}
                  </Button>
                  
                  {signupMutation.error && (
                    <p className="text-sm text-red-500 text-center font-lato">
                      {signupMutation.error.message}
                    </p>
                  )}
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-20 bg-parchment">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-ink-blue text-center mb-16 animate-slide-up">
            Epic Adventures Await
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Crown,
                title: 'Epic Quests',
                description: 'Embark on legendary journeys filled with mystery, danger, and glory.',
                delay: '0s',
              },
              {
                icon: Sparkles,
                title: 'Mystic Tales',
                description: 'Discover magical realms where anything is possible and wonder never ends.',
                delay: '0.2s',
              },
              {
                icon: Star,
                title: 'Heroic Legends',
                description: 'Forge your own path and become the hero of stories yet untold.',
                delay: '0.4s',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-cream border border-muted-gold/20 rounded-lg p-8 text-center hover:shadow-lg transition-shadow animate-slide-up"
                style={{ animationDelay: feature.delay }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-muted-gold to-accent rounded-full flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-ink-blue" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-ink-blue mb-4">
                  {feature.title}
                </h3>
                <p className="font-lato text-warm-gray">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-ink-blue text-center mb-16 animate-slide-up">
            How Your Adventure Begins
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: 1,
                  icon: Scroll,
                  title: 'Join the Waitlist',
                  description: 'Sign up to secure your place among the first adventurers.',
                },
                {
                  step: 2,
                  icon: Compass,
                  title: 'Get Early Access',
                  description: 'Receive exclusive invitations and behind-the-scenes content.',
                },
                {
                  step: 3,
                  icon: Sword,
                  title: 'Start Your Quest',
                  description: 'Begin crafting and sharing your own legendary tales.',
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="text-center animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-muted-gold to-accent rounded-full flex items-center justify-center">
                      <step.icon className="w-10 h-10 text-ink-blue" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-vintage-red rounded-full flex items-center justify-center">
                      <span className="text-cream font-bold text-sm">{step.step}</span>
                    </div>
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-ink-blue mb-4">
                    {step.title}
                  </h3>
                  <p className="font-lato text-warm-gray">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink-blue text-cream py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Crown className="w-6 h-6 text-muted-gold" />
            <span className="font-playfair text-xl font-semibold">Postmark Tales</span>
          </div>
          <p className="font-lato text-cream/80">
            © 2024 Postmark Tales. All rights reserved. Adventure awaits.
          </p>
        </div>
      </footer>
    </main>
  );
}
