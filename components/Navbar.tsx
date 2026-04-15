
import React from 'react';
import { Section } from '../types';

interface NavbarProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { label: 'Beranda', value: Section.BERANDA, icon: 'fa-home' },
    { label: 'Menu', value: Section.MENU, icon: 'fa-utensils' },
    { label: 'Kontak', value: Section.KONTAK, icon: 'fa-phone' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#FFFDF5]/90 backdrop-blur-md shadow-sm z-50 border-b border-green-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setActiveSection(Section.BERANDA)}>
            <div className="bg-green-500 p-2 rounded-xl group-hover:rotate-12 transition-transform shadow-lg shadow-green-200">
              <span className="text-xl">🥑</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-black text-green-800 text-xl tracking-tighter">ES TELLER</span>
              <span className="text-lime-600 font-bold text-sm tracking-[0.2em] uppercase">Creamy</span>
            </div>
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => setActiveSection(item.value)}
                className={`flex items-center gap-2 font-bold transition-all duration-300 relative ${
                  activeSection === item.value 
                    ? 'text-green-600' 
                    : 'text-slate-500 hover:text-green-500'
                } py-2`}
              >
                <i className={`fas ${item.icon} text-sm`}></i>
                {item.label}
                {activeSection === item.value && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-500 rounded-full"></span>
                )}
              </button>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-green-100 px-8 py-3 justify-between items-center z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] rounded-t-[2rem]">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => setActiveSection(item.value)}
                className={`flex flex-col items-center gap-1 transition-all ${
                  activeSection === item.value 
                    ? 'text-green-600 scale-110' 
                    : 'text-slate-400'
                }`}
              >
                <div className={`p-2 rounded-xl ${activeSection === item.value ? 'bg-green-50' : ''}`}>
                  <i className={`fas ${item.icon} text-xl`}></i>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
