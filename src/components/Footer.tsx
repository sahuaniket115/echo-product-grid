
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-background py-12 px-4 border-t">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ShopCatalog</h3>
            <p className="text-muted-foreground">
              Your destination for quality products and exceptional shopping experience.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-muted-foreground hover:text-primary transition-colors">New Arrivals</a></li>
              <li><a href="/" className="text-muted-foreground hover:text-primary transition-colors">Featured</a></li>
              <li><a href="/" className="text-muted-foreground hover:text-primary transition-colors">Bestsellers</a></li>
              <li><a href="/" className="text-muted-foreground hover:text-primary transition-colors">Special Offers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">About</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-muted-foreground hover:text-primary transition-colors">Our Story</a></li>
              <li><a href="/" className="text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
              <li><a href="/" className="text-muted-foreground hover:text-primary transition-colors">Press</a></li>
              <li><a href="/" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-muted-foreground hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="/" className="text-muted-foreground hover:text-primary transition-colors">Shipping</a></li>
              <li><a href="/" className="text-muted-foreground hover:text-primary transition-colors">Returns</a></li>
              <li><a href="/" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-12 pt-6 text-center text-muted-foreground">
          <p>© 2025 ShopCatalog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
