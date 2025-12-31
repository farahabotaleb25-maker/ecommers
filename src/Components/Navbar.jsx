import { useState, useContext } from 'react'
import { Heart, ShoppingCart, Search, Menu, X, User, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function SimpleNavbar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto py-4 px-6 flex items-center justify-between">
        
        {/* LEFT — LOGO */}
        <Link to="/" className="text-2xl font-bold flex items-center gap-2">
          <div className="bg-black text-white p-2 rounded">S</div>
          ShopMart
        </Link>

        {/* CENTER — LINKS */}
        <div className="flex gap-8 font-medium">
          <Link to="/products" className="hover:text-black">
            Products
          </Link>
          <Link to="/brands" className="hover:text-black">
            Brands
          </Link>
          <Link to="/categories" className="hover:text-black">
            Categories
          </Link>
        </div>

        {/* RIGHT — USER ICON */}
        <div className="relative">
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="p-2 rounded-full hover:bg-gray-200 transition"
          >
            <User size={22} />
          </button>

          {/* DROPDOWN */}
          {openMenu && (
            <div className="absolute right-0 mt-3 bg-white shadow-xl rounded-lg p-4 w-44">
              <Link 
                to="/login" 
                className="block py-2 hover:bg-gray-100 rounded"
                onClick={() => setOpenMenu(false)}
              >
                Login
              </Link>
              <Link 
                to="/register" 
                className="block py-2 hover:bg-gray-100 rounded"
                onClick={() => setOpenMenu(false)}
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
