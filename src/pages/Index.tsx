
import React, { useState, useEffect } from 'react';
import { products, getFilters } from '@/utils/productData';
import Header from '@/components/Header';
import FilterSidebar from '@/components/FilterSidebar';
import ProductGrid from '@/components/ProductGrid';
import { useFilters } from '@/hooks/useFilters';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { 
  Grid2X2, 
  LayoutList,
  SlidersHorizontal,
  ChevronDown,
  X,
  ArrowRight,
  Heart,
  TrendingUp
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from '@/components/ui/badge';

// Create a component for the featured categories
const FeaturedCategories = () => {
  const categories = ["Electronics", "Clothing", "Home & Garden", "Sports", "Beauty", "Books"];
  const { toast } = useToast();
  
  const handleCategoryClick = (category: string) => {
    toast({
      title: category,
      description: `Browsing ${category} category`,
    });
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 my-10">
      {categories.map((category) => (
        <div 
          key={category}
          onClick={() => handleCategoryClick(category)}
          className="flex flex-col items-center justify-center p-6 bg-accent/10 rounded-lg cursor-pointer hover:bg-accent/20 transition-colors"
        >
          <div className="w-12 h-12 flex items-center justify-center bg-accent rounded-full mb-3">
            <TrendingUp className="w-6 h-6 text-accent-foreground" />
          </div>
          <span className="font-medium">{category}</span>
        </div>
      ))}
    </div>
  );
};

// Create a component for the trending products section
const TrendingProducts = () => {
  const trendingProducts = products.slice(0, 4);
  const { toast } = useToast();

  return (
    <div className="mb-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Trending Products</h2>
        <Button variant="ghost" className="flex items-center">
          See All <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {trendingProducts.map((product) => (
          <div key={product.id} className="product-card overflow-hidden">
            <div className="relative pb-[100%]">
              <img 
                src={product.image} 
                alt={product.name} 
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm rounded-full"
                onClick={() => toast({
                  title: "Added to Wishlist",
                  description: `${product.name} has been added to your wishlist`,
                })}
              >
                <Heart className="h-4 w-4" />
              </Button>
            </div>
            <div className="p-4">
              <h3 className="font-medium line-clamp-1">{product.name}</h3>
              <div className="flex justify-between items-center mt-2">
                <span className="font-bold">${product.price.toFixed(2)}</span>
                {product.salePrice && (
                  <Badge variant="secondary" className="bg-shop-accent text-white">
                    Sale
                  </Badge>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [cartItems, setCartItems] = useState(2); // Mock cart items
  const filters = getFilters();
  const { toast } = useToast();

  const {
    filteredProducts,
    selectedCategories,
    setSelectedCategories,
    priceFilter,
    setPriceFilter,
    ratingFilter,
    setRatingFilter,
    onlyInStock,
    setOnlyInStock,
    showSales,
    setShowSales,
    sortOption,
    setSortOption,
    searchQuery,
    setSearchQuery,
    resetFilters
  } = useFilters({
    products,
    initialPriceRange: filters.priceRange
  });

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // Function to count active filters
  const getActiveFilterCount = () => {
    let count = 0;
    if (selectedCategories.length > 0) count += 1;
    if (priceFilter[0] !== filters.priceRange.min || 
        priceFilter[1] !== filters.priceRange.max) count += 1;
    if (ratingFilter.length > 0) count += 1;
    if (onlyInStock) count += 1;
    if (showSales) count += 1;
    return count;
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thanks for subscribing!",
      description: "You'll receive our newsletter with the latest products and deals.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        cartItemCount={cartItems}
      />
      
      <main className="flex-1 w-full">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-shop-primary to-shop-secondary text-white py-16 px-4">
          <div className="container mx-auto text-center max-w-5xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
              Discover Quality Products
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-slide-up">
              Explore our curated collection of premium items at competitive prices.
            </p>
            <div className="animate-zoom-in flex justify-center gap-4">
              <Button size="lg" className="bg-white text-shop-primary hover:bg-white/90">
                Shop Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                New Arrivals
              </Button>
            </div>
          </div>
        </div>
        
        {/* Featured Categories */}
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-4">Browse Categories</h2>
          <FeaturedCategories />
        </div>
        
        {/* Trending Products */}
        <div className="container mx-auto px-4">
          <TrendingProducts />
        </div>
        
        {/* Shop Content */}
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6">All Products</h2>
          
          {/* Mobile Filter Button */}
          <div className="md:hidden mb-4">
            <Button
              variant="outline"
              className="w-full flex items-center justify-between"
              onClick={toggleSidebar}
            >
              <span className="flex items-center">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filters
                {getActiveFilterCount() > 0 && (
                  <Badge className="ml-2" variant="secondary">
                    {getActiveFilterCount()}
                  </Badge>
                )}
              </span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex flex-col md:flex-row">
            {/* Filter Sidebar */}
            <FilterSidebar
              categories={filters.categories}
              priceRange={filters.priceRange}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              priceFilter={priceFilter}
              setPriceFilter={setPriceFilter}
              ratings={ratingFilter}
              setRatings={setRatingFilter}
              onlyInStock={onlyInStock}
              setOnlyInStock={setOnlyInStock}
              showSales={showSales}
              setShowSales={setShowSales}
              isOpen={isSidebarOpen}
              onClose={() => setIsSidebarOpen(false)}
              resetFilters={resetFilters}
            />
            
            {/* Products Section */}
            <div className="flex-1 md:pl-8">
              {/* Toolbar */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <div className="flex items-center">
                  <span className="text-muted-foreground mr-2">
                    {filteredProducts.length} Products
                  </span>
                  
                  {/* Active Filters */}
                  {getActiveFilterCount() > 0 && (
                    <div className="flex items-center ml-2">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-xs h-8 px-2 text-muted-foreground hover:text-foreground"
                        onClick={resetFilters}
                      >
                        <X className="h-3 w-3 mr-1" />
                        Clear all filters
                      </Button>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center space-x-2 w-full sm:w-auto">
                  {/* Sort Dropdown */}
                  <Select 
                    value={sortOption} 
                    onValueChange={setSortOption}
                  >
                    <SelectTrigger className="w-full sm:w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Best Rating</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  {/* View Toggle */}
                  <div className="hidden md:flex border rounded-md">
                    <Button variant="ghost" size="icon" className="h-10 w-10 rounded-none border-r">
                      <Grid2X2 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-10 w-10 rounded-none">
                      <LayoutList className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Product Grid */}
              <ProductGrid products={filteredProducts} isLoading={isLoading} />
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
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
      </main>
      
      {/* Footer */}
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
    </div>
  );
};

export default Index;
