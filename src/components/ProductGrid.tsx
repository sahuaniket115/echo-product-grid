
import React, { useEffect, useRef, useState } from 'react';
import { Loader } from 'lucide-react';
import ProductCard from './ProductCard';
import { Product } from '@/utils/productData';

interface ProductGridProps {
  products: Product[];
  isLoading?: boolean;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, isLoading = false }) => {
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);
  const productsPerPage = 12;

  // Load initial products
  useEffect(() => {
    if (products.length > 0) {
      setVisibleProducts(products.slice(0, productsPerPage));
      setHasMore(products.length > productsPerPage);
    }
  }, [products]);

  // Set up intersection observer for infinite scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoadingMore) {
          loadMoreProducts();
        }
      },
      { threshold: 1.0 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [hasMore, isLoadingMore, products]);

  const loadMoreProducts = () => {
    if (!hasMore || isLoadingMore) return;
    
    setIsLoadingMore(true);
    
    // Simulate network delay
    setTimeout(() => {
      const nextPage = page + 1;
      const startIndex = page * productsPerPage;
      const endIndex = startIndex + productsPerPage;
      const nextProducts = products.slice(startIndex, endIndex);
      
      if (nextProducts.length > 0) {
        setVisibleProducts(prev => [...prev, ...nextProducts]);
        setPage(nextPage);
        setHasMore(endIndex < products.length);
      } else {
        setHasMore(false);
      }
      
      setIsLoadingMore(false);
    }, 800);
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <h3 className="text-xl font-semibold mb-2">No products found</h3>
        <p className="text-muted-foreground">Try adjusting your filters or search criteria.</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {hasMore && (
        <div ref={loaderRef} className="flex justify-center my-8">
          {isLoadingMore ? (
            <div className="flex items-center">
              <Loader className="h-6 w-6 animate-spin mr-2" />
              <span>Loading more products...</span>
            </div>
          ) : (
            <div className="h-16"></div> 
          )}
        </div>
      )}
    </>
  );
};

// Skeleton loader for product cards
const ProductCardSkeleton = () => {
  return (
    <div className="product-card animate-pulse">
      <div className="aspect-square bg-muted"></div>
      <div className="p-4">
        <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-muted rounded w-1/2 mb-4"></div>
        <div className="flex items-center justify-between">
          <div className="h-5 bg-muted rounded w-1/3"></div>
          <div className="h-8 w-8 bg-muted rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
