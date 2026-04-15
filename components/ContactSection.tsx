
import React, { useState } from 'react';
import { Review } from '../types';

const ContactSection: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([
    { id: 1, name: "Budi Santoso", comment: "Es teller paling enak yang pernah saya coba. Creamy banget!", date: "2 jam yang lalu", rating: 5 },
    { id: 2, name: "Siti Aminah", comment: "Matchanya berasa banget, tidak terlalu manis. Pas di lidah.", date: "Kemarin", rating: 4 },
  ]);

  const [newName, setNewName] = useState('');
  const [newComment, setNewComment] = useState('');

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newComment) return;

    const review: Review = {
      id: Date.now(),
      name: newName,
      comment: newComment,
      date: "Baru saja",
      rating: 5
    };

    setReviews([review, ...reviews]);
    setNewName('');
    setNewComment('');
    alert('Terima kasih atas ulasan Anda!');
  };

  return (
    <div className="animate-fadeIn space-y-12">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Lokasi & WA */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-green-800 mb-6">📍 Lokasi Kami</h2>
            <div className="bg-white p-8 rounded-3xl border border-orange-100 shadow-lg space-y-4">
              <div className="flex gap-4">
                <div className="bg-green-50 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-map-marker-alt text-green-600"></i>
                </div>
                <div>
                  <p className="font-bold text-slate-800">Alamat Lengkap:</p>
                  <p className="text-slate-600">
                    Jl. Prof. Moch Yamin Jl. Dukuh No.37, RT.003/RW.003, Duren Jaya, Kec. Bekasi Tim., Kota Bks, Jawa Barat 17111
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-green-50 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-clock text-green-600"></i>
                </div>
                <div>
                  <p className="font-bold text-slate-800">Jam Operasional:</p>
                  <p className="text-slate-600">Setiap Hari: 10.00 - 18.00 WIB</p>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <a 
                  href="https://maps.app.goo.gl/AHXKviGSKowozZP58" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-600 font-bold hover:text-green-700 flex items-center gap-2"
                >
                  Lihat di Google Maps <i className="fas fa-external-link-alt text-sm"></i>
                </a>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-green-800 mb-6">📱 Hubungi Kami</h2>
            <div className="flex gap-4">
              <a 
                href="https://wa.me/6289685747771" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 bg-green-500 text-white p-6 rounded-3xl flex items-center justify-center gap-3 shadow-lg hover:bg-green-600 transition-all font-bold text-lg"
              >
                <i className="fab fa-whatsapp text-2xl"></i>
                WhatsApp Utama
              </a>
              <a 
                href="https://instagram.com/syafaamega" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-700 text-white p-6 rounded-3xl flex items-center justify-center shadow-lg hover:bg-green-800 transition-all gap-2"
                title="Follow @syafaamega"
              >
                <i className="fab fa-instagram text-2xl"></i>
                <span className="hidden md:inline">@syafaamega</span>
              </a>
            </div>
          </div>
        </div>

        {/* Ulasan */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-green-800">💬 Ulasan Pelanggan</h2>
          <div className="bg-white p-8 rounded-3xl border border-orange-100 shadow-lg">
            <form onSubmit={handleSubmitReview} className="mb-10 space-y-4">
              <p className="font-bold text-slate-700 mb-2">Tulis Ulasan Anda:</p>
              <input 
                type="text" 
                placeholder="Nama Anda"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="w-full bg-orange-50/30 border border-orange-100 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                required
              />
              <textarea 
                placeholder="Bagikan pengalaman kesegaranmu..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                rows={3}
                className="w-full bg-orange-50/30 border border-orange-100 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                required
              ></textarea>
              <button 
                type="submit"
                className="w-full bg-green-600 text-white py-4 rounded-xl font-bold hover:bg-green-700 transition-all shadow-md active:scale-95"
              >
                Kirim Komentar
              </button>
            </form>

            <div className="space-y-6 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
              {reviews.map((rev) => (
                <div key={rev.id} className="border-b border-orange-50 pb-6 last:border-0">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-slate-800">{rev.name}</span>
                    <span className="text-xs text-slate-400">{rev.date}</span>
                  </div>
                  <div className="flex text-amber-400 text-xs mb-2">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className={`fas fa-star ${i < rev.rating ? 'text-amber-400' : 'text-slate-200'}`}></i>
                    ))}
                  </div>
                  <p className="text-slate-600 text-sm italic">"{rev.comment}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
