import { useEffect } from "react"
import { useProductStore } from "../../store/useProductStore"
import ProductCard from "./ProductCard"
import SearchProductsEmpty from "./SearchProductsEmpty"


const ProductGrid = () => {

      const products = useProductStore((state) => state.products)
      const loadProducts = useProductStore((state) => state.loadProducts)
      const isLoading = useProductStore((state) => state.isLoading)
      const error = useProductStore((state) => state.error)

      const searchQuery = useProductStore((state) => state.searchQuery)

      const filteredProducts = products.filter((product) =>
  product.title.toLowerCase().includes(searchQuery.toLowerCase())
);



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

      // ProductGrid.tsx

      if (error) return (
            <SearchProductsEmpty />
      );

      if(filteredProducts.length === 0) return(
           <SearchProductsEmpty />
      )

      return (


            <section className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 py-20 px-4 2xl:px-56 bg-bg-200 ">
                  {
                        filteredProducts.map((product) => (
                              <ProductCard key={product.id} product={product} />
                        ))
                  }
            </section>

      )
}

export default ProductGrid