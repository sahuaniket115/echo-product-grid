
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TrendingProducts from '@/components/TrendingProducts';
import { products } from '@/utils/productData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ProductGrid from '@/components/ProductGrid';

const Featured = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [cartItems, setCartItems] = React.useState(2); // Mock cart items
  
  // Filter for new and featured products
  const newArrivals = products.filter(product => product.isNew).slice(0, 8);
  const featuredProducts = products.filter(product => product.isFeatured).slice(0, 8);
  const saleProducts = products.filter(product => product.isSale).slice(0, 8);

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        cartItemCount={cartItems}
      />
      
      <main className="flex-1 w-full">
        <div className="container mx-auto px-4 py-12">
          <section className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold">Featured Collections</h1>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="bg-shop-primary/10 hover:bg-shop-primary/20 transition-all">
                <CardHeader>
                  <CardTitle className="flex justify-between">
                    <span>New Arrivals</span>
                    <Badge className="bg-shop-accent text-white">{newArrivals.length}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">The latest products added to our collection</p>
                </CardContent>
              </Card>
              
              <Card className="bg-shop-secondary/10 hover:bg-shop-secondary/20 transition-all">
                <CardHeader>
                  <CardTitle className="flex justify-between">
                    <span>Featured Items</span>
                    <Badge className="bg-shop-primary text-white">{featuredProducts.length}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Handpicked selections from our catalog</p>
                </CardContent>
              </Card>
              
              <Card className="bg-shop-accent/10 hover:bg-shop-accent/20 transition-all">
                <CardHeader>
                  <CardTitle className="flex justify-between">
                    <span>On Sale</span>
                    <Badge className="bg-shop-accent text-white">{saleProducts.length}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Limited time discounts on selected items</p>
                </CardContent>
              </Card>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">New Arrivals</h2>
            <ProductGrid products={newArrivals} />
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
            <TrendingProducts products={featuredProducts} />
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-6">Special Offers</h2>
            <ProductGrid products={saleProducts} />
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Featured;
