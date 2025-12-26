import "./Categories.css";
import { Link } from "react-router-dom";

export default function CategoriesPage() {
  const categories = [
    { id: 1, img: "شنطه 3.jpeg", name: "Bags", path: "/products?category=Bags" },
    { id: 2, img: "تنزيل (12).jpeg", name: "Shoes", path: "/products?category=Shoes" },
    { id: 3, img: "برفان 2.jpeg", name: "Perfumes", path: "/products?category=Perfumes" },
    { id: 4, img: "جيبه 1.jpeg", name: "Skirts", path: "/products?category=Skirts" },
    { id: 5, img: "تيشيرت 2.jpeg", name: "T-shirts", path: "/products?category=T-shirts" },
    { id: 6, img: "بنطلون 3.jpeg", name: "Pants", path: "/products?category=Pants" },
    { id: 7, img: "شال 3.jpeg", name: "Shawls", path: "/products?category=Shawls" },
    { id: 8, img: "كروب توب 2.jpeg", name: "Crop Tops", path: "/products?category=Crop%20Tops" },
  ];

  return (
    <div className="categories-container">
      {/* Header */}
     

      {/* Categories Grid */}
      <div className="categories">
        {categories.map((category) => (
          <Link 
            to={category.path} 
            key={category.id}
            className="category-card"
          >
            <img 
              src={`/images/${category.img}`} 
              alt={category.name} 
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/250x200?text=No+Image";
              }}
            />
            <div className="category-name">{category.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}