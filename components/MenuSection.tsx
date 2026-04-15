
import React from 'react';
import { MenuItem } from '../types';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
}

const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart }) => {
  const menuItems: MenuItem[] = [
    {
      id: '1',
      name: 'Original Creamy',
      description: 'Perpaduan klasik alpukat, kelapa, dan nangka dengan kuah susu creamy rahasia.',
      price: 15000,
      image: 'https://images.unsplash.com/photo-1543362906-acfc16c623a2?auto=format&fit=crop&q=80&w=600&h=600',
      color: 'bg-green-500'
    },
    {
      id: '2',
      name: 'Premium Matcha',
      description: 'Sentuhan teh hijau Jepang berkualitas tinggi yang menyatu harmonis dengan buah-buahan segar.',
      price: 18000,
      image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&q=80&w=600&h=600',
      color: 'bg-lime-500'
    },
    {
      id: '3',
      name: 'Choco Creamy Blast',
      description: 'Untuk pecinta coklat! Swirl coklat Belgian yang tebal menambah kemewahan es teller Anda.',
      price: 18000,
      image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&q=80&w=600&h=600',
      color: 'bg-orange-800'
    }
  ];

  return (
    <div className="animate-fadeInUp">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-green-800 mb-4 animate-sway inline-block">Pilih Favoritmu</h2>
        <p className="text-slate-500 max-w-xl mx-auto">Tersedia dalam 3 varian rasa unik yang siap memanjakan lidah Anda setiap hari.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {menuItems.map((item, index) => (
          <div 
            key={item.id} 
            className={`bg-white rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all group border border-orange-50 animate-fadeInUp opacity-0 stagger-${index + 1}`}
          >
            <div className="relative h-64 overflow-hidden">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className={`absolute top-4 right-4 ${item.color} text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg animate-pulse`}>
                Terlaris
              </div>
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-green-600 transition-colors">{item.name}</h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed h-12 overflow-hidden italic">
                "{item.description}"
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-slate-400 text-xs uppercase font-bold tracking-widest block">Harga</span>
                  <span className="text-2xl font-black text-green-600">Rp {item.price.toLocaleString('id-ID')}</span>
                </div>
                <button 
                  onClick={() => onAddToCart(item)}
                  className="bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-2xl font-bold flex items-center gap-2 transition-all shadow-md active:scale-95 group-hover:scale-105"
                >
                  <i className="fas fa-cart-plus animate-bounce"></i>
                  + Keranjang
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-orange-100/50 border border-orange-200 p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-green-200/20 rounded-full -mr-16 -mt-16 animate-creamWave"></div>
        <div className="relative z-10">
          <h4 className="text-green-800 font-bold text-xl">Ingin tambah topping?</h4>
          <p className="text-green-700">Extra Alpukat, Keju, atau Durian hanya +Rp 5.000 saja!</p>
        </div>
        <button 
          onClick={() => window.open(`https://wa.me/6289685747771?text=Halo admin, saya ingin tanya-tanya tentang topping tambahan di Es Teller Creamy!`, '_blank')} 
          className="relative z-10 bg-green-600 text-white px-8 py-3 rounded-full font-bold hover:bg-green-700 transition-all shadow-lg hover:shadow-green-200 hover:-translate-y-1"
        >
          Tanya Topping
        </button>
      </div>
    </div>
  );
};

export default MenuSection;
