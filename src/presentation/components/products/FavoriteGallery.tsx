import { Trash } from "lucide-react"
import { useFavoriteProduct } from "../../store/useFavoriteStore"
import ProductFavoriteEmpty from "./ProductFavoriteEmpty"
import { useEffect } from "react"
import Button from "../shared/Button"

const FavoriteGallery = () => {

      const favoriteProducts = useFavoriteProduct((state) => state.favoritesProduct)
      const removeProduct = useFavoriteProduct((state) => state.toggleFavoriteProduct)
      const isOpen = useFavoriteProduct((state) => state.isOpen)
      const removeAll = useFavoriteProduct((state) => state.removeFavriteAllProducts)

      useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }
  
  // Limpieza al desmontar el componente
  return () => { document.body.style.overflow = 'unset'; };
}, [isOpen]);

      if(favoriteProducts.length === 0 ) return (
            <>
            <ProductFavoriteEmpty />
            </>
      )

      

  return (
    <section className="  flex flex-col justify-between gap-8  w-full h-screen overflow-y-auto no-scrollbar ">
      {
            favoriteProducts.map((product) => (
                  <>
                  <section className=" flex justify-between gap-8 group  ">
                        <div className=" flex gap-4 ">
                        <div className=" max-w-12 md:max-w-18 border border-border-card rounded-lg bg-bg-100">
                        <img src={product.cardImage} alt="" className="  group-hover:scale-110 transition-transform duration-200 " />

                        </div>
                        <section className="  flex flex-col justify-around text-xs md:text-sm text-text-card    ">
                              <h2 className=""> {product.title} </h2>
                              <h3 className=""> {product.price} </h3>
                        </section>
                        </div>
                        <button className="  " onClick={() => removeProduct(product)}>
                              <Trash size={14} color="var(--text-card)" />
                        </button>
                  </section>
                  </>
            ))
      }
            <Button text="Vaciar Favoritos" icon={Trash} colorIcon="var(--text-opposite)" onClick={removeAll} />
    </section>
  )
}

export default FavoriteGallery