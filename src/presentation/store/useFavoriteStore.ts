import { create } from "zustand";
import type { Product } from "../../core/domain/Product";

interface FavoriteState {
      favoritesProduct: Product[],
      toggleFavoriteProduct: (product: Product) => void,
      removeFavriteAllProducts: () => void,
}

export const useFavoriteProduct = create<FavoriteState>((set) => ({
      favoritesProduct: [],
      toggleFavoriteProduct: (product) => set((state) => {
            const isFavorite = state.favoritesProduct.some(item => item.id === product.id ) 

            const newFavorites = 

      }),
      removeFavriteAllProducts() {
            
      },
}))