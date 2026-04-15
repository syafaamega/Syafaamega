
import React from 'react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onUpdateQuantity, onRemove }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    if (items.length === 0) return;
    
    let message = "Halo Es Teller Creamy! 🥑\n\nSaya ingin memesan:\n";
    items.forEach(item => {
      message += `- ${item.quantity}x ${item.name} (Rp ${(item.price * item.quantity).toLocaleString('id-ID')})\n`;
    });
    message += `\n*Total: Rp ${total.toLocaleString('id-ID')}*\n\nMohon info ketersediaan dan ongkir ke alamat saya ya!`;
    
    window.open(`https://wa.me/6289685747771?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      <div className="absolute inset-0 bg-emerald-950/40 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md animate-fadeInUp">
          <div className="h-full flex flex-col bg-white shadow-2xl rounded-l-[3rem] overflow-hidden">
            {/* Header */}
            <div className="px-8 py-6 bg-green-500 text-white relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 animate-creamWave"></div>
              <div className="flex items-center justify-between relative z-10">
                <h2 className="text-2xl font-black flex items-center gap-2">
                  <i className="fas fa-shopping-basket"></i> Keranjang
                </h2>
                <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-full transition-colors">
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <span className="text-6xl animate-bounce">🥑</span>
                  <p className="text-slate-400 font-medium">Wah, keranjangmu masih kosong!</p>
                  <button 
                    onClick={onClose}
                    className="text-green-600 font-bold hover:underline"
                  >
                    Yuk, pilih menu dulu
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4 items-center bg-orange-50/30 p-4 rounded-3xl border border-orange-100 group animate-fadeInUp">
                      <img src={item.image} alt={item.name} className="w-20 h-20 rounded-2xl object-cover shadow-sm" />
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-800 text-sm">{item.name}</h4>
                        <p className="text-green-600 font-black text-xs">Rp {item.price.toLocaleString('id-ID')}</p>
                        
                        <div className="flex items-center gap-3 mt-2">
                          <div className="flex items-center bg-white border border-green-100 rounded-xl overflow-hidden shadow-sm">
                            <button 
                              onClick={() => onUpdateQuantity(item.id, -1)}
                              className="px-2 py-1 hover:bg-green-50 text-green-600"
                            >
                              <i className="fas fa-minus text-[10px]"></i>
                            </button>
                            <span className="px-2 font-bold text-xs">{item.quantity}</span>
                            <button 
                              onClick={() => onUpdateQuantity(item.id, 1)}
                              className="px-2 py-1 hover:bg-green-50 text-green-600"
                            >
                              <i className="fas fa-plus text-[10px]"></i>
                            </button>
                          </div>
                          <button 
                            onClick={() => onRemove(item.id)}
                            className="text-slate-300 hover:text-red-500 transition-colors"
                          >
                            <i className="fas fa-trash-alt text-sm"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer Checkout */}
            {items.length > 0 && (
              <div className="p-8 border-t border-orange-100 bg-orange-50/20">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-slate-500 font-bold uppercase tracking-widest text-xs">Total Pesanan</span>
                  <span className="text-2xl font-black text-green-700">Rp {total.toLocaleString('id-ID')}</span>
                </div>
                <button 
                  onClick={handleCheckout}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-5 rounded-[2rem] font-black text-lg shadow-xl shadow-green-100 transition-all flex items-center justify-center gap-3 active:scale-95"
                >
                  <i className="fab fa-whatsapp text-2xl"></i>
                  Pesan via WhatsApp
                </button>
                <p className="text-center text-[10px] text-slate-400 mt-4 uppercase font-bold tracking-tighter">
                  Pesanan akan diarahkan langsung ke admin
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
