import type { ProductsRepository } from "../../core/domain/ProductsRepository"
import api from "../api/api.instance"

import { categoriesMapper } from "../mappers/category.mapper"
import { productMapper } from "../mappers/product.mapper"



export const ApiProductRepository: ProductsRepository = {
  
  async getProducts() {
    const response = await api.get('products');
    return response.data.products.map(productMapper);
  },

  async getCategories() {
    const response = await api.get('products/categories');
    return response.data.map(categoriesMapper);
  },

  async getProductsByCategory(category: string) {
    const response = await api.get(`products/category/${category}`);
    return response.data.products.map(productMapper);
  }
};