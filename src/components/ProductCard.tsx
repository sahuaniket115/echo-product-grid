
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, StarHalf, ShoppingCart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/utils/productData';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const renderRatingStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={`star-${i}`} className="h-4 w-4 fill-accent text-accent" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <StarHalf key="half-star" className="h-4 w-4 fill-accent text-accent" />
      );
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-star-${i}`} className="h-4 w-4 text-muted-foreground" />
      );
    }

    return stars;
  };

  return (
    <div className="product-card group animate-fade-in">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Badges */}
        {product.isNew && (
          <span className="product-badge bg-secondary">New</span>
        )}
        {product.isSale && (
          <span className="product-badge bg-accent">Sale</span>
        )}
        {product.isFeatured && !product.isNew && !product.isSale && (
          <span className="product-badge bg-primary">Featured</span>
        )}

        {/* Quick Actions */}
        <div className="quick-view">
          <Link to={`/product/${product.id}`}>
            <Button size="sm" className="mr-2">
              <Eye className="h-4 w-4 mr-1" />
              Quick View
            </Button>
          </Link>
          <Button size="sm" variant="secondary">
            <ShoppingCart className="h-4 w-4 mr-1" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="font-medium line-clamp-2 hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <div className="mt-2 flex items-center justify-between">
          <div className="flex flex-col">
            <div className="flex items-center space-x-1">
              {renderRatingStars(product.rating)}
              <span className="text-xs text-muted-foreground ml-1">({product.reviewCount})</span>
            </div>
            <div className="mt-1 flex items-center">
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through mr-2">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
              <span className="font-semibold text-foreground">
                ${product.price.toFixed(2)}
              </span>
            </div>
          </div>
          
          <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
