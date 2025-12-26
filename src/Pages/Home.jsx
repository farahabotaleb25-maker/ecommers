import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate("/products");
  };

  const handleBrowseCategories = () => {
    navigate("/categories");
  };

  return (
    <div className="text-center py-20">
      <h1 className="text-5xl font-bold mb-6">Welcome to ShopMart</h1>

      <p className="text-gray-600 max-w-2xl mx-auto mb-10">
        Discover the latest technology, fashion, and lifestyle products. 
        Quality guaranteed with fast shipping and excellent customer service.
      </p>

      <div className="flex items-center justify-center gap-4">
        <button 
          onClick={handleShopNow}
          className="bg-black text-white px-6 py-3 rounded-lg hover:opacity-80 transition"
        >
          Shop Now
        </button>

        <button 
          onClick={handleBrowseCategories}
          className="border border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition"
        >
          Browse Categories
        </button>
      </div>
    </div>
  );
}