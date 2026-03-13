import { create } from "zustand"
import { ApiProductRepository } from "../../infrastructure/repositories/ApiProductRepository"
import type { Categories } from "../../core/domain/Category"
import type { ProductsRepository } from "../../core/domain/ProductsRepository";

const repository: ProductsRepository = ApiProductRepository;

interface CategoriesState{
      categories: Categories[],
      loadCategories: () => Promise<void>
 
}

export const useProductCategory = create<CategoriesState>((set) => ({
      categories: [],
      loadCategories: async() => {
            try {
                  const data = await repository.getCategories()
                  set({categories: data})
            } catch (error) {
                  console.log(error)
            }
      },
      
}))