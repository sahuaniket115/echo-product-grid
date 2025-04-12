
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TrendingProducts from '@/components/TrendingProducts';
import { products } from '@/utils/productData';

const Featured = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [cartItems, setCartItems] = React.useState(2); // Mock cart items

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        cartItemCount={cartItems}
      />
      
      <main className="flex-1 w-full">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-8">Featured Products</h1>
          <TrendingProducts products={products} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Featured;
