import React from 'react';
import { Link } from "react-router-dom";
import "./Brands.css";

export default function Brands() {
  const brands = [
    { id: 1, img: "IMG-20251216-WA0040.jpg", name: "GUCCI" },
    { id: 2, img: "IMG-20251216-WA0039.jpg", name: "CHANEL" },
    { id: 3, img: "IMG-20251216-WA0041.jpg", name: "DIOR" },
    { id: 4, img: "IMG-20251216-WA0038.jpg", name: "CHANEL" },
    { id: 5, img: "IMG-20251216-WA0056.jpg", name: "LOUIS VUITTON" },
    { id: 6, img: "IMG-20251216-WA0045.jpg", name: "LOUIS VUITTON" },
    { id: 7, img: "IMG-20251216-WA0044.jpg", name: "VICTORIAS SECRET" },
    { id: 8, img: "IMG-20251216-WA0043.jpg", name: "R" },
    { id: 9, img: "IMG-20251216-WA0042.jpg", name: "Zara" },
    { id: 10, img: "IMG-20251216-WA0060.jpg", name: "MARC JACOBS" },
    { id: 11, img: "IMG-20251216-WA0063.jpg", name: "PRADA" },
    { id: 12, img: "IMG-20251216-WA0049.jpg", name: "CHANEL" },
    { id: 13, img: "IMG-20251216-WA0050.jpg", name: "VUITTON" },
    { id: 14, img: "IMG-20251216-WA0037.jpg", name: "TF" },
    { id: 15, img: "IMG-20251216-WA0051.jpg", name: "Chloe" },
     { id: 9, img: "IMG-20251216-WA0042.jpg", name: "Zara" }
  ];

  return (
    <div className="brands-page">
      <h1 className="brands-title">OUR BRANDS</h1>
      <div className="brands-container">
        {brands.map((brand) => (
          <Link 
            to={`/brands/${brand.id}`} 
            key={brand.id}
            className="brand-card-link"
          >
            <div className="brand-card">
              <div className="brand-image-container">
                <img 
                  src={`/images/${brand.img}`} 
                  alt={brand.name} 
                  className="brand-image"
                />
              </div>
              <div className="brand-name">{brand.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}