import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "../../core/domain/Product";

interface FavoriteState {
      favoritesProduct: Product[],
      toggleFavoriteProduct: (product: Product) => void,
      removeFavriteAllProducts: () => void,
      isOpen: boolean
      setOpenFavoriteModal: () => void;
}

export const useFavoriteProduct = create<FavoriteState>()(
      persist(
            (set) => ({
                  favoritesProduct: [],
                  toggleFavoriteProduct: (product) => set((state) => {
                        const isFavorite = state.favoritesProduct.some(item => item.id === product.id)
                        console.log("Hola")
                        const newFavorites = isFavorite
                              ? state.favoritesProduct.filter(prod => prod.id !== product.id)
                              : [...state.favoritesProduct, product]

                        return { favoritesProduct: newFavorites }

                  }),
                  removeFavriteAllProducts() {
                        set({ favoritesProduct: [] })
                  },
                  isOpen: false,
                  setOpenFavoriteModal() {
                        set((state) => ({ isOpen: !state.isOpen }));
                  },
            }),
            {
                  name: 'favorite-storage',
                  partialize: (state) => ({ favoritesProduct: state.favoritesProduct })
            }

      )
)     