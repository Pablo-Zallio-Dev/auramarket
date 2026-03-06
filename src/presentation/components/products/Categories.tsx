import { useEffect } from "react"
import { useProductCategory } from "../../store/useProductCategory"
import Category from "../shared/Category"

const Categories = () => {

      const categories = useProductCategory((state) => state.categories)
      const loadCategory = useProductCategory((state) => state.loadCategories)

      useEffect(() => {
        loadCategory()
      }, [loadCategory])
      


  return (
    <article className=" hidden lg:flex flex-wrap justify-center gap-8 py-16 px-12  " >

      {
            categories.map((category) => (
                  <Category title={category.title} category={""} urlApi={""} />

            ))
      }



    </article>
  )
}

export default Categories