import {  Heart, Moon, ShoppingCart, Sun } from 'lucide-react';
import IconWithBadge from './IconWithBadge';
import { useThemeStore } from '../../store/useThemeStore';


const IconNav = () => {

      const theme = useThemeStore((state) => state.theme)
      const changeTheme = useThemeStore((state) => state.changeTheme)

      console.log(theme)

  return (
      <section className=" flex gap-4 md:gap-8 items-center ">
            <section className=" p-4  rounded-full hover:bg-orange-accent " onClick={changeTheme}>
            {
                  theme === 'light' 
                  ? <Moon size={20} color='var(--icon-color)'  />
                  : <Sun size={20} color='var(--icon-color)'  />
                        
            }
            </section>
            <IconWithBadge icon={Heart}  iconColor='var(--icon-color)' quantity={5} />
            <IconWithBadge icon={ShoppingCart}  badgeColor='bg-orange-accent' iconColor='var(--icon-color)' quantity={3}/>
      </section>

  )
}

export default IconNav

