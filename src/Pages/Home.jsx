'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getFeaturedProducts, getCategories } from '../utils/mockApi'
import ProductCard from '../Components/ProductCard'

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
        setCategories(categoriesData.slice(0, 4))
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
          Discover amazing products at unbeatable prices. 
          Fast shipping & 24/7 customer support.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={handleShopNow}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 font-medium shadow-lg"
          >
            Shop Now
          </button>

          <button 
            onClick={handleBrowseCategories}
            className="bg-white text-gray-800 border-2 border-gray-300 px-8 py-3 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 font-medium"
          >
            Browse Categories
          </button>
        </div>
      </section>

      {/* Featured Products */}
      {featuredProducts.length > 0 && (
        <section className="py-12 px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.slice(0, 6).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <button 
              onClick={handleShopNow}
              className="text-blue-600 hover:text-blue-800 font-medium text-lg inline-flex items-center gap-2"
            >
              View All Products
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </section>
      )}

      {/* Categories */}
      {categories.length > 0 && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {categories.map((category) => (
                <div 
                  key={category.id || category}
                  onClick={() => router.push(`/products?category=${encodeURIComponent(category.name || category)}`)}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow cursor-pointer text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                    {category.icon ? (
                      <span className="text-2xl">{category.icon}</span>
                    ) : (
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                      </svg>
                    )}
                  </div>
                  <h3 className="font-semibold text-lg text-gray-800">{category.name || category}</h3>
                  {category.count && (
                    <p className="text-gray-500 text-sm mt-2">{category.count} products</p>
                  )}
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <button 
                onClick={handleBrowseCategories}
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                View All Categories →
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Features */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Shop With Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-3">Quality Products</h3>
            <p className="text-gray-600">All products are verified for quality before shipping.</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-3">Fast Shipping</h3>
            <p className="text-gray-600">Free shipping on orders over $50. Express options available.</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-3">24/7 Support</h3>
            <p className="text-gray-600">Our team is always here to help with any questions.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Shopping?</h2>
          <p className="text-xl mb-10 text-blue-100">
            Join thousands of happy customers. Sign up today!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => router.push('/register')}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Create Free Account
            </button>
            <button 
              onClick={() => router.push('/login')}
              className="border-2 border-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition font-semibold"
            >
              Sign In
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
