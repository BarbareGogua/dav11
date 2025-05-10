const BASE_URL = 'https://dummyjson.com';

export const api = { 
  getAllProducts: async (limit = 30, skip = 0) => {
    try {
      const response = await fetch(`${BASE_URL}/products?limit=${limit}&skip=${skip}`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching products:', error);
      return { products: [], total: 0 };
    }
  },

 
  getProductById: async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/products/${id}`);
      return await response.json();
    } catch (error) {
      console.error(`Error fetching product with id ${id}:`, error);
      return null;
    }
  },

  
  getAllCategories: async () => {
    try {
      const response = await fetch(`${BASE_URL}/products/categories`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
  },

  
  getProductsByCategory: async (category) => {
    try {
      const response = await fetch(`${BASE_URL}/products/category/${category}`);
      return await response.json();
    } catch (error) {
      console.error(`Error fetching products for category ${category}:`, error);
      return { products: [], total: 0 };
    }
  },

 
  searchProducts: async (query) => {
    try {
      const response = await fetch(`${BASE_URL}/products/search?q=${query}`);
      return await response.json();
    } catch (error) {
      console.error(`Error searching products with query "${query}":`, error);
      return { products: [], total: 0 };
    }
  }
};