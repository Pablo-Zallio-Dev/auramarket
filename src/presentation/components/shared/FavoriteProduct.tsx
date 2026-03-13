
import { Heart } from 'lucide-react'
import { useFavoriteProduct } from '../../store/useFavoriteStore'
import type { Product } from '../../../core/domain/Product'

const FavoriteProduct = ( {product}: {product: Product} ) => {

const toogleFavoriteProduct= useFavoriteProduct((state) => state.toggleFavoriteProduct)
const favoriteProduct = useFavoriteProduct((state) => state.favoritesProduct)

const isFavorite = favoriteProduct.some((p) => p.id === product.id);
     
  return (
    <button className=" bg-icon-favorite rounded-full backdrop-blur-sm " onClick={() => toogleFavoriteProduct(product)}>
      <Heart fill={isFavorite ? "red" : "none"} color='var(--text-card)' size={16} />
    </button>
  )
}

export default FavoriteProduct



