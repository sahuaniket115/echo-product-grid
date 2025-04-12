
import React, { useState } from 'react';
import { 
  Grid2X2, 
  LayoutList,
  SlidersHorizontal,
  ChevronDown,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import FilterSidebar from '@/components/FilterSidebar';
import ProductGrid from '@/components/ProductGrid';
import { Product, getFilters } from '@/utils/productData';

interface ProductsSectionProps {
  filteredProducts: Product[];
  selectedCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
  priceFilter: [number, number];
  setPriceFilter: (price: [number, number]) => void;
  ratingFilter: number[];
  setRatingFilter: (ratings: number[]) => void;
  onlyInStock: boolean;
  setOnlyInStock: (inStock: boolean) => void;
  showSales: boolean;
  setShowSales: (showSales: boolean) => void;
  sortOption: string;
  setSortOption: (option: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  resetFilters: () => void;
  isLoading: boolean;
}

const ProductsSection: React.FC<ProductsSectionProps> = ({
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
  resetFilters,
  isLoading
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const filters = getFilters();

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
  );
};

export default ProductsSection;
