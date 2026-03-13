import { useMemo } from "react"
import { useProductStore } from "../presentation/store/useProductStore"

const useSearchProducts = () => {

            const searchQuery = useProductStore((state) => state.searchQuery)
            const products = useProductStore((state) => state.products)

            const searchProducts = useMemo(() => {
                  if (!searchQuery.trim()) return products;

                  const lowerQuery = searchQuery.toLowerCase();

                  return products.filter((product) => product.title.toLowerCase().includes(lowerQuery))

            },[products, searchQuery])

            return {
                  searchProducts,
                  hasResult: searchProducts.length > 0,
                  searchQuery
            }
            
}

export default useSearchProducts;