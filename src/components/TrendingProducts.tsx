
import React from 'react';
import { ArrowRight, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Product } from '@/utils/productData';

interface TrendingProductsProps {
  products: Product[];
}

const TrendingProducts: React.FC<TrendingProductsProps> = ({ products }) => {
  const trendingProducts = products.slice(0, 4);
  const { toast } = useToast();

  return (
    <div className="mb-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Trending Products</h2>
        <Button variant="ghost" className="flex items-center">
          See All <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {trendingProducts.map((product) => (
          <div key={product.id} className="product-card overflow-hidden">
            <div className="relative pb-[100%]">
              <img 
                src={product.images[0]} 
                alt={product.name} 
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm rounded-full"
                onClick={() => toast({
                  title: "Added to Wishlist",
                  description: `${product.name} has been added to your wishlist`,
                })}
              >
                <Heart className="h-4 w-4" />
              </Button>
            </div>
            <div className="p-4">
              <h3 className="font-medium line-clamp-1">{product.name}</h3>
              <div className="flex justify-between items-center mt-2">
                <span className="font-bold">${product.price.toFixed(2)}</span>
                {product.isSale && (
                  <Badge variant="secondary" className="bg-shop-accent text-white">
                    Sale
                  </Badge>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
