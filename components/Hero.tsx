
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[400px] md:h-[550px] overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1543362906-acfc16c623a2?auto=format&fit=crop&q=80&w=1600&h=900" 
        alt="Es Teller Banner" 
        className="absolute inset-0 w-full h-full object-cover brightness-[0.6] scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-900/40 to-transparent"></div>
      
      {/* Floating Avocado Decorations with Enhanced Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/4 text-6xl animate-float opacity-40 select-none">🥑</div>
        <div className="absolute bottom-1/4 left-10 text-5xl animate-float opacity-30 select-none" style={{ animationDuration: '5s', animationDelay: '1s' }}>🥑</div>
        <div className="absolute top-20 left-1/3 text-4xl animate-float opacity-20 select-none" style={{ animationDuration: '6s', animationDelay: '2s' }}>🥑</div>
      </div>

      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-start text-white">
        <div className="animate-fadeInUp opacity-0 stagger-1">
          <div className="flex items-center gap-2 bg-lime-500 text-emerald-950 px-4 py-1.5 rounded-full text-xs font-black mb-6 shadow-xl border border-white/20 uppercase tracking-tighter">
            <span>🥑</span> Paling Segar Se-Bekasi Timur
          </div>
        </div>
        
        <h1 className="text-4xl md:text-7xl font-extrabold mb-6 leading-[1.1] drop-shadow-2xl animate-fadeInUp opacity-0 stagger-2">
          Kesegaran Buah Asli<br />
          <span className="text-lime-400">Creamy & Mewah</span>
        </h1>
        
        <p className="text-lg md:text-2xl max-w-2xl text-slate-100 mb-10 font-light leading-relaxed drop-shadow-md animate-fadeInUp opacity-0 stagger-3">
          Perpaduan istimewa <span className="font-semibold text-white underline decoration-lime-400">Alpukat Mentega</span>, Kelapa Muda, dan Nangka dengan rahasia kuah creamy yang tak tertandingi.
        </p>
        
        <div className="flex gap-4 animate-fadeInUp opacity-0 stagger-4">
          <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20 flex items-center gap-3 hover:bg-white/20 transition-all cursor-default">
            <span className="text-3xl animate-sway inline-block">🥑</span>
            <div className="text-left">
              <p className="text-[10px] uppercase opacity-60 font-bold">Menu Utama</p>
              <p className="font-bold">Pure Alpukat</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
