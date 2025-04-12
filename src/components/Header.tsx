
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, Menu, User, X, Heart, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from './ThemeToggle';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  cartItemCount?: number;
}

const Header: React.FC<HeaderProps> = ({ 
  searchQuery, 
  setSearchQuery, 
  cartItemCount = 0 
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Search initiated",
      description: `Searching for: ${searchQuery}`,
    });
    navigate('/shop');
  };

  const handleWishlistClick = () => {
    toast({
      title: "Wishlist",
      description: "Wishlist feature coming soon!",
    });
  };
  
  const handleNotificationsClick = () => {
    toast({
      title: "Notifications",
      description: "You have no new notifications",
    });
  };

  const handleCartClick = () => {
    toast({
      title: "Shopping Cart",
      description: cartItemCount > 0 ? `You have ${cartItemCount} items in your cart` : "Your cart is empty",
    });
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">ShopCatalog</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/shop" className="font-medium hover:text-primary transition-colors">
              Shop
            </Link>
            <Link to="/categories" className="font-medium hover:text-primary transition-colors">
              Categories
            </Link>
            <Link to="/featured" className="font-medium hover:text-primary transition-colors">
              Featured
            </Link>
          </nav>

          {/* Search and Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className={`${isSearchOpen ? 'flex' : 'hidden md:flex'} items-center relative`}>
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 rounded-full border border-input bg-background focus:border-primary focus:outline-none w-full md:w-64"
                />
                <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
                {isSearchOpen && (
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="md:hidden absolute right-2" 
                    onClick={toggleSearch}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </form>
            </div>

            {/* Mobile Search Toggle */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden" 
              onClick={toggleSearch}
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Wishlist Icon */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="hidden md:flex" 
              aria-label="Wishlist"
              onClick={handleWishlistClick}
            >
              <Heart className="h-5 w-5" />
            </Button>

            {/* Notifications Icon */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="hidden md:flex" 
              aria-label="Notifications"
              onClick={handleNotificationsClick}
            >
              <Bell className="h-5 w-5" />
            </Button>

            {/* User Icon */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="hidden md:flex" 
              aria-label="Account"
              onClick={() => toast({
                title: "Account",
                description: "Account features coming soon!",
              })}
            >
              <User className="h-5 w-5" />
            </Button>

            {/* Cart Icon */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative" 
              aria-label="Cart"
              onClick={handleCartClick}
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Button>

            {/* Mobile Menu Toggle */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden" 
              onClick={toggleMobileMenu}
              aria-label="Menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="font-medium hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/shop" 
                className="font-medium hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Shop
              </Link>
              <Link 
                to="/categories" 
                className="font-medium hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Categories
              </Link>
              <Link 
                to="/featured" 
                className="font-medium hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Featured
              </Link>
              <Link 
                to="/" 
                className="font-medium hover:text-primary transition-colors flex items-center gap-2"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleWishlistClick();
                }}
              >
                <Heart className="h-4 w-4" /> Wishlist
              </Link>
              <Link 
                to="/" 
                className="font-medium hover:text-primary transition-colors flex items-center gap-2"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleNotificationsClick();
                }}
              >
                <Bell className="h-4 w-4" /> Notifications
              </Link>
              <Link 
                to="/" 
                className="font-medium hover:text-primary transition-colors flex items-center gap-2"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  toast({
                    title: "Account",
                    description: "Account features coming soon!",
                  });
                }}
              >
                <User className="h-4 w-4" /> My Account
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
