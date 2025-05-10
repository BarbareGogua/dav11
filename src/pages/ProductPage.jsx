import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductDetails from '../components/ProductDetails';
import { api } from '../api/api';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const productData = await api.getProductById(id);
        if (!productData || productData.message) {
          setError('პროდუქტი ვერ მოიძებნა');
          setProduct(null);
        } else {
          setProduct(productData);
          setError(null);
        }
      } catch (err) {
        setError('პროდუქტის ჩატვირთვა ვერ მოხერხდა');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleGoBack = () => {
    navigate(-1);
  };

  if (loading) {
    return <div className="text-center py-10 text-xl">იტვირთება...</div>;
  }

  if (error) {
    return (
      <div className="text-center py-10 text-red-500">
        <p>{error}</p>
        <button onClick={handleGoBack} className="mt-4 text-blue-600 underline">უკან დაბრუნება</button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <button onClick={handleGoBack} className="mb-4 text-blue-600 hover:underline">← უკან</button>
      {product && <ProductDetails product={product} />}
    </div>
  );
};

export default ProductPage;
