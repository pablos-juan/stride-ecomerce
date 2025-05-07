import { useMemo, useState } from 'react'
import { Products } from './components/Products'
import { products as initialProducts } from './mocks/products.json'
import { Header } from './components/Header'
import { useFilters } from './hooks/useFilters'
import { MenuSection } from './components/BottomBar'
import { CartProvider } from './context/cart'

export function App () {
  const [sort, setSort] = useState('')
  const [search, setSearch] = useState('')
  const [products] = useState(initialProducts)
  const { filterProducts, orderProducts } = useFilters()

  const filteredProducts = useMemo(() =>
    filterProducts(products),
  [products, filterProducts]
  )

  const orderedProducts = useMemo(() =>
    orderProducts(filteredProducts, sort),
  [filterProducts, sort, orderProducts]
  )

  return (
    <CartProvider>
      <Header sort={sort} setSort={setSort} search={search} setSearch={setSearch} />
      <MenuSection />
      <Products products={orderedProducts} search={search} />
    </CartProvider>
  )
}
