import Image from 'next/image';
import ritLogo from '@/assets/rit.png';


export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src={ritLogo} alt="Roots Info Tek" className="w-8 h-8 object-contain" />
              <span className="font-bold text-lg text-white">ROOTS INFO TEK</span>
            </div>
            <p className="text-sm max-w-xs">
              System Integration company providing practical and reliable technology solutions since 2017.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-brand-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-brand-400 transition-colors">Services</a></li>
              <li><a href="#products" className="hover:text-brand-400 transition-colors">Products</a></li>
              <li><a href="#contact" className="hover:text-brand-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Chennai, Tamil Nadu</li>
              <li>+91 90036 83188</li>
              <li>rootsinfotek@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} ROOTS INFO TEK. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
