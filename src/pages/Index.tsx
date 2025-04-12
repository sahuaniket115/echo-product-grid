
import React, { useState, useEffect } from 'react';
import { products, getFilters } from '@/utils/productData';
import Header from '@/components/Header';
import { useFilters } from '@/hooks/useFilters';
import HeroBanner from '@/components/HeroBanner';
import FeaturedCategories from '@/components/FeaturedCategories';
import TrendingProducts from '@/components/TrendingProducts';
import ProductsSection from '@/components/ProductsSection';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cartItems, setCartItems] = useState(2); // Mock cart items
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

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        cartItemCount={cartItems}
      />
      
      <main className="flex-1 w-full">
        {/* Hero Banner */}
        <HeroBanner />
        
        {/* Featured Categories */}
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-4">Browse Categories</h2>
          <FeaturedCategories />
        </div>
        
        {/* Trending Products */}
        <div className="container mx-auto px-4">
          <TrendingProducts products={products} />
        </div>
        
        {/* Shop Content with Filters and Products */}
        <ProductsSection 
          filteredProducts={filteredProducts}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          priceFilter={priceFilter}
          setPriceFilter={setPriceFilter}
          ratingFilter={ratingFilter}
          setRatingFilter={setRatingFilter}
          onlyInStock={onlyInStock}
          setOnlyInStock={setOnlyInStock}
          showSales={showSales}
          setShowSales={setShowSales}
          sortOption={sortOption}
          setSortOption={setSortOption}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          resetFilters={resetFilters}
          isLoading={isLoading}
        />

        {/* Newsletter Section */}
        <Newsletter />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
