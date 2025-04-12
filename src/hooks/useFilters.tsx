
import { useState, useEffect, useMemo } from 'react';
import { Product } from '@/utils/productData';

interface UseFiltersProps {
  products: Product[];
  initialPriceRange: {
    min: number;
    max: number;
  };
}

interface UseFiltersReturn {
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
}

export const useFilters = ({ products, initialPriceRange }: UseFiltersProps): UseFiltersReturn => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceFilter, setPriceFilter] = useState<[number, number]>([
    initialPriceRange.min, 
    initialPriceRange.max
  ]);
  const [ratingFilter, setRatingFilter] = useState<number[]>([]);
  const [onlyInStock, setOnlyInStock] = useState<boolean>(false);
  const [showSales, setShowSales] = useState<boolean>(false);
  const [sortOption, setSortOption] = useState<string>('featured');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const resetFilters = () => {
    setSelectedCategories([]);
    setPriceFilter([initialPriceRange.min, initialPriceRange.max]);
    setRatingFilter([]);
    setOnlyInStock(false);
    setShowSales(false);
    setSortOption('featured');
    setSearchQuery('');
  };

  // Apply filters
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Filter by categories
    if (selectedCategories.length > 0) {
      result = result.filter(product => 
        selectedCategories.includes(product.category)
      );
    }

    // Filter by price
    result = result.filter(product => 
      product.price >= priceFilter[0] && product.price <= priceFilter[1]
    );

    // Filter by rating
    if (ratingFilter.length > 0) {
      result = result.filter(product => {
        // If rating filter contains 4, include 4 and above
        if (ratingFilter.includes(4) && product.rating >= 4) return true;
        
        // For other ratings, check if the floor of the rating is in the filter
        return ratingFilter.includes(Math.floor(product.rating));
      });
    }

    // Filter by stock
    if (onlyInStock) {
      result = result.filter(product => product.stock > 0);
    }

    // Filter by sale
    if (showSales) {
      result = result.filter(product => product.isSale);
    }

    // Apply sorting
    switch (sortOption) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        result.sort((a, b) => a.isNew ? -1 : b.isNew ? 1 : 0);
        break;
      case 'featured':
      default:
        result.sort((a, b) => a.isFeatured ? -1 : b.isFeatured ? 1 : 0);
        break;
    }

    return result;
  }, [
    products, 
    selectedCategories, 
    priceFilter, 
    ratingFilter, 
    onlyInStock, 
    showSales, 
    sortOption,
    searchQuery
  ]);

  return {
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
  };
};
