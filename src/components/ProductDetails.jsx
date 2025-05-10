import React from 'react';

const ProductDetails = ({ product }) => {
  if (!product) {
    return <div>პროდუქტის ინფორმაცია ვერ მოიძებნა</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="md:flex">
        <div className="md:w-1/2 p-6">
          <div className="h-96 overflow-hidden rounded-lg shadow-md">
            <img
              src={product.images[0] || product.thumbnail} 
              alt={product.title}
              className="w-full h-full object-contain"
            />
          </div>
          {}
        </div>

        <div className="md:w-1/2 p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">{product.title}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="flex items-center mb-4">
            <span className="text-xl font-bold text-blue-700">${product.price}</span>
            {product.discountPercentage > 0 && (
              <span className="ml-2 text-sm text-green-600">
                (-{product.discountPercentage}%)
              </span>
            )}
          </div>
          <div className="mb-4">
            <span className="text-gray-700 font-semibold">ბრენდი:</span> {product.brand}
          </div>
          <div className="mb-4">
            <span className="text-gray-700 font-semibold">კატეგორია:</span> {product.category}
          </div>
          <div className="flex items-center mb-4">
            <span className="text-gray-700 font-semibold">რეიტინგი:</span>
            <span className="ml-1 bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm font-semibold">
              {product.rating}★
            </span>
          </div>
          <div className="mb-4">
            <span className="text-gray-700 font-semibold">მარაგშია:</span> {product.stock}
          </div>
          <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus-ring-blue-500">
            კალათაში დამატება
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;