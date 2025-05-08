import { useMemo, useState } from 'react'
import { Products } from './components/Products'
import { products as initialProducts } from './mocks/products.json'
import { Header } from './components/Header'
import { useFilters } from './hooks/useFilters'
import { MenuSection } from './components/BottomBar'
import { CartProvider } from './context/cart'
import { Banner } from './components/Banner'

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
      <Banner />

      <main className='p-2 md:p-12 md:pt-6'>
        <Header sort={sort} setSort={setSort} search={search} setSearch={setSearch} />
        <MenuSection />
        <Products products={orderedProducts} search={search} />
      </main>
    </CartProvider>
  )
}
