import iconShoppingCart from '../../../assets/icons/icon_shopping_cart.svg'
import BadgeDiscount from '../shared/BadgeDiscount'
import FavoriteProduct from '../shared/FavoriteProduct'
import type { Product } from '../../../core/domain/Product'

const ProductCard = ( { product }: Product ) => {
      return (
            <article className=" w-full sm:w-[288px] rounded-xl bg-bg-100 border border-border-card shadow-lg/20 overflow-hidden ">
                  <section className=" relative h-80 border">
                        <img src={image} alt="" className=" w-full h-full object-cover " />
                        <section className=" absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-between m-4  ">
                              <section className="  flex items-center justify-between  ">
                                    <BadgeDiscount />
                                    <FavoriteProduct />
                              </section>

                        </section>
                  </section>
                  <section className="flex flex-col gap-2 m-4 ">
                        <p className=" text-xs text-title-category font-bold tracking-widest uppercase ">electronics</p>
                        <h2 className=" text-lg text-text-card font-extrabold truncate ">Quantum Sound Headphones</h2>
                        <div className=" flex gap-2 text-text-card ">
                              <p className="font-extrabold">$299</p>
                              <p className=" line-through ">$199</p>
                        </div>
                        <button className=" flex justify-center gap-2 text-sm w-full p-2 mt-4 text-white bg-blue-accent rounded-lg  ">
                              <img src={iconShoppingCart} alt="" />
                              <p className="">Add to cart</p>
                        </button>
                  </section>

            </article>
      )
}

export default ProductCard