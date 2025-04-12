
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroBanner = () => {
  return (
    <div className="bg-gradient-to-r from-shop-primary to-shop-secondary text-white py-16 px-4">
      <div className="container mx-auto text-center max-w-5xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
          Discover Quality Products
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-slide-up">
          Explore our curated collection of premium items at competitive prices.
        </p>
        <div className="animate-zoom-in flex justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-white text-shop-primary hover:bg-white/90"
            asChild
          >
            <Link to="/shop">Shop Now</Link>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white/10 dark:text-white dark:hover:text-white"
            asChild
          >
            <Link to="/featured">New Arrivals</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
