import type { Product } from "../../core/domain/Product";
import type { ApiProduct } from "../api/product.dto";

/**
 * Adaptador
 * @param apiProduct 
 * @returns 
 */

export const productMapper = (apiProduct: ApiProduct): Product => {
      return {
            id: apiProduct.id,
            title: apiProduct.title,
            description: apiProduct.description,
            category: apiProduct.category,
            price: apiProduct.price,
            stock: apiProduct.stock,
            discount: apiProduct.discountPercentage, 
            score: apiProduct.rating,                 
            brand: "Generic",                         
            status: apiProduct.stock > 0 ? "In Stock" : "Out of Stock",
            allImages: apiProduct.images,
            cardImage: apiProduct.thumbnail           
      };
}