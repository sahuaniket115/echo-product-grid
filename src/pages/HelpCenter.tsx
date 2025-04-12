
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const HelpCenter = () => {
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
          <h1 className="text-3xl font-bold mb-6">Help Center</h1>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-8">
              Find answers to frequently asked questions or contact our customer support team for assistance.
            </p>
            
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            
            <Accordion type="single" collapsible className="mb-8">
              <AccordionItem value="item-1">
                <AccordionTrigger>How do I place an order?</AccordionTrigger>
                <AccordionContent>
                  To place an order, browse our products, add items to your cart, and proceed to checkout. You'll need to provide shipping and payment information to complete your purchase.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                <AccordionContent>
                  We accept major credit cards, PayPal, and other secure payment methods. All transactions are encrypted for your security.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>How can I track my order?</AccordionTrigger>
                <AccordionContent>
                  Once your order ships, you'll receive a tracking number via email. You can use this number to track your package on our website or the carrier's site.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger>What is your return policy?</AccordionTrigger>
                <AccordionContent>
                  We offer a 30-day return policy for most items. Products must be in original condition with all packaging. Some exceptions apply for certain categories.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger>Do you ship internationally?</AccordionTrigger>
                <AccordionContent>
                  Yes, we ship to many countries worldwide. Shipping rates and delivery times vary by location. You can see shipping options during checkout.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <h2 className="text-2xl font-bold mb-4">Contact Support</h2>
            
            <p className="mb-4">
              Our customer service team is available 24/7 to assist you with any questions or concerns.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-medium mb-2">Email Support</h3>
                <p className="mb-2">support@shopcatalog.com</p>
                <p className="text-sm text-muted-foreground">Response time: 24-48 hours</p>
              </div>
              
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-medium mb-2">Phone Support</h3>
                <p className="mb-2">1-800-SHOP-HELP</p>
                <p className="text-sm text-muted-foreground">Available: 9am-9pm ET, 7 days a week</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HelpCenter;
