
import React from 'react';

const HomeSection: React.FC = () => {
  const ingredients = [
    { name: 'Alpukat Mentega', icon: '🥑' },
    { name: 'Kelapa Muda', icon: '🥥' },
    { name: 'Nangka Manis', icon: '🍯' },
    { name: 'Krim Spesial', icon: '🥛' },
    { name: 'Susu Kental Manis', icon: '🍶' },
    { name: 'Es Kristal', icon: '❄️' }
  ];

  return (
    <div className="space-y-16">
      {/* Asal Usul */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fadeInUp opacity-0 stagger-1">
          <h2 className="text-3xl font-bold text-green-800 mb-6 flex items-center gap-3">
            <span className="bg-green-100 p-2 rounded-lg animate-sway">📜</span>
            Asal-Usul Kami
          </h2>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              Berawal dari sebuah kedai kecil di sudut kota pada tahun 2018, kami ingin menghadirkan kembali cita rasa klasik Es Teller namun dengan sentuhan modern yang lebih "Creamy" dan mewah.
            </p>
            <p>
              Resep kuah creamy kami adalah rahasia turun temurun yang dikembangkan selama bertahun-tahun untuk mendapatkan tekstur lembut yang tidak membuat eneg, namun tetap kaya rasa.
            </p>
          </div>
        </div>
        <div className="relative animate-fadeInUp opacity-0 stagger-2">
          <img 
            src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&q=80&w=600&h=400" 
            alt="Kedai Kami" 
            className="rounded-3xl shadow-2xl border-4 border-white group hover:scale-[1.02] transition-transform duration-500"
          />
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block border border-green-50 animate-float">
            <p className="text-green-600 font-bold text-3xl">5+</p>
            <p className="text-slate-400 text-sm">Tahun Melayani</p>
          </div>
        </div>
      </div>

      {/* Deskripsi - Updated with Light Green background and Cream Wave */}
      <div className="bg-green-500 text-white rounded-[3rem] p-8 md:p-16 text-center shadow-2xl overflow-hidden relative animate-fadeInUp opacity-0 stagger-3">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 animate-creamWave"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-200/20 rounded-full -ml-32 -mb-32 animate-creamWave" style={{ animationDelay: '2s' }}></div>
        
        <h2 className="text-3xl font-bold mb-6 relative z-10">Mengapa Es Teller Creamy?</h2>
        <p className="text-white text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed relative z-10">
          Berbeda dengan es teller pada umumnya yang menggunakan sirup gula biasa, kami menggunakan base <span className="text-orange-100 font-bold underline decoration-orange-300">Dairy-Rich Cream</span> yang memberikan sensasi dessert mewah namun dengan harga yang tetap ramah di kantong.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
          {[
            { icon: 'fa-leaf', text: 'Buah Segar' },
            { icon: 'fa-cookie', text: 'Pemanis Alami' },
            { icon: 'fa-tint', text: 'Higienis' },
            { icon: 'fa-heart', text: 'Hati & Cinta' }
          ].map((feature, i) => (
            <div key={i} className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl border border-white/30 hover:bg-white/30 transition-all cursor-default">
              <i className={`fas ${feature.icon} text-white text-2xl mb-2 animate-sway`} style={{ animationDelay: `${i*0.2}s` }}></i>
              <p className="text-sm font-bold">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Isian */}
      <div className="animate-fadeInUp opacity-0 stagger-4">
        <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Apa Saja Di Dalamnya?</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {ingredients.map((item, idx) => (
            <div 
              key={idx} 
              className={`bg-white border border-orange-100 p-6 rounded-3xl text-center shadow-sm hover:shadow-md hover:border-green-200 transition-all group animate-float`}
              style={{ animationDelay: `${idx * 0.1}s`, animationDuration: '3s' }}
            >
              <span className="text-4xl mb-3 block group-hover:scale-125 transition-transform">{item.icon}</span>
              <span className="text-slate-700 font-semibold">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
