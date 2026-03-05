import {  Heart, ShoppingCart, Sun } from 'lucide-react';
import IconWithBadge from './IconWithBadge';


const IconNav = () => {
  return (
      <section className=" flex gap-4 items-center ">
            <Sun size={20} color='var(--icon-color)' />
            <IconWithBadge icon={Heart}  iconColor='var(--icon-color)' quantity={5} />
            <IconWithBadge icon={ShoppingCart}  badgeColor='bg-orange-accent' iconColor='var(--icon-color)' quantity={3}/>
      </section>

  )
}

export default IconNav

