import api from "../api/api.instance"
import type { ApiCategories } from "../api/category.dto"
import type { ApiProduct } from "../api/product.dto"
import { categoriesMapper } from "../mappers/category.mapper"
import { productMapper } from "../mappers/product.mapper"

export const getProducts = async() => {
      const response = await api.get('products')
      const apiProducts = response.data.products

      return apiProducts.map((apiProduct: ApiProduct) => productMapper(apiProduct))
}

export const getCategories = async() => {
      const response = await api.get('products/categories')
      const apiCategories = response.data

      return apiCategories.map((apiCategories: ApiCategories) => categoriesMapper(apiCategories))
}