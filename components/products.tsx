
const productCategories = [
  {
    category: "Computers & Servers",
    brands: "Dell, HP, Lenovo, Asus, Apple, Acer, Cisco",
    items: ["Desktops", "Laptops", "Workstations", "Assembled PCs", "Enterprise Servers"]
  },
  {
    category: "Networking",
    brands: "Cisco, Aruba, HPE, Netgear, D-Link, TP-Link, Sophos, Commscope, Digisol",
    items: ["Switches", "Routers", "Wi-Fi Access Points", "Fiber Products", "Firewalls (FortiGate, SonicWall)"]
  },
  {
    category: "Security & Surveillance",
    brands: "CP-Plus, Tiandy, Honeywell, Axis, Bosch, Panasonic, Hi-Focus",
    items: ["CCTV Cameras", "Access Control", "Biometrics (Realtime, ESSL, Mantra, HID)"]
  },
  {
    category: "Power & Peripherals",
    brands: "Emersson, Vertiv, Numeric, APC, Luminous",
    items: ["UPS Systems", "Printers (HP, Epson, Canon, Kyocera)", "ID Card Printers (HID Fargo, Primacy)"]
  },
  {
    category: "Communication & Software",
    brands: "Panasonic, NEC, Matrix, Microsoft, Cisco, Logitech",
    items: ["EPABX", "Video Conferencing", "Billing Software", "OS & Applications"]
  },
  {
    category: "End-Point Security",
    brands: "Trellix, Sophos, Kaspersky, Quick Heal, Symantec",
    items: ["Antivirus", "Endpoint Protection", "Data Security"]
  }
];

export function Products() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-sm font-semibold text-brand-600 tracking-wide uppercase mb-3">Products We Provide</h2>
          <h3 className="text-3xl font-bold text-slate-900">Trusted Brands & Quality Hardware</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {productCategories.map((cat, index) => (
            <div key={index} className="group">
              <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                <span className="w-2 h-2 bg-brand-500 rounded-full mr-3"></span>
                {cat.category}
              </h4>
              <div className="pl-5 border-l border-slate-200">
                <p className="text-sm font-semibold text-slate-700 mb-2 uppercase tracking-wider text-xs">Brands</p>
                <p className="text-slate-600 mb-4">{cat.brands}</p>
                
                <p className="text-sm font-semibold text-slate-700 mb-2 uppercase tracking-wider text-xs">Key Items</p>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item, i) => (
                    <span key={i} className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-slate-900 rounded-2xl text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-2xl font-bold mb-2">Also Available: Rental & Refurbished</h4>
              <p className="text-slate-300">
                We offer high-quality refurbished IT products with warranty and flexible rental options for Desktops, Laptops, Servers, and Network Switches.
              </p>
            </div>
            <div className="md:text-right">
              <a href="#contact" className="inline-block px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-medium rounded-lg transition-colors">
                Inquire Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
