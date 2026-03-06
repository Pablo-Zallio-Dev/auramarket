import { create } from "zustand"
import { getCategories } from "../../infrastructure/repositories/ApiProductRepository"
import type { Categories } from "../../core/domain/Category"

interface CategoriesState{
      categories: Categories[]
      loadCategories: () => Promise<void>
}

export const useProductCategory = create<CategoriesState>((set) => ({
      categories: [],
      loadCategories: async() => {
            try {
                  const data = await getCategories()
                  set({categories: data})
            } catch (error) {
                  console.log(error)
            }
      }
}))