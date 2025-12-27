import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer({ title }) {
  return (
    <footer className="bg-white text-gray-800 py-12 border-t border-gray-300">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-5 gap-8">
        
        {/* COLUMN 1 - Logo & Info */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2 font-bold text-xl">
            <div className="bg-black text-white p-2 rounded">S</div>
            {title || "ShopMart"}
          </div>
          <p className="text-gray-600 text-sm">
            Your one-stop destination for the latest technology, fashion, and lifestyle products.
          </p>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <MapPin size={16} /> 123 Shop Street, October City, DC 12345
          </div>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <Phone size={16} /> (+20) 01093333333
          </div>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <Mail size={16} /> support@shopmart.com
          </div>
        </div>

        {/* COLUMN 2 */}
        <div className="flex flex-col gap-3">
          <h3 className="font-bold">SHOP</h3>
          {["Electronics", "Fashion", "Home & Garden", "Sports", "Deals"].map((item) => (
            <a key={item} href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
              {item}
            </a>
          ))}
        </div>

        {/* COLUMN 3 */}
        <div className="flex flex-col gap-3">
          <h3 className="font-bold">CUSTOMER SERVICE</h3>
          {["Contact Us", "Help Center", "Track Your Order", "Returns & Exchanges", "Size Guide"].map((item) => (
            <a key={item} href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
              {item}
            </a>
          ))}
        </div>

        {/* COLUMN 4 */}
        <div className="flex flex-col gap-3">
          <h3 className="font-bold">ABOUT</h3>
          {["About ShopMart", "Careers", "Press", "Investor Relations", "Sustainability"].map((item) => (
            <a key={item} href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
              {item}
            </a>
          ))}
        </div>

        {/* COLUMN 5 */}
        <div className="flex flex-col gap-3">
          <h3 className="font-bold">POLICIES</h3>
          {["Privacy Policy", "Terms of Service", "Cookie Policy", "Shipping Policy", "Refund Policy"].map((item) => (
            <a key={item} href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}