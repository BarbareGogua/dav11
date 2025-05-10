import React from 'react';
import { useProducts } from '../context/ProductContext';

const CategoryList = () => {
  const { categories, activeCategory, setActiveCategory } = useProducts();

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-3 text-gray-800">კატეგორიები</h2>
      <div className="flex flex-wrap gap-2">
        <button
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeCategory === null ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          onClick={() => setActiveCategory(null)}
        >
          ყველა
        </button>
        {categories && categories.map(category => {
          
          if (typeof category === 'string' && category.length > 0) {
            return (
              <button
                key={category}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeCategory === category ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                onClick={() => setActiveCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            );
          }
          return null; 
        })}
      </div>
    </div>
  );
};

export default CategoryList;