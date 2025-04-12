
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Star, 
  StarHalf, 
  ChevronLeft, 
  ChevronRight, 
  Truck, 
  Shield, 
  RefreshCw, 
  ShoppingCart, 
  Heart,
  Minus,
  Plus,
  Info,
  Check
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { products } from '@/utils/productData';
import { toast } from '@/components/ui/use-toast';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState(products.find(p => p.id === Number(id)));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isImageZoomed, setIsImageZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // If product not found, navigate to 404
    if (!product && products.length > 0) {
      navigate('/not-found');
    }
  }, [product, navigate]);

  if (!product) {
    return (
      <div className="container mx-auto py-12 px-4">
        <div className="text-center">
          <div className="h-16 w-16 mx-auto mb-4 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          <h2 className="text-xl font-medium">Loading product details...</h2>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isImageZoomed) return;
    
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    
    setZoomPosition({ x, y });
  };

  const handleAddToCart = () => {
    toast({
      title: "Added to Cart",
      description: `${quantity} × ${product.name} added to your cart.`,
      duration: 3000,
    });
  };

  const renderRatingStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={`star-${i}`} className="h-5 w-5 fill-accent text-accent" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <StarHalf key="half-star" className="h-5 w-5 fill-accent text-accent" />
      );
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-star-${i}`} className="h-5 w-5 text-muted-foreground" />
      );
    }

    return stars;
  };

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4 animate-fade-in">
      {/* Breadcrumb */}
      <nav className="flex mb-6 text-sm">
        <a href="/" className="text-muted-foreground hover:text-primary transition-colors">
          Home
        </a>
        <span className="mx-2 text-muted-foreground">/</span>
        <a href="/" className="text-muted-foreground hover:text-primary transition-colors">
          {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
        </a>
        <span className="mx-2 text-muted-foreground">/</span>
        <span className="text-foreground">{product.name}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Images */}
        <div>
          {/* Main Image with Zoom */}
          <div 
            className={`zoom-container rounded-lg overflow-hidden border mb-4 ${isImageZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
            onMouseEnter={() => setIsImageZoomed(true)}
            onMouseLeave={() => setIsImageZoomed(false)}
            onMouseMove={handleMouseMove}
            onClick={() => setIsImageZoomed(!isImageZoomed)}
          >
            <img 
              src={product.images[currentImageIndex]} 
              alt={product.name} 
              className="zoom-image"
              style={{
                transformOrigin: `${zoomPosition.x * 100}% ${zoomPosition.y * 100}%`,
                transform: isImageZoomed ? 'scale(2)' : 'scale(1)'
              }}
            />
          </div>

          {/* Image Navigation */}
          <div className="relative">
            {product.images.length > 1 && (
              <>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <div className="flex overflow-x-auto space-x-2 px-10 py-2 scrollbar-none">
                  {product.images.map((image, index) => (
                    <div 
                      key={index}
                      className={`
                        flex-shrink-0 w-20 h-20 border rounded-md overflow-hidden cursor-pointer
                        transition-all duration-200 
                        ${currentImageIndex === index ? 'border-primary ring-2 ring-primary/20' : 'opacity-70 hover:opacity-100'}
                      `}
                      onClick={() => setCurrentImageIndex(index)}
                    >
                      <img 
                        src={image} 
                        alt={`${product.name} - View ${index + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div>
          {/* Product Status */}
          <div className="flex flex-wrap gap-2 mb-3">
            {product.isNew && (
              <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full">
                New Arrival
              </span>
            )}
            {product.isSale && (
              <span className="px-2 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                Sale
              </span>
            )}
            {product.stock < 10 && product.stock > 0 && (
              <span className="px-2 py-1 bg-amber-100 text-amber-800 text-xs font-semibold rounded-full">
                Low Stock
              </span>
            )}
            {product.stock === 0 && (
              <span className="px-2 py-1 bg-destructive/10 text-destructive text-xs font-semibold rounded-full">
                Out of Stock
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          
          {/* Ratings */}
          <div className="flex items-center mb-4">
            <div className="flex mr-2">
              {renderRatingStars(product.rating)}
            </div>
            <span className="text-muted-foreground">
              {product.rating.toFixed(1)} ({product.reviewCount} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center mb-6">
            {product.originalPrice && (
              <span className="text-xl text-muted-foreground line-through mr-3">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
            <span className="text-3xl font-bold">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="ml-3 px-2 py-1 bg-accent text-white text-sm font-medium rounded">
                Save ${(product.originalPrice - product.price).toFixed(2)}
              </span>
            )}
          </div>

          {/* Short Description */}
          <p className="text-muted-foreground mb-6">
            {product.description}
          </p>

          {/* Quantity Selector */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Quantity</label>
            <div className="flex items-center">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={decrementQuantity}
                disabled={quantity <= 1}
                className="h-10 w-10"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <div className="w-16 h-10 flex items-center justify-center border-y">
                {quantity}
              </div>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={incrementQuantity}
                disabled={quantity >= product.stock}
                className="h-10 w-10"
              >
                <Plus className="h-4 w-4" />
              </Button>
              <span className="ml-4 text-sm text-muted-foreground">
                {product.stock} available
              </span>
            </div>
          </div>

          {/* Add to Cart */}
          <div className="flex flex-wrap gap-4 mb-8">
            <Button 
              className="flex-1 h-12"
              onClick={handleAddToCart}
              disabled={product.stock === 0}
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </Button>
            <Button variant="outline" size="icon" className="h-12 w-12">
              <Heart className="h-5 w-5" />
            </Button>
          </div>

          {/* Shipping & Returns */}
          <div className="bg-muted/50 rounded-lg p-4 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-start">
                <Truck className="h-5 w-5 mr-2 text-primary flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-medium">Free Shipping</h4>
                  <p className="text-xs text-muted-foreground">On orders over $50</p>
                </div>
              </div>
              <div className="flex items-start">
                <Shield className="h-5 w-5 mr-2 text-primary flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-medium">2 Year Warranty</h4>
                  <p className="text-xs text-muted-foreground">Full coverage</p>
                </div>
              </div>
              <div className="flex items-start">
                <RefreshCw className="h-5 w-5 mr-2 text-primary flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-medium">30 Day Returns</h4>
                  <p className="text-xs text-muted-foreground">Hassle-free returns</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mt-12">
        <Tabs defaultValue="specifications">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="reviews">Customer Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="specifications" className="p-6 border rounded-b-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex">
                  <div className="w-1/3 text-muted-foreground">{key}:</div>
                  <div className="w-2/3 font-medium">{value}</div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="description" className="p-6 border rounded-b-md">
            <p>{product.description}</p>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. 
              Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget 
              aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, 
              nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2" />
                <p>Premium quality materials ensure long-lasting performance</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2" />
                <p>Ergonomic design for maximum comfort during use</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2" />
                <p>Eco-friendly manufacturing process</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2" />
                <p>Versatile functionality for various applications</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="p-6 border rounded-b-md">
            <div className="flex items-center mb-6">
              <div className="text-5xl font-bold mr-4">{product.rating.toFixed(1)}</div>
              <div>
                <div className="flex mb-1">
                  {renderRatingStars(product.rating)}
                </div>
                <p className="text-sm text-muted-foreground">Based on {product.reviewCount} reviews</p>
              </div>
            </div>
            <div className="border-t pt-6">
              <p className="text-muted-foreground text-center">
                Customer reviews will appear here. For this demo, we're not showing actual reviews.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductDetail;
