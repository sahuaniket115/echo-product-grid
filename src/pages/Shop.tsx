
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { products } from '@/utils/productData';
import ProductGrid from '@/components/ProductGrid';
import ProductsSection from '@/components/ProductsSection';
import { useFilters } from '@/hooks/useFilters';

const Shop = () => {
  const [cartItems, setCartItems] = React.useState(2); // Mock cart items
  const {
    filteredProducts,
    searchQuery,
    setSearchQuery,
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
    resetFilters,
    isLoading
  } = useFilters({
    products,
    initialPriceRange: { min: 0, max: 1000 }
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        cartItemCount={cartItems}
      />
      
      <main className="flex-1 w-full">
        <div className="container mx-auto px-4">
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
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Shop;
