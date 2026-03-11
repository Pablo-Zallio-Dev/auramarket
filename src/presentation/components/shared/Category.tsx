import type { Categories } from "../../../core/domain/Category"
import { useProductStore } from "../../store/useProductStore"
import Button from "./Button"



const Category = ( {title}:  Categories ) => {

const loadProductsByCategory = useProductStore((state) => state.loadProductsByCategory)




  return (
    <>
    
    <Button text={title} variant="buttonFilter" onClick={() => loadProductsByCategory(title)} />
    </>
  )
}

export default Category