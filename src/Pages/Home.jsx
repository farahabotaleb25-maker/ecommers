'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getFeaturedProducts, getCategories } from '../utils/mockApi'

export default function Home() {
  const router = useRouter()
  const [featuredProducts, setFeaturedProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsData, categoriesData] = await Promise.all([
          getFeaturedProducts(),
          getCategories()
        ])
        setFeaturedProducts(productsData)
        setCategories(categoriesData.slice(0, 4)) // أول 4 تصنيفات فقط
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }
    
    fetchData()
  }, [])

  const handleShopNow = () => {
    router.push("/products")
  }

  const handleBrowseCategories = () => {
    router.push("/categories")
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading ShopMart...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="text-center py-16 px-4 sm:py-20 md:py-24">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900">
          Welcome to <span className="text-blue-600">ShopMart</span>
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
          Discover the latest technology, fashion, and lifestyle products. 
          Quality guaranteed with fast shipping and excellent customer service.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={handleShopNow}
            className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 font-medium text-lg shadow-lg"
          >
            Shop Now
          </button>

          <button 
            onClick={handleBrowseCategories}
            className="border-2 border-gray-800 px-8 py-3 rounded-lg hover:bg-gray-800 hover:text-white transition-all duration-300 font-medium text-lg"
          >
            Browse Categories
          </button>
        </div>
      </section>

      {/* Categories Preview */}
      {categories.length > 0 && (
        <section className="py-12 px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {categories.map((category) => (
              <div 
                key={category.id || category}
                onClick={() => router.push(`/products?category=${encodeURIComponent(category.name || category)}`)}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow cursor-pointer text-center border border-gray-100"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-full flex items-center justify-center">
                  <span className="text-2xl">{category.icon || '🛒'}</span>
                </div>
                <h3 className="font-semibold text-lg text-gray-800">{category.name || category}</h3>
                <p className="text-gray-500 text-sm mt-2">
                  {category.count ? `${category.count} items` : 'Explore now'}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Featured Products Preview */}
      {featuredProducts.length > 0 && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.slice(0, 3).map((product) => (
                <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2 text-gray-800">{product.name}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-blue-600">${product.price}</span>
                      <button 
                        onClick={() => router.push(`/products/${product.id}`)}
                        className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition text-sm"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <button 
                onClick={handleShopNow}
                className="text-blue-600 hover:text-blue-800 font-medium text-lg flex items-center justify-center gap-2 mx-auto"
              >
                View All Products
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose ShopMart</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-4">Quality Guaranteed</h3>
            <p className="text-gray-600">All products go through rigorous quality checks before shipping.</p>
          </div>
          
          <div className="text-center p-8 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-4">Fast Shipping</h3>
            <p className="text-gray-600">Free delivery on orders over $50. Express shipping available.</p>
          </div>
          
          <div className="text-center p-8 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="w-16 h-16 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-4">24/7 Support</h3>
            <p className="text-gray-600">Our customer service team is always ready to help you.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Shopping?</h2>
          <p className="text-xl mb-10 text-blue-100 opacity-90">
            Join thousands of satisfied customers. Create your account today and get 10% off your first order!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => router.push('/register')}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105 shadow-lg text-lg"
            >
              Create Account
            </button>
            <button 
              onClick={() => router.push('/login')}
              className="border-2 border-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition font-semibold text-lg"
            >
              Sign In
            </button>
          </div>
          <p className="mt-8 text-blue-100 text-sm">
            Already have an account? <button onClick={() => router.push('/login')} className="underline hover:text-white">Sign in here</button>
          </p>
        </div>
      </section>
    </div>
  )
}
