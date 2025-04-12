
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { products } from '@/utils/productData';
import ProductGrid from '@/components/ProductGrid';
import { useFilters } from '@/hooks/useFilters';

const Shop = () => {
  const [cartItems, setCartItems] = React.useState(2); // Mock cart items
  const {
    filteredProducts,
    searchQuery,
    setSearchQuery,
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
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-8">Shop All Products</h1>
          <ProductGrid products={products} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Shop;
