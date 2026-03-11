import { useEffect } from "react"
import { useProductCategory } from "../../store/useProductCategory"
import Category from "../shared/Category"
import Button from "../shared/Button"
import { useProductStore } from "../../store/useProductStore"

const Categories = () => {

      const categories = useProductCategory((state) => state.categories)
      const  loadProducts = useProductStore((state) => state.loadProducts )
      const loadCategory = useProductCategory((state) => state.loadCategories)

      useEffect(() => {
        loadCategory()
      }, [loadCategory])
      

  return (
    <article className=" hidden lg:flex  flex-wrap justify-center gap-4 py-16 px-12 xl:px-40  " >
      <section className=" w-16 ">
      <Button text="All" variant="blue" onClick={loadProducts} />


      </section>
      {
            categories.map((category) => (
                  <Category title={category.title} category={category.category} urlApi={category.urlApi} />
                  
            ))
      }



    </article>
  )
}

export default Categories