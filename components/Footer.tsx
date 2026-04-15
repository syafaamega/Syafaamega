
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-950 text-white py-12 pb-24 md:pb-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="space-y-4">
            <h4 className="text-2xl font-bold tracking-tight">Es Teller <span className="text-lime-400">Creamy</span></h4>
            <p className="text-green-200/60 text-sm leading-relaxed">
              Membangkitkan kesegaran tradisional dengan sentuhan kemewahan modern sejak 2018.
            </p>
          </div>
          
          <div className="space-y-4">
            <h5 className="font-bold text-lg text-orange-100">Navigasi</h5>
            <ul className="text-green-200/60 text-sm space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Beranda</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Menu Varian</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hubungi Kami</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h5 className="font-bold text-lg text-orange-100">Ikuti Kami</h5>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="#" className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a 
                href="https://instagram.com/syafaamega" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
                title="Follow @syafaamega on Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all">
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
            <p className="text-green-200/40 text-[10px] mt-6 italic">
              &copy; 2024 Es Teller Creamy Official. Dibuat dengan cinta dan kesegaran alami.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
