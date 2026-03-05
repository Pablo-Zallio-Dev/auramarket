import { create } from "zustand";
import type { Product } from "../../core/domain/Product";
import getProducts from "../../infrastructure/repositories/ApiProductRepository";


interface ProductState{
      products: Product[]
      isLoading: boolean,
      error: string | null,
      loadProducts: () => Promise<void>
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
      }

}))