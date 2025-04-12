
export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  images: string[];
  category: string;
  tags: string[];
  isFeatured?: boolean;
  isNew?: boolean;
  isSale?: boolean;
  description: string;
  specifications: { [key: string]: string };
  stock: number;
}

export interface Category {
  id: string;
  name: string;
  count: number;
}

export const categories: Category[] = [
  { id: 'electronics', name: 'Electronics', count: 12 },
  { id: 'clothing', name: 'Clothing', count: 8 },
  { id: 'home', name: 'Home & Kitchen', count: 6 },
  { id: 'books', name: 'Books', count: 4 },
  { id: 'sports', name: 'Sports', count: 5 },
];

export const products: Product[] = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.8,
    reviewCount: 245,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1594337053198-c8f0bd8db766?auto=format&fit=crop&w=600&q=80',
    ],
    category: 'electronics',
    tags: ['headphones', 'wireless', 'audio'],
    isFeatured: true,
    isSale: true,
    description: 'Experience premium sound quality with these wireless headphones. Featuring advanced noise cancellation, comfortable ear cups, and long battery life for uninterrupted listening.',
    specifications: {
      'Brand': 'SoundMaster',
      'Battery Life': '30 hours',
      'Connectivity': 'Bluetooth 5.0',
      'Noise Cancellation': 'Yes',
      'Microphone': 'Built-in',
      'Weight': '250g',
    },
    stock: 45,
  },
  {
    id: 2,
    name: 'Ultra HD Smart TV 55"',
    price: 699.99,
    originalPrice: 899.99,
    rating: 4.6,
    reviewCount: 187,
    images: [
      'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?auto=format&fit=crop&w=600&q=80',
    ],
    category: 'electronics',
    tags: ['tv', 'smart tv', '4k'],
    isSale: true,
    description: 'Transform your home entertainment with this 55" Ultra HD Smart TV. Featuring vibrant colors, sharp resolution, and smart connectivity for streaming your favorite content.',
    specifications: {
      'Brand': 'ViewTech',
      'Resolution': '4K Ultra HD',
      'Screen Size': '55 inches',
      'Refresh Rate': '120Hz',
      'Smart Features': 'Yes',
      'Connections': 'HDMI x4, USB x3',
    },
    stock: 18,
  },
  {
    id: 3,
    name: 'Men\'s Casual Jacket',
    price: 89.99,
    rating: 4.5,
    reviewCount: 132,
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?auto=format&fit=crop&w=600&q=80',
    ],
    category: 'clothing',
    tags: ['jacket', 'men', 'casual'],
    description: 'A versatile casual jacket for men, perfect for everyday wear. Features a comfortable fit, durable materials, and stylish design that pairs well with any outfit.',
    specifications: {
      'Brand': 'UrbanStyle',
      'Material': '65% Cotton, 35% Polyester',
      'Care': 'Machine Washable',
      'Closure': 'Zipper',
      'Pockets': '4',
      'Fit': 'Regular',
    },
    stock: 65,
  },
  {
    id: 4,
    name: 'Professional Blender',
    price: 129.99,
    rating: 4.7,
    reviewCount: 98,
    images: [
      'https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1585237017125-24baf8d7406f?auto=format&fit=crop&w=600&q=80',
    ],
    category: 'home',
    tags: ['blender', 'kitchen', 'appliance'],
    description: 'A high-performance blender perfect for smoothies, soups, and more. Features multiple speed settings, durable blades, and a large capacity jar for all your blending needs.',
    specifications: {
      'Brand': 'KitchenPro',
      'Power': '1200W',
      'Capacity': '1.8L',
      'Speeds': '10',
      'Pulse Function': 'Yes',
      'Material': 'Stainless Steel Blades, Glass Jar',
    },
    stock: 27,
  },
  {
    id: 5,
    name: 'Bestselling Novel - The Silent Echo',
    price: 24.99,
    rating: 4.9,
    reviewCount: 567,
    images: [
      'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=600&q=80',
    ],
    category: 'books',
    tags: ['book', 'novel', 'fiction'],
    isFeatured: true,
    description: 'The latest bestselling novel that\'s captivating readers worldwide. A thrilling story of mystery and intrigue that will keep you turning pages late into the night.',
    specifications: {
      'Author': 'J.R. Morgan',
      'Pages': '384',
      'Publisher': 'Horizon Press',
      'Language': 'English',
      'Format': 'Hardcover',
      'ISBN': '978-1234567890',
    },
    stock: 120,
  },
  {
    id: 6,
    name: 'Yoga Mat Premium',
    price: 45.99,
    rating: 4.4,
    reviewCount: 89,
    images: [
      'https://images.unsplash.com/photo-1592432678016-e910b452f9a2?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80',
    ],
    category: 'sports',
    tags: ['yoga', 'fitness', 'exercise'],
    description: 'A premium yoga mat designed for comfort and grip. Made from eco-friendly materials, it provides excellent cushioning for joints while maintaining stability during practice.',
    specifications: {
      'Brand': 'ZenFit',
      'Thickness': '6mm',
      'Material': 'TPE, Eco-friendly',
      'Size': '72" x 24"',
      'Non-Slip': 'Yes',
      'Carrying Strap': 'Included',
    },
    stock: 35,
  },
  {
    id: 7,
    name: 'Women\'s Running Shoes',
    price: 119.99,
    originalPrice: 149.99,
    rating: 4.7,
    reviewCount: 215,
    images: [
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1584735175315-9d5df23be5c8?auto=format&fit=crop&w=600&q=80',
    ],
    category: 'sports',
    tags: ['shoes', 'running', 'women'],
    isNew: true,
    description: 'Performance running shoes designed specifically for women. Features responsive cushioning, breathable upper, and superior traction for any running surface.',
    specifications: {
      'Brand': 'PaceSetter',
      'Material': 'Breathable Mesh, Synthetic',
      'Cushioning': 'Responsive Foam',
      'Closure': 'Lace-up',
      'Arch Support': 'Medium',
      'Weight': '235g (per shoe)',
    },
    stock: 42,
  },
  {
    id: 8,
    name: 'Digital Camera with 4K Video',
    price: 799.99,
    rating: 4.8,
    reviewCount: 156,
    images: [
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=600&q=80',
    ],
    category: 'electronics',
    tags: ['camera', 'digital', '4k'],
    isNew: true,
    isFeatured: true,
    description: 'Capture stunning photos and 4K videos with this professional-grade digital camera. Features advanced autofocus, high-resolution sensor, and versatile shooting modes for any scenario.',
    specifications: {
      'Brand': 'OptiView',
      'Resolution': '24.2MP',
      'Video': '4K/30fps',
      'Sensor Type': 'CMOS',
      'ISO Range': '100-25600',
      'Screen': '3.0" Vari-angle Touch LCD',
    },
    stock: 15,
  },
  {
    id: 9,
    name: 'Stainless Steel Cookware Set',
    price: 249.99,
    originalPrice: 299.99,
    rating: 4.6,
    reviewCount: 78,
    images: [
      'https://images.unsplash.com/photo-1585837575652-267584ba1e1d?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1584284539806-8e6b2dc8fc64?auto=format&fit=crop&w=600&q=80',
    ],
    category: 'home',
    tags: ['cookware', 'kitchen', 'cooking'],
    isSale: true,
    description: 'A complete cookware set featuring premium stainless steel construction. Includes pots and pans in various sizes, perfect for creating delicious meals for any occasion.',
    specifications: {
      'Brand': 'CuisineElite',
      'Material': 'Stainless Steel',
      'Pieces': '10',
      'Dishwasher Safe': 'Yes',
      'Induction Compatible': 'Yes',
      'Oven Safe': 'Up to 500°F',
    },
    stock: 23,
  },
  {
    id: 10,
    name: 'Wireless Earbuds',
    price: 129.99,
    rating: 4.5,
    reviewCount: 312,
    images: [
      'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1659260212684-69a19d9d8902?auto=format&fit=crop&w=600&q=80',
    ],
    category: 'electronics',
    tags: ['earbuds', 'wireless', 'audio'],
    isNew: true,
    description: 'Experience true wireless freedom with these compact earbuds. Featuring premium sound quality, comfortable fit, and long battery life in an elegant charging case.',
    specifications: {
      'Brand': 'AudioPeak',
      'Battery Life': '8 hours (30 with case)',
      'Connectivity': 'Bluetooth 5.2',
      'Water Resistance': 'IPX5',
      'Noise Cancellation': 'Yes',
      'Charging': 'USB-C, Wireless',
    },
    stock: 56,
  },
  {
    id: 11,
    name: 'Men\'s Formal Watch',
    price: 199.99,
    rating: 4.7,
    reviewCount: 104,
    images: [
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1622434641406-a158123450f9?auto=format&fit=crop&w=600&q=80',
    ],
    category: 'clothing',
    tags: ['watch', 'men', 'accessory'],
    description: 'An elegant formal watch for men, featuring a classic design with modern functionality. Perfect for business attire or special occasions.',
    specifications: {
      'Brand': 'TimeStyle',
      'Movement': 'Quartz',
      'Case Material': 'Stainless Steel',
      'Band Material': 'Genuine Leather',
      'Water Resistance': '30m',
      'Features': 'Date Display, Luminous Hands',
    },
    stock: 32,
  },
  {
    id: 12,
    name: 'Women\'s Leather Handbag',
    price: 159.99,
    originalPrice: 199.99,
    rating: 4.8,
    reviewCount: 87,
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1614179818511-45af1e266d9a?auto=format&fit=crop&w=600&q=80',
    ],
    category: 'clothing',
    tags: ['handbag', 'women', 'accessory'],
    isSale: true,
    description: 'A luxurious leather handbag combining style and functionality. Features multiple compartments, premium stitching, and elegant hardware for a sophisticated look.',
    specifications: {
      'Brand': 'LuxeStyle',
      'Material': 'Genuine Leather',
      'Dimensions': '12" x 9" x 4"',
      'Compartments': '3 main, 2 interior pockets',
      'Closure': 'Zipper',
      'Shoulder Strap': 'Adjustable, Removable',
    },
    stock: 18,
  },
  {
    id: 13,
    name: 'Smart Home Speaker',
    price: 89.99,
    rating: 4.5,
    reviewCount: 238,
    images: [
      'https://images.unsplash.com/photo-1558089687-f282ffcbc0d4?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&w=600&q=80',
    ],
    category: 'electronics',
    tags: ['speaker', 'smart home', 'audio'],
    description: 'A versatile smart speaker that brings intelligence to your home. Control your smart devices, play music, get questions answered, and more with simple voice commands.',
    specifications: {
      'Brand': 'HomeSmart',
      'Connectivity': 'WiFi, Bluetooth',
      'Assistant': 'Built-in Voice AI',
      'Speakers': 'Dual 2.5"',
      'Far-field Mics': '7',
      'Power': 'AC adapter',
    },
    stock: 42,
  },
  {
    id: 14,
    name: 'Organic Cotton Bedding Set',
    price: 129.99,
    rating: 4.9,
    reviewCount: 65,
    images: [
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=600&q=80',
    ],
    category: 'home',
    tags: ['bedding', 'home', 'organic'],
    description: 'Experience luxurious comfort with this organic cotton bedding set. Made from 100% certified organic cotton for a soft, breathable sleep experience while being environmentally conscious.',
    specifications: {
      'Brand': 'EcoComfort',
      'Material': '100% Organic Cotton',
      'Thread Count': '400',
      'Set Includes': '1 Duvet Cover, 2 Pillowcases, 1 Fitted Sheet',
      'Certifications': 'GOTS, OEKO-TEX',
      'Care': 'Machine Washable',
    },
    stock: 25,
  },
  {
    id: 15,
    name: 'Professional Chef\'s Knife',
    price: 79.99,
    rating: 4.7,
    reviewCount: 142,
    images: [
      'https://images.unsplash.com/photo-1566454419290-57a0589c9b31?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1593618771768-4c31c5c66dfa?auto=format&fit=crop&w=600&q=80',
    ],
    category: 'home',
    tags: ['kitchen', 'knife', 'cooking'],
    description: 'A premium chef\'s knife essential for any serious home cook or professional chef. Features a razor-sharp blade, perfect balance, and ergonomic handle for precision cutting.',
    specifications: {
      'Brand': 'CulinaryEdge',
      'Blade Material': 'High-Carbon Stainless Steel',
      'Blade Length': '8 inches',
      'Handle Material': 'Pakkawood',
      'Hardness': '58 HRC',
      'Edge Angle': '15° per side',
    },
    stock: 34,
  },
];

export const getFilters = () => {
  return {
    priceRange: {
      min: Math.min(...products.map(p => p.price)),
      max: Math.max(...products.map(p => p.price))
    },
    categories: categories
  };
};

// Generate more products by duplicating existing ones with modified properties
for (let i = 0; i < 45; i++) {
  const baseProduct = products[i % products.length];
  products.push({
    ...baseProduct,
    id: products.length + 1,
    name: `${baseProduct.name} ${products.length + 1}`,
    price: baseProduct.price * (0.85 + Math.random() * 0.3),
    rating: Math.min(5, baseProduct.rating * (0.9 + Math.random() * 0.2)),
    reviewCount: Math.floor(baseProduct.reviewCount * (0.7 + Math.random() * 0.6)),
    isFeatured: Math.random() > 0.8,
    isNew: Math.random() > 0.8,
    isSale: Math.random() > 0.8,
    stock: Math.floor(Math.random() * 100) + 1
  });
}
