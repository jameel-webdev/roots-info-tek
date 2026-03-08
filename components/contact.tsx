import { MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-sm font-semibold text-brand-600 tracking-wide uppercase mb-3">Contact Us</h2>
            <h3 className="text-3xl font-bold text-slate-900 mb-8">Let&apos;s Start a Conversation</h3>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-brand-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900">Office Address</h4>
                  <p className="text-slate-600 mt-1">
                    ROOTS INFO TEK<br />
                    9/985A, Renganathan St, Nallathambi Nagar Extn,<br />
                    Sivagami nagar, Medavakkam,<br />
                    Chennai – 600100
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-brand-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900">Registered Address</h4>
                  <p className="text-slate-600 mt-1">
                    222A/3, Srinivasa Gardens, Trichy Main Road,<br />
                    T. Murungapatti, Thuraiyur TK,<br />
                    Trichy DT - 621012
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <Phone className="h-6 w-6 text-brand-600 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900">Phone</h4>
                  <p className="text-slate-600 mt-1">90036 83188</p>
                </div>
              </div>

              <div className="flex items-center">
                <Mail className="h-6 w-6 text-brand-600 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900">Email</h4>
                  <p className="text-slate-600 mt-1">rootsinfotek@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-200">
              <p className="text-sm text-slate-500 font-mono">GSTIN: 33AJNPH6841E1ZA</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
            <h4 className="text-xl font-bold text-slate-900 mb-6">Why Work With Us?</h4>
            <ul className="space-y-4">
              {[
                "Experienced team with hands-on knowledge",
                "Quality work delivered on time",
                "Use of the latest technology and trusted brands",
                "Strong ties with leading IT suppliers"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-brand-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 p-6 bg-brand-50 rounded-xl">
              <p className="text-brand-800 font-medium italic text-center">
                &quot;Making Technology Work for you.&quot;
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
