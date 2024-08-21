import React, { useState } from "react";
import { useStateValue } from "@/context";




const Products = ({ data, title }) => {
  const [ProductsLike, setProductsLike] = useState(new Set());
  const [__, dispatch ] = useStateValue()

  const handleLike = (productId) => {
    setProductsLike((prevLiked) => {
      const likedBlock = new Set(prevLiked);
      if (likedBlock.has(productId)) {
        likedBlock.delete(productId);
      } else {
        likedBlock.add(productId);
      }
      return likedBlock;
    });
  };
  
  const isLiked = ProductsLike.has();
  let items = data?.map((product) => (
    
    <div className="border p-3" key={product.id}>
      <div className="relative w-full h-60 bg-gray-200">
        <img className="w-full h-full object-contain" src={product.images[0]} alt="Photo" />
        <div className="absolute top-2 right-2">
            <button
              className={`p-2 rounded-full shadow-lg focus:outline-none ${
                isLiked ? "bg-red-500 text-white" : "bg-white"
              }`}
              onClick={
                (() => handleLike(product.id),
                () => dispatch({ type: "ADD_TO_WISHLIST", payload: product }))
              }
            >
              <svg
                className={`w-6 h-6 ${
                  isLiked ? "text-white" : "text-gray-600"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                />
              </svg>
            </button>
          </div>
      </div>
      <p>{product.title}</p>
      <strong>{product.price}</strong>
    </div>
  ));
  return (
    <div className="container mx-auto">
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <div className="grid grid-cols-4 gap-2">{items}</div>
    </div>
  );
};

export default Products;
