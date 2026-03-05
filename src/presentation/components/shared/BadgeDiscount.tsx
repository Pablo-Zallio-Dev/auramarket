
const BadgeDiscount = ( {discount} : {discount: number} ) => {
  return (
    <section className=" flex items-center self-start py-1 px-3 rounded-lg bg-orange-accent ">
      <p className=" text-xs text-text-card font-bold ">{ discount }</p>
    </section>
  )
}

export default BadgeDiscount