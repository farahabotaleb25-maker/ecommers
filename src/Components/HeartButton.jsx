import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState } from "react";

export default function HeartButton() {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };

  return (
    <button
      onClick={handleClick}
      className={`p-2 rounded-full transition-all duration-300 ${
        liked 
          ? 'bg-red-50 text-red-500' 
          : 'bg-gray-100 text-gray-600 hover:text-red-400'
      }`}
      aria-label={liked ? "Remove from favorites" : "Add to favorites"}
    >
      {liked ? (
        <AiFillHeart className="text-xl" />
      ) : (
        <AiOutlineHeart className="text-xl" />
      )}
    </button>
  );
}