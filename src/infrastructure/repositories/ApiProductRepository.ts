import api from "../api/api.instance"
import type { ApiProduct } from "../api/product.dto"
import { productMapper } from "../mappers/product.mapper"

const getProducts = async() => {
      const response = await api.get('products')
      const apiProducts = response.data.products

      return apiProducts.map((apiProduct: ApiProduct) => productMapper(apiProduct))
}

export  default getProducts

