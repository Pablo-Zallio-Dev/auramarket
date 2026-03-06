import ProductGrid from '../components/products/ProductGrid'
import NavBar from '../components/shared/NavBar'
import HomeView from '../views/HomeView'

const MainLayout = () => {
  return (
    <>
    <NavBar />
    <HomeView />
    <section className=" bg-bg-200 ">
      <ProductGrid />
    </section>
    </>
  )
}

export default MainLayout