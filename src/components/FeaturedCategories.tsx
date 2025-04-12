
import React from 'react';
import { TrendingUp } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const FeaturedCategories = () => {
  const categories = ["Electronics", "Clothing", "Home & Garden", "Sports", "Beauty", "Books"];
  const { toast } = useToast();
  
  const handleCategoryClick = (category: string) => {
    toast({
      title: category,
      description: `Browsing ${category} category`,
    });
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 my-10">
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
  );
};

export default FeaturedCategories;
