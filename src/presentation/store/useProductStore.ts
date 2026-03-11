import { create } from "zustand";
import type { Product } from "../../core/domain/Product";
import {getProducts, getProductsForCategories} from "../../infrastructure/repositories/ApiProductRepository";


interface ProductState{
      products: Product[]
      isLoading: boolean,
      error: string | null,
      loadProducts: () => Promise<void>
      loadProductsByCategory: (category: string) => Promise<void>
}

export const useProductStore = create<ProductState>((set) => ({

      products: [],
      isLoading: false,
      error: null,
      loadProducts: async() =>{
            try {
                  set({ isLoading: true })
                  const data = await getProducts()

                  set({ products: data, isLoading: false})
            } catch  {
                  set({ error: 'Hay un error', isLoading: false })
            }
      },
      loadProductsByCategory: async(category: string) => {
            try {
                  set({ isLoading: true })
                  const data = await getProductsForCategories(category)

                  if(data.length === 0 ){
                        console.log("Entro al if")
                        set({ error: 'No hay productos', isLoading: false })
                        return
                  }

                  set({ error: null, products: data, isLoading: false })
            } catch {
                  
                  set({ error: 'No hay productos', isLoading: false })
            }
      }

}))