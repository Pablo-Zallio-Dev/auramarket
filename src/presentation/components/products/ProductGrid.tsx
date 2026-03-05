import { useEffect } from "react"
import { useProductStore } from "../../store/useProductStore"
import ProductCard from "./ProductCard"

const ProductGrid = () => {

      const products = useProductStore((state) => state.products)
      const loadProducts = useProductStore((state) => state.loadProducts)

      //const isLoading = useProductStore((state) => state.isLoading)
      //const error = useProductStore((state) => state.error)


      useEffect(() => {
    loadProducts();
  }, [loadProducts]);
  

      console.log(products)
  return (


      <section className=" bg-bg-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 justify-items-center   p-4 lg:p-10 gap-8 lg:gap-6 ">
            {
                  products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                  ))
            }
      </section>
    
  )
}

export default ProductGrid