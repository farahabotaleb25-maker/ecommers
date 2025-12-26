import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useCart } from '../Components/CartContext';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MainLayout() {
  const { getTotalItems } = useCart();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      
      {getTotalItems() > 0 && (
        <Link 
          to="/cart" 
          className="fixed bottom-6 right-6 z-40 bg-black text-white p-3 rounded-full shadow-xl hover:bg-gray-800 transition-all duration-300 hover:scale-110"
        >
          <div className="relative">
            <ShoppingCart size={20} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
              {getTotalItems()}
            </span>
          </div>
        </Link>
      )}
      
      <Footer title="ShopMart" />
    </div>
  );
}