import Logo from "../products/Logo"
import IconNav from "./IconNav"

const NavBar = () => {
  return (
    <article className="fixed top-0 z-40 flex justify-around w-full py-4  backdrop-blur-sm ">
      <Logo />
            <IconNav />

    </article>
  )
}

export default NavBar