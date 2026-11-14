import axios from 'axios';

const API_URL = 'https://dummyjson.com';

export const getProducts = async () => {
  const response = await axios.get(`${API_URL}/products?limit=30`);
  return response.data.products;
};

export const searchProducts = async (query: string) => {
  const response = await axios.get(
    `${API_URL}/products/search?q=${encodeURIComponent(query)}`
  );
  return response.data.products;
};

export const getCategories = async () => {
  const response = await axios.get(`${API_URL}/products/category-list`);
  return response.data;
};

export const getProductsByCategory = async (category: string) => {
  const response = await axios.get(
    `${API_URL}/products/category/${encodeURIComponent(category)}`
  );
  return response.data.products;
};