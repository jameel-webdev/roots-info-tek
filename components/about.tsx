import { Target, Lightbulb, Shield, Users } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div>
            <h2 className="text-sm font-semibold text-brand-600 tracking-wide uppercase mb-3">About Us</h2>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">Practical & Reliable Technology Solutions</h3>
            <div className="prose prose-slate text-slate-600 leading-relaxed">
              <p className="mb-4">
                ROOTS INFO TEK is a System Integration company established in 2017. We specialize in helping clients set up and connect their IT systems so they work smoothly together.
              </p>
              <p>
                Our goal is to make technology simple, efficient, and suited to each client&apos;s needs. We aim to be a trusted partner for organizations of all sizes — from growing companies to large enterprises.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <Target className="h-8 w-8 text-brand-600 mb-4" />
                <h4 className="font-bold text-slate-900 mb-2">Our Mission</h4>
                <p className="text-sm text-slate-600">
                  To deliver world-class technology solutions that empower businesses to operate smarter, faster, and more securely.
                </p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <Lightbulb className="h-8 w-8 text-brand-600 mb-4" />
                <h4 className="font-bold text-slate-900 mb-2">Our Vision</h4>
                <p className="text-sm text-slate-600">
                  To be a trusted partner for System Integration and IT services, known for quality and long-term support.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-slate-900">Core Values</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center">
                  <Lightbulb className="h-5 w-5 text-brand-700" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Innovation</h4>
                  <p className="text-slate-600 text-sm mt-1">We embrace the latest technologies to find smarter solutions for our clients.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-brand-700" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Integrity</h4>
                  <p className="text-slate-600 text-sm mt-1">Integrity is at the heart of our work, ensuring honesty and transparency in everything we do.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center">
                  <Target className="h-5 w-5 text-brand-700" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Excellence</h4>
                  <p className="text-slate-600 text-sm mt-1">We strive for excellence by delivering high-quality, reliable results every time.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center">
                  <Users className="h-5 w-5 text-brand-700" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Relationships</h4>
                  <p className="text-slate-600 text-sm mt-1">Building strong relationships and working closely with clients to achieve lasting success.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
