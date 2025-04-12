
import React, { useState, useEffect } from 'react';
import { products, getFilters } from '@/utils/productData';
import Header from '@/components/Header';
import FilterSidebar from '@/components/FilterSidebar';
import ProductGrid from '@/components/ProductGrid';
import { useFilters } from '@/hooks/useFilters';
import { Button } from '@/components/ui/button';
import { 
  Grid2X2, 
  LayoutList,
  SlidersHorizontal,
  ChevronDown,
  X
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const filters = getFilters();

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

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      
      <main className="flex-1">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-shop-primary to-shop-secondary text-white py-12 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Discover Quality Products
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-slide-up">
              Explore our curated collection of premium items at competitive prices.
            </p>
            <div className="animate-zoom-in">
              <Button size="lg" className="bg-white text-shop-primary hover:bg-white/90">
                Shop Now
              </Button>
            </div>
          </div>
        </div>
        
        {/* Shop Content */}
        <div className="container mx-auto px-4 py-8">
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
      </main>
      
      {/* Footer */}
      <footer className="bg-muted py-12 px-4">
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
