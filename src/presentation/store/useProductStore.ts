import { create } from "zustand";
import type { Product } from "../../core/domain/Product";
import {ApiProductRepository} from "../../infrastructure/repositories/ApiProductRepository";


const repository = ApiProductRepository;

interface ProductState{
      products: Product[],
      isLoading: boolean,
      error: boolean | null,
      loadProducts: () => Promise<void>
      loadProductsByCategory: (category: string) => Promise<void>,
      searchQuery: string,
      setSearchQuery: (value:string) => void;
      cleanSearchQuery: () => void
}

export const useProductStore = create<ProductState>((set) => ({

      products: [],
      isLoading: false,
      error: false,
      loadProducts: async() =>{
            try {
                  set({ isLoading: true })
                  const data = await repository.getProducts()

                  set({ error: false, products: data, isLoading: false})
            } catch  {
                  set({ error: true, isLoading: false })
            }
      },
      loadProductsByCategory: async(category: string) => {
            try {
                  set({ isLoading: true })
                  const data = await repository.getProductsByCategory(category)

                  if(data.length === 0 ){
                        console.log("Entro al if")
                        set({ error: true, isLoading: false })
                        return
                  }

                  set({ error: false, products: data, isLoading: false })
            } catch {
                  
                  set({ error: true, isLoading: false })
            }
      },
      searchQuery: '',
      setSearchQuery: (value) => {
            set({ searchQuery: value  })
      },
      cleanSearchQuery: () => {
            set({ searchQuery: '' })
      }

}))