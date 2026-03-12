import { CircleX } from "lucide-react"
import { useFavoriteProduct } from "../../store/useFavoriteStore"
import FavoriteGallery from "./FavoriteGallery"

const FavoriteModal = () => {

      const isOpenModal = useFavoriteProduct((state) => state.isOpen)
      const closeModal = useFavoriteProduct((state) => state.setOpenFavoriteModal)







      if (isOpenModal) return (
            <section className=" fixed top-0 left-0 flex justify-end  w-full h-screen z-50 bg-bg-200/60 " onClick={closeModal}>
                  <section className=" flex flex-col items-center gap-12 w-full h-screen sm:w-120 p-16 bg-bg-200" onClick={(e) => e.stopPropagation()}>
                        <section className=" flex justify-between w-full ">
                              <h2 className="text-xl font-black text-text-card ">Favoritos</h2>
                              <button><CircleX size={20} color='var(--text-card)' onClick={closeModal} /></button>
                        </section>
                        <FavoriteGallery />

                  </section>
            </section>
      )
}

export default FavoriteModal