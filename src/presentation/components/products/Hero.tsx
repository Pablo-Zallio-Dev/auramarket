import Button from "../shared/Button"
import image from '../../../assets/images/image.webp'

const Hero = () => {

    return (
                  <article className=" flex flex-col justify-center items-center  w-full h-screen  md:h-180 md:px-6 xl ">
                        <section className="grid grid-cols-1 md:grid-cols-2 justify-items-center  gap-10  items-center max-w-350 ">
                              <section className=" flex flex-col px-4 gap-6 ">
                                    <h1 className=" font-extrabold text-text-card text-5xl lg:text-7xl text-center md:text-start "> Redefining Modern <span className=" text-blue-accent "> E-commerce </span>  </h1>
                                    <p className=" text-text-card md:text-lg text-center md:text-start ">Discover a curated selection of premium electronics, artisanal fragrances, and everyday essentials designed for the industrial minimalist.</p>
                                    <section className=" grid grid-cols-1 sm:grid-cols-2 gap-4 ">
                                          <Button text="Shop Seasonal offers" />
                                          <Button text="Explore Collections" variant="orange" />
                                    </section>
                              </section>
                              <img src={image} alt="" />
                        </section>
                  </article>
            )
}

export default Hero