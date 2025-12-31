'use client'

import { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import ProductCard from "../Components/ProductCard"
import { getProducts, getCategories } from "../utils/mockApi"

export default function Products() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const searchParams = useSearchParams()
  const router = useRouter()
  
  const categoryFilter = searchParams.get('category')
  const searchQuery = searchParams.get('search')

  useEffect(() => {
    const fetchData = async () => {
      try {
        // احصل على جميع المنتجات مع الفلترة
        const filters = {}
        if (categoryFilter) filters.category = categoryFilter
        if (searchQuery) filters.search = searchQuery
        
        const [productsData, categoriesData] = await Promise.all([
          getProducts(filters),
          getCategories()
        ])
        
        setProducts(productsData)
        setCategories(categoriesData)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }
    
    fetchData()
  }, [categoryFilter, searchQuery])

  const handleCategoryChange = (e) => {
    const value = e.target.value
    if (value) {
      router.push(`/products?category=${encodeURIComponent(value)}`)
    } else {
      router.push('/products')
    }
  }

  const handleClearFilter = () => {
    router.push('/products')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading products...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {categoryFilter 
              ? `${categoryFilter} Products` 
              : searchQuery 
                ? `Search Results for "${searchQuery}"`
                : 'All Products'
            }
          </h1>
          <p className="text-gray-600">
            {products.length === 0 
              ? 'No products found'
              : `Showing ${products.length} product${products.length !== 1 ? 's' : ''}`
            }
          </p>
          
          {/* Clear Filter Button */}
          {(categoryFilter || searchQuery) && (
            <div className="mt-4">
              <button 
                onClick={handleClearFilter}
                className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition border px-4 py-2 rounded-lg hover:bg-gray-100"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                View All Products
              </button>
            </div>
          )}
        </div>
        
        {/* Filters Section */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <div className="flex items-center gap-4">
            <div className="relative">
              <select 
                className="border rounded-lg px-4 py-2 bg-white cursor-pointer appearance-none pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onChange={handleCategoryChange}
                value={categoryFilter || ''}
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category.id || category} value={category.name || category}>
                    {category.name || category} 
                    {category.count && ` (${category.count})`}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            
            {/* Sort Options */}
            <select 
              className="border rounded-lg px-4 py-2 bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => {
                // Sorting logic can be added here
                console.log('Sort by:', e.target.value)
              }}
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>
        
        {/* Products Grid */}
        {products.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            {/* Pagination (Optional) */}
            <div className="mt-12 flex justify-center">
              <div className="flex items-center gap-2">
                <button className="px-4 py-2 border rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed">
                  Previous
                </button>
                <span className="px-4 py-2">Page 1 of 1</span>
                <button className="px-4 py-2 border rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed">
                  Next
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <div className="w-16 h-16 mx-auto mb-4 text-gray-400">
              <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-xl text-gray-600 mb-4">
              {searchQuery 
                ? `No products found for "${searchQuery}"`
                : 'No products available in this category'
              }
            </p>
            <div className="flex gap-4 justify-center">
              <button 
                onClick={handleClearFilter}
                className="text-blue-600 hover:text-blue-800 font-medium px-4 py-2 border border-blue-600 rounded-lg hover:bg-blue-50"
              >
                View all products
              </button>
              <button 
                onClick={() => router.push('/categories')}
                className="text-gray-700 hover:text-black font-medium px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Browse Categories
              </button>
            </div>
          </div>
        )}
        
        {/* Categories Quick Links */}
        {!categoryFilter && products.length > 0 && (
          <div className="mt-16 pt-8 border-t">
            <h2 className="text-2xl font-bold text-center mb-6">Shop by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.slice(0, 6).map(category => (
                <button
                  key={category.id || category}
                  onClick={() => router.push(`/products?category=${encodeURIComponent(category.name || category)}`)}
                  className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-2 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                  </div>
                  <span className="font-medium">{category.name || category}</span>
                  {category.count && (
                    <p className="text-sm text-gray-500 mt-1">{category.count} items</p>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
