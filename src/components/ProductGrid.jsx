import React from 'react';
import ProductCard from './ProductCard';
import { useProducts } from '../context/ProductContext';

const ProductGrid = () => {
  const { products, loading, error, activeCategory, searchQuery, totalProducts } = useProducts();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-xl">იტვირთება...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center p-4">
        {error}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center p-4">
        {searchQuery
          ? `ძიების შედეგი "${searchQuery}" არ მოიძებნა`
          : activeCategory
            ? `კატეგორიაში "${activeCategory}" პროდუქტები არ მოიძებნა`
            : 'პროდუქტები არ მოიძებნა'}
      </div>
    );
  }

  return (
    <div>
      <div className="mb-4">
        <p className="text-gray-600">
          ნაჩვენებია {products.length} პროდუქტი {totalProducts}-დან
          {activeCategory ? ` კატეგორიაში "${activeCategory}"` : ''}
          {searchQuery ? ` ძიებისათვის "${searchQuery}"` : ''}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;