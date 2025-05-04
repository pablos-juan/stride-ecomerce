import { useState } from 'react'
import { Products } from './components/Products'
import { products as initialProducts } from './mocks/products.json'
import { Header } from './components/Header'
import { useFilters } from './hooks/useFilters'
import { MenuSection } from './components/BottomBar'
import { CartProvider } from './context/cart'

export function App () {
  const [products] = useState(initialProducts)
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <CartProvider>
      <Header />
      <MenuSection />
      <Products products={filteredProducts} />
    </CartProvider>
  )
}
