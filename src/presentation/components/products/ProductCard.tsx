import BadgeDiscount from '../shared/BadgeDiscount'
import FavoriteProduct from '../shared/FavoriteProduct'
import type { Product } from '../../../core/domain/Product'
import { ShoppingCart } from 'lucide-react'

const ProductCard = ( { product }: {product:Product} ) => {
      return (
            <article className=" w-full rounded-xl bg-bg-100 border border-border-card shadow-lg/20 overflow-hidden ">
                  <section className=" relative h-80 ">
                        <img src={product.cardImage} alt="" className=" w-full h-full object-cover " />
                        <section className=" absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-between m-4  ">
                              <section className="  flex items-center justify-between  ">
                                    {product.discount && <BadgeDiscount discount={product.discount} />}
                                    <FavoriteProduct />
                              </section>

                        </section>
                  </section>
                  <section className="flex flex-col gap-2 m-4 ">
                        <p className=" text-xs text-title-category font-bold tracking-widest uppercase "> {product.category} </p>
                        <h2 className=" text-lg text-text-card font-extrabold truncate "> {product.title} </h2>
                              <p className=" text-text-card font-extrabold">${product.price}</p>
                        <button className=" flex justify-center gap-2 text-sm w-full p-2 mt-4 text-white bg-blue-accent rounded-lg  ">
                              <ShoppingCart size={16} />
                              <p className="">Add to cart</p>
                        </button>
                  </section>

            </article>
      )
}

export default ProductCard