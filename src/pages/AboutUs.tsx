
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutUs = () => {
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
          <h1 className="text-3xl font-bold mb-6">Our Story</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              Founded in 2020, ShopCatalog has grown from a small startup to a trusted online shopping destination. Our mission is to provide high-quality products at competitive prices with exceptional customer service.
            </p>
            
            <p className="text-lg mb-4">
              What started as a passion project has evolved into a platform that connects customers with thousands of products across multiple categories.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Our Values</h2>
            
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>Customer satisfaction is our highest priority</li>
              <li>We believe in sustainable and ethical business practices</li>
              <li>Quality products at fair prices</li>
              <li>Supporting local businesses and artisans</li>
              <li>Innovation and continuous improvement</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Our Team</h2>
            
            <p className="text-lg mb-4">
              Our diverse team of professionals is dedicated to creating the best shopping experience for our customers. From our customer service representatives to our logistics experts, everyone plays a crucial role in delivering excellence.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
