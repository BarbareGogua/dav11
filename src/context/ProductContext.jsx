import { createContext, useState, useEffect, useContext } from 'react';
import { api } from '../api/api'; 



const ProductContext = createContext();


export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [totalProducts, setTotalProducts] = useState(0);

  
  
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await api.getAllCategories();
        setCategories(categoriesData);
      } catch (err) {
        setError('კატეგორიების ჩატვირთვა ვერ მოხერხდა');
        console.error(err);
      }
    };

    fetchCategories();
  }, []);

  
  
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        let data;

        if (searchQuery) {
          
            
          data = await api.searchProducts(searchQuery);
        } else if (activeCategory) {
         
            
          data = await api.getProductsByCategory(activeCategory);
        } else {
          
            
          data = await api.getAllProducts();
        }

        setProducts(data.products);
        setTotalProducts(data.total);
        setLoading(false);
      } catch (err) {
        setError('პროდუქტების ჩატვირთვა ვერ მოხერხდა');
        setLoading(false);
        console.error(err);
      }
    };

    fetchProducts();
  }, [activeCategory, searchQuery]);

  
  



  const value = {
    products,
    categories,
    loading,
    error,
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery,
    totalProducts
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};





export const useProducts = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProducts უნდა გამოვიყენოთ ProductProvider-ის შიგნით');
  }
  return context;
};