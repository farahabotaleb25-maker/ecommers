import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

export default function ProductCard({ product }) {
  const { addToCart, isInCart } = useCart();
  
  const productInCart = isInCart(product.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Product Image */}
      <div className="relative h-64 overflow-hidden">
        <Link to={`/products/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.title}
            className="w-full h-full object-contain p-4"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/300x300?text=Product+Image";
            }}
          />
        </Link>
        
        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-4 left-4 right-4 py-2 rounded-lg font-medium transition-colors ${
            productInCart
              ? 'bg-green-600 text-white hover:bg-green-700'
              : 'bg-black text-white hover:bg-gray-800'
          }`}
        >
          {productInCart ? '✓ Added to Cart' : 'Add to Cart'}
        </button>
      </div>
      
      {/* Product Info */}
      <div className="p-4">
        <div className="mb-2">
          <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
            {product.category}
          </span>
        </div>
        
        <Link to={`/products/${product.id}`}>
          <h3 className="font-semibold text-gray-900 hover:text-blue-600 transition-colors mb-2 line-clamp-2">
            {product.title}
          </h3>
        </Link>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}>
                  ★
                </span>
              ))}
            </div>
            <span className="text-sm text-gray-600 ml-1">({product.rating})</span>
          </div>
          
          <p className="text-lg font-bold text-gray-900">EGP {product.price}</p>
        </div>
        
        {/* Quick Action */}
        <button
          onClick={handleAddToCart}
          className={`w-full mt-4 py-2 rounded-lg font-medium ${
            productInCart
              ? 'bg-green-100 text-green-700 hover:bg-green-200'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {productInCart ? '✓ Added Cart' : '+  Add'}
        </button>
      </div>
    </div>
  );
}