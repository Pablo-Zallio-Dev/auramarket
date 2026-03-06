import { CircleX, Search } from "lucide-react"
import Input from "./Input"

const SearchInput = () => {
  return (
    <>
    <section className="  flex justify-center mx-5  ">
      <Input iconSearch={Search} iconColor="var(--icon-color)" type="text" placeholder="Search products" iconClose={CircleX} />
    </section>
    </>
  )
}

export default SearchInput


