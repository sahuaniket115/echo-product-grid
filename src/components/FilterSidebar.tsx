
import React, { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Category } from '@/utils/productData';
import { ChevronDown, ChevronUp, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FilterSidebarProps {
  categories: Category[];
  priceRange: {
    min: number;
    max: number;
  };
  selectedCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
  priceFilter: [number, number];
  setPriceFilter: (price: [number, number]) => void;
  ratings: number[];
  setRatings: (ratings: number[]) => void;
  onlyInStock: boolean;
  setOnlyInStock: (inStock: boolean) => void;
  showSales: boolean;
  setShowSales: (showSales: boolean) => void;
  isOpen: boolean;
  onClose: () => void;
  resetFilters: () => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  categories,
  priceRange,
  selectedCategories,
  setSelectedCategories,
  priceFilter,
  setPriceFilter,
  ratings,
  setRatings,
  onlyInStock,
  setOnlyInStock,
  showSales,
  setShowSales,
  isOpen,
  onClose,
  resetFilters
}) => {
  const [isCollapsedCategories, setIsCollapsedCategories] = useState(false);
  const [isCollapsedPrice, setIsCollapsedPrice] = useState(false);
  const [isCollapsedRating, setIsCollapsedRating] = useState(false);
  const [isCollapsedAvailability, setIsCollapsedAvailability] = useState(false);

  const toggleCategory = (categoryId: string) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
    } else {
      setSelectedCategories([...selectedCategories, categoryId]);
    }
  };

  const toggleRating = (rating: number) => {
    if (ratings.includes(rating)) {
      setRatings(ratings.filter(r => r !== rating));
    } else {
      setRatings([...ratings, rating]);
    }
  };

  const handlePriceChange = (value: number[]) => {
    setPriceFilter([value[0], value[1]]);
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar */}
      <aside 
        className={`
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          fixed md:sticky top-0 md:top-20 left-0 h-full md:h-[calc(100vh-80px)] 
          w-[280px] bg-background z-50 md:z-0 p-5 overflow-y-auto
          border-r transition-transform duration-300 ease-in-out
        `}
      >
        {/* Mobile Close Button */}
        <div className="flex justify-between items-center mb-6 md:hidden">
          <h2 className="text-xl font-semibold">Filters</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Desktop Title */}
        <div className="hidden md:flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Filters</h2>
          <Button 
            variant="ghost" 
            onClick={resetFilters} 
            className="text-sm text-muted-foreground hover:text-primary"
          >
            Reset All
          </Button>
        </div>

        {/* Categories */}
        <div className="mb-6">
          <div 
            className="flex justify-between items-center cursor-pointer mb-4"
            onClick={() => setIsCollapsedCategories(!isCollapsedCategories)}
          >
            <h3 className="font-medium">Categories</h3>
            {isCollapsedCategories ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronUp className="h-4 w-4" />
            )}
          </div>
          
          {!isCollapsedCategories && (
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`category-${category.id}`}
                    checked={selectedCategories.includes(category.id)}
                    onCheckedChange={() => toggleCategory(category.id)}
                  />
                  <label 
                    htmlFor={`category-${category.id}`}
                    className="text-sm flex items-center justify-between w-full cursor-pointer"
                  >
                    <span>{category.name}</span>
                    <span className="text-muted-foreground">({category.count})</span>
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Price Range */}
        <div className="mb-6">
          <div 
            className="flex justify-between items-center cursor-pointer mb-4"
            onClick={() => setIsCollapsedPrice(!isCollapsedPrice)}
          >
            <h3 className="font-medium">Price Range</h3>
            {isCollapsedPrice ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronUp className="h-4 w-4" />
            )}
          </div>
          
          {!isCollapsedPrice && (
            <div>
              <div className="mb-4 price-slider">
                <Slider 
                  min={priceRange.min} 
                  max={priceRange.max} 
                  step={5}
                  value={[priceFilter[0], priceFilter[1]]}
                  onValueChange={handlePriceChange}
                  className="my-6"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="px-3 py-1 bg-muted rounded-md text-sm">
                  ${priceFilter[0].toFixed(0)}
                </div>
                <div className="px-3 py-1 bg-muted rounded-md text-sm">
                  ${priceFilter[1].toFixed(0)}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Rating */}
        <div className="mb-6">
          <div 
            className="flex justify-between items-center cursor-pointer mb-4"
            onClick={() => setIsCollapsedRating(!isCollapsedRating)}
          >
            <h3 className="font-medium">Customer Rating</h3>
            {isCollapsedRating ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronUp className="h-4 w-4" />
            )}
          </div>
          
          {!isCollapsedRating && (
            <div className="space-y-2">
              {[4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`rating-${rating}`}
                    checked={ratings.includes(rating)}
                    onCheckedChange={() => toggleRating(rating)}
                  />
                  <label 
                    htmlFor={`rating-${rating}`}
                    className="text-sm flex items-center cursor-pointer"
                  >
                    <span className="flex">
                      {Array(rating).fill(null).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                      {Array(5 - rating).fill(null).map((_, i) => (
                        <Star key={i + rating} className="h-4 w-4 text-muted-foreground" />
                      ))}
                    </span>
                    <span className="ml-1">{rating === 4 ? '& Up' : ''}</span>
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Availability */}
        <div className="mb-6">
          <div 
            className="flex justify-between items-center cursor-pointer mb-4"
            onClick={() => setIsCollapsedAvailability(!isCollapsedAvailability)}
          >
            <h3 className="font-medium">Availability</h3>
            {isCollapsedAvailability ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronUp className="h-4 w-4" />
            )}
          </div>
          
          {!isCollapsedAvailability && (
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="in-stock"
                  checked={onlyInStock}
                  onCheckedChange={(checked) => setOnlyInStock(checked as boolean)}
                />
                <label htmlFor="in-stock" className="text-sm cursor-pointer">
                  In Stock Only
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="on-sale"
                  checked={showSales}
                  onCheckedChange={(checked) => setShowSales(checked as boolean)}
                />
                <label htmlFor="on-sale" className="text-sm cursor-pointer">
                  On Sale
                </label>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Apply Button */}
        <div className="mt-8 md:hidden">
          <Button className="w-full" onClick={onClose}>
            Apply Filters
          </Button>
        </div>
      </aside>
    </>
  );
};

// Star icon component for rating display
const Star = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

export default FilterSidebar;
