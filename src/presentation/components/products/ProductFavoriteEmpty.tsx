import { Heart } from "lucide-react"
import { useFavoriteProduct } from "../../store/useFavoriteStore"
import Button from "../shared/Button"

const ProductFavoriteEmpty = () => {

      const setOpenFavoriteModal = useFavoriteProduct((state) => state.setOpenFavoriteModal)

  return (
    <section className=" flex flex-col gap-8 items-center text-center ">
      <Heart size={100} color=" var(--blue-accent)" />
      <h2 className=" text-text-card ">Tu lista de favoritos esta vacia</h2>
      <Button text="Explorar productos" onClick={setOpenFavoriteModal}/>
    </section>
  )
}

export default ProductFavoriteEmpty