import { useEffect, useState } from 'react'
import { Products } from './components/Products'
import { products as initialProducts } from './mocks/products.json'
import { Header } from './components/Header'
import { useFilters } from './hooks/useFilters'
import { MenuSection } from './components/BottomBar'
import { CartProvider } from './context/cart'

export function App () {
  const [sort, setSort] = useState('')
  const [products] = useState(initialProducts)
  const { filterProducts, orderProducts } = useFilters()

  const filteredProducts = filterProducts(products)
  const orderedProducts = orderProducts(filteredProducts, sort)

  return (
    <CartProvider>
      <Header sort={sort} setSort={setSort} />
      <MenuSection />
      <Products products={orderedProducts} />
    </CartProvider>
  )
}
