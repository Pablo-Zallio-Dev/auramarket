import Categories from '../components/products/Categories'
import FavoriteModal from '../components/products/FavoriteModal'
import ProductGrid from '../components/products/ProductGrid'
import NavBar from '../components/shared/NavBar'
import HomeView from '../views/HomeView'

const MainLayout = () => {
  return (
    <>
    <NavBar />
    <HomeView />
    <section className=" bg-bg-200 ">
      <Categories />
      <ProductGrid />
      <FavoriteModal />
    </section>
    </>
  )
}

export default MainLayout