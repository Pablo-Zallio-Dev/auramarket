import { useProductStore } from "../../store/useProductStore"
import Button from "../shared/Button"

const Hero = () => {

      const products = useProductStore((state) => state.products)

      const featuredProduct = products[0]

      if (!featuredProduct) {
            return (
                  <div className="w-full h-screen flex justify-center items-center bg-gray-50 animate-pulse">
                        <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl w-full gap-8 px-6">
                              <div className="space-y-4">
                                    <div className="h-12 bg-gray-200 rounded-lg w-3/4"></div>
                                    <div className="h-6 bg-gray-200 rounded-lg w-full"></div>
                                    <div className="h-10 bg-gray-200 rounded-lg w-1/2 mt-8"></div>
                              </div>
                              <div className="h-100 bg-gray-200 rounded-4-xl"></div>
                        </div>
                  </div>
            );
      }

      if (featuredProduct)
            return (
                  <article className=" flex justify-center items-center w-full  h-screen md:px-6 xl ">
                        <section className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center max-w-350 ">
                              <section className=" flex flex-col px-4 gap-6 ">
                                    <h1 className=" font-extrabold text-text-card text-5xl lg:text-7xl text-center md:text-start "> Redefining Modern <span className=" text-blue-accent "> E-commerce </span>  </h1>
                                    <p className=" text-text-card md:text-lg text-center md:text-start ">Discover a curated selection of premium electronics, artisanal fragrances, and everyday essentials designed for the industrial minimalist.</p>
                                    <section className=" grid grid-cols-1 sm:grid-cols-2 gap-4 ">
                                          <Button text="Shop Seasonal offers" />
                                          <Button text="Explore Collections" variant="orange" />
                                    </section>
                              </section>
                              <img src={featuredProduct.cardImage} alt="" />
                        </section>
                  </article>
            )
}

export default Hero