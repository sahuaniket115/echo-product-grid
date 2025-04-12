
import React from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const { toast } = useToast();
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thanks for subscribing!",
      description: "You'll receive our newsletter with the latest products and deals.",
    });
  };

  return (
    <div className="bg-muted py-16 px-4 mt-16">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter and get exclusive offers, product updates, and promotions straight to your inbox.
        </p>
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="flex-grow rounded-md px-4 py-2 border"
            required
          />
          <Button type="submit">Subscribe</Button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
