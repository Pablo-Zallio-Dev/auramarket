import { Heart, ShoppingCart, Sun } from 'lucide-react';


const IconNav = () => {
  return (
      <section className=" flex gap-4 items-center ">
            <Sun size={20} />
            <Heart size={16} />
            <ShoppingCart size={16} />
      </section>

  )
}

export default IconNav