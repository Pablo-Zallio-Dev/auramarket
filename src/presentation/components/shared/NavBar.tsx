import Logo from "../products/Logo"
import IconNav from "./IconNav"

const NavBar = () => {
  return (
    <article className="fixed top-0 z-50 flex justify-around w-full py-4 bg-bg-100 2xl:backdrop-blur-3xl ">
      <Logo />
            <IconNav />

    </article>
  )
}

export default NavBar