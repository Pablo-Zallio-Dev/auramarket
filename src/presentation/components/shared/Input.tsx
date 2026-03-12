import type { LucideIcon } from "lucide-react"
import { useProductStore } from "../../store/useProductStore";

interface InputProps {
      iconSearch: LucideIcon;
      iconClose?: LucideIcon;
      iconColor?: string;
      placeholder?: string;
      type?: string
}


const Input = ({iconSearch: IconSearch,  iconClose: IconClose, iconColor, type, placeholder}: InputProps) => {

      const setSearchQuery = useProductStore((state) => state.setSearchQuery)
      const searchQuery = useProductStore((state) => state.searchQuery)
      const cleanSearchQuery = useProductStore((state) => state.cleanSearchQuery)

      console.log(searchQuery)

  return (
    <article className=" absolute -bottom-6 flex gap-2 w-full max-w-2xl p-3 bg-bg-input text-text-card rounded-full shadow-md/20 ">
      <IconSearch color={iconColor}/>
      <input type={type} placeholder={placeholder} className="text-sm focus:outline-none w-full" value={searchQuery} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)} />
      {
            IconClose && <IconClose color={iconColor} onClick={cleanSearchQuery} />
      }
    </article>
  )
}

export default Input