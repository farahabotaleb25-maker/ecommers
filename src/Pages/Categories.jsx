'use client'

import { useState, useContext } from 'react'
import { Heart, ShoppingCart, Search, Menu, X, User, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { CartContext } from './CartContext'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const pathname = usePathname()
  const router = useRouter()
  const { cartItems } = useContext(CartContext)

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery)}`)
      setIsMenuOpen(false)
    }
  }

  const cartItemsCount = cartItems?.reduce((total, item) => total + (item.quantity || 1), 0) || 0

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">S</span>
            </div>
            <span className="hidden sm:inline text-gray-900">Shop</span>
            <span className="text-blue-600">Mart</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`${pathname === '/' ? 'text-blue-600 font-semibold border-b-2 border-blue-600' : 'text-gray-700'} hover:text-blue-600 transition pb-1`}
            >
              Home
            </Link>
            
            <div className="relative group">
              <Link 
                href="/products" 
                className={`${pathname.startsWith('/products') ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600 transition flex items-center gap-1`}
              >
                Products
                <ChevronDown className="w-4 h-4" />
              </Link>
              <div className="absolute hidden group-hover:block bg-white shadow-xl rounded-lg mt-2 p-4 w-48 z-50">
                <Link href="/products" className="block py-2 px-3 hover:bg-blue-50 hover:text-blue-600 rounded">All Products</Link>
                <Link href="/products?category=Electronics" className="block py-2 px-3 hover:bg-blue-50 hover:text-blue-600 rounded">Electronics</Link>
                <Link href="/products?category=Fashion" className="block py-2 px-3 hover:bg-blue-50 hover:text-blue-600 rounded">Fashion</Link>
                <Link href="/products?category=Home" className="block py-2 px-3 hover:bg-blue-50 hover:text-blue-600 rounded">Home & Garden</Link>
                <Link href="/products?category=Sports" className="block py-2 px-3 hover:bg-blue-50 hover:text-blue-600 rounded">Sports</Link>
              </div>
            </div>
            
            <Link 
              href="/categories" 
              className={`${pathname === '/categories' ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600 transition`}
            >
              Categories
            </Link>
            <Link 
              href="/brands" 
              className={`${pathname === '/brands' ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600 transition`}
            >
              Brands
            </Link>
            <Link 
              href="/feed" 
              className={`${pathname === '/feed' ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600 transition`}
            >
              Feed
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="w-full">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products, brands, categories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button 
                  type="submit" 
                  className="absolute right-3 top-2.5 text-gray-400 hover:text-blue-600"
                >
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => router.push('/wishlist')}
              className="text-gray-700 hover:text-red-500 transition relative"
            >
              <Heart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>
            
            <button 
              onClick={() => router.push('/cart')}
              className="text-gray-700 hover:text-blue-600 transition relative"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
            
            <div className="relative">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-gray-700 hover:text-blue-600 transition flex items-center gap-1 bg-gray-100 rounded-full p-2"
              >
                <User className="w-5 h-5" />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-xl rounded-lg py-2 z-50 border">
                  <Link 
                    href="/login" 
                    className="block px-4 py-2.5 hover:bg-blue-50 hover:text-blue-600"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Login
                  </Link>
                  <Link 
                    href="/register" 
                    className="block px-4 py-2.5 hover:bg-blue-50 hover:text-blue-600"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Register
                  </Link>
                  <Link 
                    href="/profile" 
                    className="block px-4 py-2.5 hover:bg-blue-50 hover:text-blue-600"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    My Profile
                  </Link>
                  <Link 
                    href="/orders" 
                    className="block px-4 py-2.5 hover:bg-blue-50 hover:text-blue-600"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    My Orders
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Search Bar */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <form onSubmit={handleSearch}>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button type="submit" className="absolute right-3 top-3">
                  <Search className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-1">
              <Link 
                href="/" 
                className="px-4 py-3 hover:bg-blue-50 rounded-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/products" 
                className="px-4 py-3 hover:bg-blue-50 rounded-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                All Products
              </Link>
              <Link 
                href="/categories" 
                className="px-4 py-3 hover:bg-blue-50 rounded-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
              </Link>
              <Link 
                href="/brands" 
                className="px-4 py-3 hover:bg-blue-50 rounded-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Brands
              </Link>
              <Link 
                href="/feed" 
                className="px-4 py-3 hover:bg-blue-50 rounded-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Feed
              </Link>
              
              <div className="border-t mt-2 pt-4">
                <button 
                  onClick={() => { router.push('/wishlist'); setIsMenuOpen(false); }}
                  className="w-full flex items-center justify-between px-4 py-3 hover:bg-blue-50 rounded-lg"
                >
                  <span className="flex items-center gap-3">
                    <Heart className="w-5 h-5" />
                    Wishlist
                  </span>
                  <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    3
                  </span>
                </button>
                
                <button 
                  onClick={() => { router.push('/cart'); setIsMenuOpen(false); }}
                  className="w-full flex items-center justify-between px-4 py-3 hover:bg-blue-50 rounded-lg"
                >
                  <span className="flex items-center gap-3">
                    <ShoppingCart className="w-5 h-5" />
                    Shopping Cart
                  </span>
                  {cartItemsCount > 0 && (
                    <span className="bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cartItemsCount}
                    </span>
                  )}
                </button>
                
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <Link 
                    href="/login" 
                    className="px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg text-center font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link 
                    href="/register" 
                    className="px-4 py-3 bg-blue-600 text-white hover:bg-blue-700 rounded-lg text-center font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
