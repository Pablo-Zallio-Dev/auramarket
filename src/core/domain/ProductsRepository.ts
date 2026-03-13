import type { Categories } from "./Category";
import type { Product } from "./Product";

export interface ProductsRepository {
      getProducts(): Promise<Product[]>
      getCategories(): Promise <Categories[]>
      getProductsByCategory(category: string): Promise <Product[]>
}