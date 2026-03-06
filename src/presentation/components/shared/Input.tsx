import type { LucideIcon } from "lucide-react"

interface InputProps {
      iconSearch: LucideIcon;
      iconClose?: LucideIcon;
      iconColor?: string;
      placeholder?: string;
      type?: string
}


const Input = ({iconSearch: IconSearch,  iconClose: IconClose, iconColor, type, placeholder}: InputProps) => {
  return (
    <article className=" absolute -bottom-6 flex gap-2 w-full max-w-2xl p-3 bg-bg-input text-text-card rounded-full shadow-md/20 ">
      <IconSearch color={iconColor}/>
      <input type={type} placeholder={placeholder} className="text-sm focus:outline-none w-full"/>
      {
            IconClose && <IconClose color={iconColor} />
      }
    </article>
  )
}

export default Input