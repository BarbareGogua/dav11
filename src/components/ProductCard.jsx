import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="block">
      <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white">
        <div className="h-48 overflow-hidden bg-gray-100 p-4 flex items-center justify-center">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2 text-gray-800">{product.title}</h3>
          <p className="text-gray-600 mb-2 line-clamp-2">{product.description}</p>
          <div className="flex justify-between items-center mt-3">
            <div>
              <span className="text-xl font-bold text-blue-700">${product.price}</span>
              {product.discountPercentage > 0 && (
                <span className="ml-2 text-sm text-green-600">
                  -{product.discountPercentage}%
                </span>
              )}
            </div>
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm font-semibold">
              {product.rating}★
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;