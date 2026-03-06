import type { Categories } from "../../../core/domain/Category"



const Category = ( {title}:  Categories ) => {
  return (
    <>
    <p className=" text-sm text-text-card "> {title} </p>
    </>
  )
}

export default Category