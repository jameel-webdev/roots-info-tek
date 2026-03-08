import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6">
            Making Technology <br />
            <span className="text-brand-600">Work for You.</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl">
            ROOTS INFO TEK is a premier System Integration company providing practical and reliable technology solutions. 
            Since 2017, we&apos;ve been empowering businesses to operate smarter, faster, and more securely.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-brand-600 hover:bg-brand-700 transition-all shadow-sm hover:shadow-md"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link 
              href="#services" 
              className="inline-flex items-center justify-center px-8 py-3 border border-slate-200 text-base font-medium rounded-full text-slate-700 bg-white hover:bg-slate-50 transition-all shadow-sm"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>
      
      {/* Abstract background element */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/4 w-[800px] h-[800px] bg-brand-50/50 rounded-full blur-3xl -z-0 pointer-events-none" />
    </section>
  );
}
