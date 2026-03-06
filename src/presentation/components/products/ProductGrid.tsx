import { useEffect } from "react"
import { useProductStore } from "../../store/useProductStore"
import ProductCard from "./ProductCard"


const ProductGrid = () => {

      const products = useProductStore((state) => state.products)
      const loadProducts = useProductStore((state) => state.loadProducts)
      const isLoading = useProductStore((state) => state.isLoading)
      const error = useProductStore((state) => state.error)

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
            <section className="flex flex-col items-center justify-center min-h-100 w-full p-10 text-center">
                  <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                        <h3 className="text-red-800 font-bold text-lg">¡Vaya! Algo salió mal</h3>
                        <p className="text-red-600 mt-2 mb-6">{error}</p>

                        <button
                              onClick={() => loadProducts()}
                              className="px-6 py-2 bg-aura-primary text-text-card rounded-full hover:bg-blue-700 transition-colors"
                        >
                              Reintentar carga
                        </button>
                  </div>
            </section>
      );

      return (


            <section className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 py-20 2xl:px-56 bg-bg-200 ">
                  {
                        products.map((product) => (
                              <ProductCard key={product.id} product={product} />
                        ))
                  }
            </section>

      )
}

export default ProductGrid