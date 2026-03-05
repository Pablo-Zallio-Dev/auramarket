
import clsx from 'clsx';
import { type LucideIcon } from 'lucide-react';

interface BadgeProps {
      icon: LucideIcon;
      iconColor?: string;
      badgeColor?: string;
      quantity?: number;
}

const IconWithBadge = ({ icon: Icon, iconColor, badgeColor = 'bg-blue-accent', quantity }: BadgeProps) => {
      return (
            <article className=" relative ">
                  <Icon color={iconColor} />
                  <section className={clsx("absolute -top-3 -right-3 justify-center items-center w-6 p-1 text-xs text-badge-color rounded-full ", badgeColor,
                        quantity && quantity > 0 ? 'flex' : 'hidden'
                  )}> {quantity} </section>
            </article>
      )
}

export default IconWithBadge
