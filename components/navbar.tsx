import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import ritLogo from '@/assets/rit.png';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center gap-3">
            <Image src={ritLogo} alt="Roots Info Tek" className="w-10 h-10 object-contain" />
            <span className="font-bold text-xl tracking-tight text-slate-900">ROOTS INFO TEK</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <Link href="#about" className="text-slate-600 hover:text-brand-600 transition-colors text-sm font-medium">About</Link>
            <Link href="#services" className="text-slate-600 hover:text-brand-600 transition-colors text-sm font-medium">Services</Link>
            <Link href="#products" className="text-slate-600 hover:text-brand-600 transition-colors text-sm font-medium">Products</Link>
            <Link href="#contact" className="text-slate-600 hover:text-brand-600 transition-colors text-sm font-medium">Contact</Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-slate-900">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#about" className="block px-3 py-2 text-slate-600 hover:text-brand-600 hover:bg-slate-50 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="#services" className="block px-3 py-2 text-slate-600 hover:text-brand-600 hover:bg-slate-50 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="#products" className="block px-3 py-2 text-slate-600 hover:text-brand-600 hover:bg-slate-50 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>Products</Link>
            <Link href="#contact" className="block px-3 py-2 text-slate-600 hover:text-brand-600 hover:bg-slate-50 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
