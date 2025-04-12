
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { TrendingUp } from 'lucide-react';

const Categories = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [cartItems, setCartItems] = React.useState(2); // Mock cart items
  const { toast } = useToast();
  
  const categories = [
    "Electronics", 
    "Clothing", 
    "Home & Garden", 
    "Sports", 
    "Beauty", 
    "Books",
    "Toys",
    "Automotive",
    "Jewelry",
    "Food & Beverage",
    "Health",
    "Pet Supplies"
  ];
  
  const handleCategoryClick = (category: string) => {
    toast({
      title: category,
      description: `Browsing ${category} category`,
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
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-8">Browse Categories</h1>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
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
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Categories;
