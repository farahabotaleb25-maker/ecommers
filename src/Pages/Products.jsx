import { useSearchParams } from "react-router-dom";
import { products } from "../productsData";
import ProductCard from "../Components/ProductCard";

export default function Products() {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  
  // Filter products by category
  const filteredProducts = categoryFilter 
    ? products.filter(product => 
        product.title.toLowerCase().includes(categoryFilter.toLowerCase()) ||
        product.category.toLowerCase().includes(categoryFilter.toLowerCase())
      )
    : products;

  // Get all unique categories for filter
  const allCategories = [...new Set(products.map(p => p.category))];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {categoryFilter ? `${categoryFilter}` : 'All Products'}
          </h1>
          <p className="text-gray-600">
            {categoryFilter 
              ? `Showing ${filteredProducts.length} products` 
              : `Discover ${products.length} amazing products`
            }
          </p>
          
          {/* Clear Filter Button */}
          {categoryFilter && (
            <div className="mt-4">
              <a 
                href="/products" 
                className="inline-block text-gray-600 hover:text-black transition border px-4 py-2 rounded-lg hover:bg-gray-100"
              >
                ← View All Products
              </a>
            </div>
          )}
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <select 
            className="border rounded-lg px-4 py-2 bg-white cursor-pointer"
            onChange={(e) => {
              if(e.target.value) window.location.href = `/products?category=${e.target.value}`;
            }}
          >
            <option value="">All Categories</option>
            {allCategories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        
        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 mb-4">No products found in this category</p>
            <a href="/products" className="text-blue-600 hover:underline font-medium">
              View all products
            </a>
          </div>
        )}
      </div>
    </div>
  );
}