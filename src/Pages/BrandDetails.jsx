import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './BrandDetails.css';
import { products } from '../productsData';

function ProductCard({ product }) {
  return (
    <Link to={`/products/${product.id}`} className="product-card-link">
      <div className="product-card">
        <div className="product-image-container">
          <img 
            src={product.image} 
            alt={product.title}
            className="product-image"
          />
          {product.isNew && <span className="product-badge">NEW</span>}
          {product.discount && (
            <span className="discount-badge">-{product.discount}%</span>
          )}
        </div>
        <div className="product-info">
          <h3 className="product-title">{product.title}</h3>
          <p className="product-category">{product.category}</p>
          <div className="product-price-container">
            {product.discount ? (
              <>
                <span className="product-price-old">${product.price}</span>
                <span className="product-price-new">
                  ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                </span>
              </>
            ) : (
              <span className="product-price">${product.price}</span>
            )}
          </div>
          <button className="view-product-btn">
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
}

export default function BrandDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const brands = [
    { 
      id: 1, 
      img: "IMG-20251216-WA0040.jpg", 
      name: "GUCCI", 
      description: "Italian luxury fashion brand specializing in bags and perfumes",
      categories: ["Bags", "Perfumes", "Wallets", "Accessories"]
    },
    { 
      id: 2, 
      img: "IMG-20251216-WA0039.jpg", 
      name: "CHANEL", 
      description: "French luxury fashion house with iconic bags and perfumes",
      categories: ["Bags", "Perfumes", "Jewelry", "Makeup"]
    },
    { 
      id: 3, 
      img: "IMG-20251216-WA0041.jpg", 
      name: "DIOR", 
      description: "French fashion house known for bags and beauty products",
      categories: ["Bags", "Perfumes", "Clothing", "Shoes"]
    },
    { 
      id: 4, 
      img: "IMG-20251216-WA0038.jpg", 
      name: "LOUIS VUITTON", 
      description: "Luxury brand specializing in travel bags and luggage",
      categories: ["Bags", "Luggage", "Accessories", "Shoes"]
    },
    { 
      id: 5, 
      img: "IMG-20251216-WA0056.jpg", 
      name: "VICTORIA'S SECRET", 
      description: "Specialized in lingerie, perfumes, and beauty products",
      categories: ["Lingerie", "Perfumes", "Beauty", "Sleepwear"]
    },
    { 
      id: 6, 
      img: "IMG-20251216-WA0045.jpg", 
      name: "PRADA", 
      description: "Italian luxury fashion brand with elegant bags",
      categories: ["Bags", "Clothing", "Shoes", "Accessories"]
    },
    { 
      id: 7, 
      img: "IMG-20251216-WA0044.jpg", 
      name: "MARC JACOBS", 
      description: "American fashion designer known for trendy bags",
      categories: ["Bags", "Perfumes", "Clothing", "Accessories"]
    },
    { 
      id: 8, 
      img: "IMG-20251216-WA0043.jpg", 
      name: "ZARA", 
      description: "Fast fashion with crop tops, pants, and casual wear",
      categories: ["Crop Tops", "Pants", "Dresses", "Jackets"]
    },
    { 
      id: 9, 
      img: "IMG-20251216-WA0042.jpg", 
      name: "RALPH LAUREN", 
      description: "American classic style with shirts and polo shirts",
      categories: ["Shirts", "Polo Shirts", "Pants", "Sweaters"]
    },
    { 
      id: 10, 
      img: "IMG-20251216-WA0060.jpg", 
      name: "TOMMY HILFIGER", 
      description: "American sportswear with t-shirts and hoodies",
      categories: ["T-Shirts", "Hoodies", "Jeans", "Jackets"]
    },
    { 
      id: 11, 
      img: "IMG-20251216-WA0063.jpg", 
      name: "BURBERRY", 
      description: "British luxury with scarves and trench coats",
      categories: ["Scarves", "Coats", "Trench Coats", "Accessories"]
    },
    { 
      id: 12, 
      img: "IMG-20251216-WA0049.jpg", 
      name: "VERSACE", 
      description: "Italian luxury with bold prints and accessories",
      categories: ["Shirts", "Dresses", "Accessories", "Swimwear"]
    },
    { 
      id: 13, 
      img: "IMG-20251216-WA0050.jpg", 
      name: "HERMÈS", 
      description: "French luxury with silk scarves and leather bags",
      categories: ["Scarves", "Bags", "Perfumes", "Accessories"]
    },
    { 
      id: 14, 
      img: "IMG-20251216-WA0037.jpg", 
      name: "SAINT LAURENT", 
      description: "French fashion with t-shirts and leather jackets",
      categories: ["T-Shirts", "Leather Jackets", "Bags", "Shoes"]
    },
    { 
      id: 15, 
      img: "IMG-20251216-WA0051.jpg", 
      name: "CHLOÉ", 
      description: "French feminine fashion with dresses and blouses",
      categories: ["Dresses", "Blouses", "Bags", "Shoes"]
    }
  ];
  
  const brand = brands.find(b => b.id === parseInt(id));
  
  // فلترة المنتجات حسب البراند
  const brandProducts = products.filter(product => {
    if (!brand) return false;
    
    const productName = product.title.toLowerCase();
    const brandName = brand.name.toLowerCase();
    const productCategory = product.category.toLowerCase();
    const brandCategories = brand.categories.map(c => c.toLowerCase());
    
    return productName.includes(brandName) || 
           brandCategories.some(category => productCategory.includes(category));
  });
  
  if (!brand) {
    return (
      <div className="brand-not-found">
        <h2>Brand not found</h2>
        <button onClick={() => navigate('/brands')}>Back to Brands</button>
      </div>
    );
  }
  
  return (
    <div className="brand-details-page">
      <button className="back-button" onClick={() => navigate('/brands')}>
        ← Back to Brands
      </button>
      
      <div className="brand-info-section">
        <div className="brand-logo-container">
          <img 
            src={`/images/${brand.img}`} 
            alt={brand.name}
            className="brand-logo"
          />
        </div>
        <div className="brand-text-info">
          <h1 className="brand-title">{brand.name}</h1>
          <p className="brand-description">{brand.description}</p>
          
          <div className="brand-categories">
            <h3>Main Categories:</h3>
            <div className="categories-tags">
              {brand.categories.map((category, index) => (
                <span key={index} className="category-tag">{category}</span>
              ))}
            </div>
          </div>
          
          <div className="brand-stats">
            <div className="stat-item">
              <span className="stat-number">{brandProducts.length}</span>
              <span className="stat-label">Products</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="brand-products-section">
        <h2 className="section-title">
          {brand.name} Collection ({brandProducts.length} products)
        </h2>
        
        {brandProducts.length > 0 ? (
          <div className="products-grid">
            {brandProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="no-products">
            <p>No products found for {brand.name}</p>
            <p>Check back soon for new arrivals!</p>
          </div>
        )}
      </div>
    </div>
  );
}