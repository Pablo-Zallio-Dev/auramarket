import { SearchAlert } from "lucide-react"

const SearchProductsEmpty = () => {
  return (
    <article className=" flex justify-center items-center w-full h-100 ">
      <section className=" flex flex-col items-center gap-12">
            <h2 className=" text-text-card text-2xl font-bold ">No se ha encontrado ningun producto</h2>
            <SearchAlert size={36} color="var(--text-card)" />
      </section>
    </article>
  )
}

export default SearchProductsEmpty