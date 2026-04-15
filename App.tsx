
import React, { useState, useEffect } from 'react';
import { Section, MenuItem, CartItem } from './types';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import MenuSection from './components/MenuSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Hero from './components/Hero';
import CartDrawer from './components/CartDrawer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.BERANDA);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const renderSection = () => {
    switch (activeSection) {
      case Section.BERANDA:
        return <HomeSection />;
      case Section.MENU:
        return <MenuSection onAddToCart={addToCart} />;
      case Section.KONTAK:
        return <ContactSection />;
      default:
        return <HomeSection />;
    }
  };

  const MarqueeBanner = () => (
    <div className="bg-lime-500 py-2 overflow-hidden border-y border-lime-600 shadow-sm relative z-10">
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {[...Array(20)].map((_, i) => (
          <span key={i} className="text-emerald-950 font-black text-sm uppercase tracking-widest mx-8 flex items-center gap-4">
            🥑 segarr enak 🥑 <span className="text-white">✦</span>
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF5] selection:bg-green-200">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="flex-grow pt-16 relative overflow-hidden">
        {/* Background Decorative Avocados */}
        <div className="absolute top-40 left-10 text-4xl opacity-10 pointer-events-none animate-bounce select-none">🥑</div>
        <div className="absolute top-80 right-20 text-5xl opacity-10 pointer-events-none animate-pulse select-none" style={{ animationDelay: '1s' }}>🥑</div>
        <div className="absolute bottom-40 left-1/4 text-3xl opacity-10 pointer-events-none animate-bounce select-none" style={{ animationDelay: '2s' }}>🥑</div>

        <MarqueeBanner />
        
        {/* Only show Hero on Beranda */}
        {activeSection === Section.BERANDA && <Hero />}
        
        <div className="container mx-auto px-4 py-8 relative z-10">
          {renderSection()}
        </div>
      </main>

      <Footer />
      
      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        {totalItems > 0 && (
          <button 
            onClick={() => setIsCartOpen(true)}
            className="bg-lime-500 text-emerald-950 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:bg-lime-400 transition-all relative animate-fadeInUp group"
          >
            <i className="fas fa-shopping-basket text-2xl group-hover:scale-110 transition-transform"></i>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-black w-7 h-7 rounded-full flex items-center justify-center border-2 border-white animate-pulse">
              {totalItems}
            </span>
          </button>
        )}
        
        <a 
          href="https://wa.me/6289685747771" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all animate-bounce"
          title="Hubungi Kami"
        >
          <i className="fab fa-whatsapp text-3xl"></i>
        </a>
      </div>

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
      />
    </div>
  );
};

export default App;
