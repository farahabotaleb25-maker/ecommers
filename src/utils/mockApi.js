// Mock Products Data - Fixed API
const productsData = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    description: "Noise-cancelling wireless headphones with superior sound quality and 30-hour battery life.",
    category: "Electronics",
    brand: "AudioTech",
    rating: 4.5,
    reviews: 128,
    inStock: true,
    discount: 15
  },
  {
    id: 2,
    name: "Smart Watch Pro Series 5",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    description: "Advanced smartwatch with health monitoring, GPS, and smartphone notifications.",
    category: "Electronics",
    brand: "TechWear",
    rating: 4.7,
    reviews: 89,
    inStock: true,
    discount: 10
  },
  {
    id: 3,
    name: "Designer Backpack Pro",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    description: "Water-resistant backpack with laptop compartment and multiple organizational pockets.",
    category: "Fashion",
    brand: "UrbanGear",
    rating: 4.4,
    reviews: 77,
    inStock: true,
    discount: 20
  },
  {
    id: 4,
    name: "Deluxe Coffee Maker",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop",
    description: "Programmable coffee maker with built-in grinder and thermal carafe.",
    category: "Home",
    brand: "BrewMaster",
    rating: 4.3,
    reviews: 56,
    inStock: true,
    discount: 0
  },
  {
    id: 5,
    name: "Professional Running Shoes",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    description: "High-performance running shoes with enhanced cushioning and breathable material.",
    category: "Sports",
    brand: "RunFast",
    rating: 4.6,
    reviews: 203,
    inStock: true,
    discount: 25
  },
  {
    id: 6,
    name: "Mechanical Gaming Keyboard",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop",
    description: "Mechanical gaming keyboard with RGB lighting, programmable keys, and wrist rest.",
    category: "Gaming",
    brand: "GameMaster",
    rating: 4.8,
    reviews: 142,
    inStock: false,
    discount: 15
  },
  {
    id: 7,
    name: "4K Ultra HD Television",
    price: 799.99,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop",
    description: "55-inch 4K Smart TV with HDR and streaming capabilities.",
    category: "Electronics",
    brand: "ViewMax",
    rating: 4.5,
    reviews: 231,
    inStock: true,
    discount: 12
  },
  {
    id: 8,
    name: "Fitness Tracker Band",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?w=400&h=400&fit=crop",
    description: "Activity tracker with heart rate monitoring, sleep tracking, and waterproof design.",
    category: "Fitness",
    brand: "FitPro",
    rating: 4.2,
    reviews: 98,
    inStock: true,
    discount: 30
  },
  {
    id: 9,
    name: "Bluetooth Speaker",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    description: "Portable Bluetooth speaker with 360° sound and 12-hour battery.",
    category: "Electronics",
    brand: "SoundWave",
    rating: 4.3,
    reviews: 167,
    inStock: true,
    discount: 0
  },
  {
    id: 10,
    name: "Office Chair Ergonomic",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
    description: "Ergonomic office chair with lumbar support and adjustable height.",
    category: "Home",
    brand: "ComfortPro",
    rating: 4.6,
    reviews: 89,
    inStock: true,
    discount: 18
  },
  {
    id: 11,
    name: "Digital Camera DSLR",
    price: 699.99,
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop",
    description: "24MP DSLR camera with kit lens and video recording capabilities.",
    category: "Electronics",
    brand: "PhotoPro",
    rating: 4.7,
    reviews: 112,
    inStock: true,
    discount: 8
  },
  {
    id: 12,
    name: "Yoga Mat Premium",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=400&h=400&fit=crop",
    description: "Non-slip yoga mat with carrying strap and alignment markers.",
    category: "Fitness",
    brand: "ZenLife",
    rating: 4.4,
    reviews: 256,
    inStock: true,
    discount: 0
  }
]

// Mock Categories
const categoriesData = [
  { id: 1, name: "Electronics", count: 4, icon: "💻" },
  { id: 2, name: "Fashion", count: 1, icon: "👕" },
  { id: 3, name: "Home", count: 2, icon: "🏠" },
  { id: 4, name: "Sports", count: 1, icon: "⚽" },
  { id: 5, name: "Gaming", count: 1, icon: "🎮" },
  { id: 6, name: "Fitness", count: 2, icon: "💪" },
  { id: 7, name: "Books", count: 0, icon: "📚" },
  { id: 8, name: "Toys", count: 0, icon: "🧸" }
]

// Mock Brands
const brandsData = [
  { id: 1, name: "AudioTech", productCount: 1 },
  { id: 2, name: "TechWear", productCount: 1 },
  { id: 3, name: "UrbanGear", productCount: 1 },
  { id: 4, name: "BrewMaster", productCount: 1 },
  { id: 5, name: "RunFast", productCount: 1 },
  { id: 6, name: "GameMaster", productCount: 1 },
  { id: 7, name: "ViewMax", productCount: 1 },
  { id: 8, name: "FitPro", productCount: 1 },
  { id: 9, name: "SoundWave", productCount: 1 },
  { id: 10, name: "ComfortPro", productCount: 1 },
  { id: 11, name: "PhotoPro", productCount: 1 },
  { id: 12, name: "ZenLife", productCount: 1 }
]

// Mock API Functions - Fixed Data (No external API calls)
export const getProducts = async (filters = {}) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 600))
  
  let filteredProducts = [...productsData]
  
  // Apply category filter
  if (filters.category) {
    filteredProducts = filteredProducts.filter(p => 
      p.category.toLowerCase() === filters.category.toLowerCase()
    )
  }
  
  // Apply search filter
  if (filters.search) {
    const query = filters.search.toLowerCase()
    filteredProducts = filteredProducts.filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      p.brand.toLowerCase().includes(query)
    )
  }
  
  // Apply price filter
  if (filters.minPrice) {
    filteredProducts = filteredProducts.filter(p => p.price >= filters.minPrice)
  }
  
  if (filters.maxPrice) {
    filteredProducts = filteredProducts.filter(p => p.price <= filters.maxPrice)
  }
  
  // Apply in-stock filter
  if (filters.inStock === true) {
    filteredProducts = filteredProducts.filter(p => p.inStock)
  }
  
  // Apply brand filter
  if (filters.brand) {
    filteredProducts = filteredProducts.filter(p => 
      p.brand.toLowerCase() === filters.brand.toLowerCase()
    )
  }
  
  // Apply sorting
  if (filters.sort) {
    switch (filters.sort) {
      case 'price-low':
        filteredProducts.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filteredProducts.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        filteredProducts.sort((a, b) => b.rating - a.rating)
        break
      case 'discount':
        filteredProducts.sort((a, b) => b.discount - a.discount)
        break
      default:
        // Default sort (featured)
        break
    }
  }
  
  return filteredProducts
}

export const getProductById = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 400))
  const product = productsData.find(p => p.id === parseInt(id))
  
  if (product) {
    // Get related products (same category)
    const relatedProducts = productsData
      .filter(p => p.id !== product.id && p.category === product.category)
      .slice(0, 4)
    
    return {
      ...product,
      relatedProducts
    }
  }
  
  return null
}

export const getCategories = async () => {
  await new Promise(resolve => setTimeout(resolve, 300))
  return categoriesData
}

export const getBrands = async () => {
  await new Promise(resolve => setTimeout(resolve, 300))
  return brandsData
}

export const getFeaturedProducts = async () => {
  await new Promise(resolve => setTimeout(resolve, 500))
  // Return products with highest rating and in stock
  return productsData
    .filter(p => p.inStock && p.rating >= 4.5)
    .slice(0, 6)
}

export const getProductsByCategory = async (category) => {
  await new Promise(resolve => setTimeout(resolve, 400))
  return productsData.filter(p => p.category === category)
}

export const getProductsByBrand = async (brand) => {
  await new Promise(resolve => setTimeout(resolve, 400))
  return productsData.filter(p => p.brand === brand)
}

export const getDiscountedProducts = async () => {
  await new Promise(resolve => setTimeout(resolve, 400))
  return productsData
    .filter(p => p.discount > 0 && p.inStock)
    .slice(0, 8)
}

// Mock Authentication API
export const loginUser = async (email, password) => {
  await new Promise(resolve => setTimeout(resolve, 800))
  
  // Mock successful login for demo
  if (email && password.length >= 6) {
    return {
      success: true,
      user: {
        id: 1,
        name: "Demo User",
        email: email,
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=demo",
        token: "mock-jwt-token-12345"
      }
    }
  }
  
  return {
    success: false,
    message: "Invalid email or password"
  }
}

export const registerUser = async (userData) => {
  await new Promise(resolve => setTimeout(resolve, 800))
  
  if (userData.email && userData.password && userData.name) {
    return {
      success: true,
      user: {
        id: Date.now(),
        name: userData.name,
        email: userData.email,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${userData.name}`,
        token: "mock-jwt-token-" + Date.now()
      }
    }
  }
  
  return {
    success: false,
    message: "Registration failed. Please check your information."
  }
}

// Mock Cart API
export const getCartItems = async () => {
  await new Promise(resolve => setTimeout(resolve, 300))
  // Return first 3 products as cart items for demo
  return productsData.slice(0, 3).map(product => ({
    ...product,
    quantity: Math.floor(Math.random() * 3) + 1
  }))
}

// Mock Order API
export const createOrder = async (orderData) => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  return {
    success: true,
    orderId: `ORD-${Date.now()}`,
    message: "Order placed successfully!",
    estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days from now
  }
}

// Mock Reviews API
export const getProductReviews = async (productId) => {
  await new Promise(resolve => setTimeout(resolve, 400))
  
  const mockReviews = [
    {
      id: 1,
      user: "Alex Johnson",
      rating: 5,
      comment: "Excellent product! Highly recommended.",
      date: "2024-01-15"
    },
    {
      id: 2,
      user: "Sarah Miller",
      rating: 4,
      comment: "Good quality, fast shipping.",
      date: "2024-01-10"
    },
    {
      id: 3,
      user: "Mike Wilson",
      rating: 4,
      comment: "Works as expected. Happy with my purchase.",
      date: "2024-01-05"
    }
  ]
  
  return mockReviews
}
