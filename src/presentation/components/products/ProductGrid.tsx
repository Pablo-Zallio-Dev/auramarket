import { useEffect } from "react"
import { useProductStore } from "../../store/useProductStore"
import ProductCard from "./ProductCard"
import SearchProductsEmpty from "./SearchProductsEmpty"
import useSearchProducts from "../../../hooks/useSearchProduct"


const ProductGrid = () => {

      const loadProducts = useProductStore((state) => state.loadProducts)
      const isLoading = useProductStore((state) => state.isLoading)

      const { hasResult, searchProducts } = useSearchProducts()



      useEffect(() => {
            loadProducts();
      }, [loadProducts]);

      if (isLoading) return (
            <>
                  <section className=" flex justify-center items-center h-screen ">
                        <p className=" text-2xl font-extrabold ">Trayendo Productos...</p>
                  </section>
            </>
      )



      if (!hasResult) return (
            <SearchProductsEmpty />
      )

      return (


            <section className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 py-20 px-4 2xl:px-56 bg-bg-200 ">
                  {
                        searchProducts.map((product) => (
                              <ProductCard key={product.id} product={product} />
                        ))
                  }
            </section>

      )
}

export default ProductGrid