import ProductGrid from '../components/products/ProductGrid'
import NavBar from '../components/shared/NavBar'
import HomeView from '../views/HomeView'

const MainLayout = () => {
  return (
    <>
    <NavBar />
    <HomeView />
    <ProductGrid />
    </>
  )
}

export default MainLayout