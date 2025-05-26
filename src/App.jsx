import { useMemo, useState } from 'react'
import { Products } from './components/Products'
import { products as initialProducts } from './mocks/products.json'
import { Header } from './components/Header'
import { useFilters } from './hooks/useFilters'
import { MenuSection } from './components/BottomBar'
import { CartProvider } from './context/cart'
import { Banner } from './components/Banner'
import { Facebook, Instagram, Twitter } from 'lucide-react'

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

      <main className='p-2 md:p-12 md:pt-0'>
        <Header sort={sort} setSort={setSort} search={search} setSearch={setSearch} />
        <MenuSection />
        <Products products={orderedProducts} search={search} />
      </main>

      <footer class='bg-neutral-800 p-8 mb-14 md:px-12 md:py-10'>
        <div class='max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 font-semibold text-white/70'>
          <div>
            <img
              src='public/images/ebai.webp'
              alt='logo'
              className='w-28'
            />

            <div class='flex gap-2 px-2'>
              <a href='#' className='p-2 rounded-full border-1 hover:bg-white/50 transition-colors duration-200'>
                <Facebook />
              </a>
              <a href='#' className='p-2 rounded-full border-1 hover:bg-white/50 transition-colors duration-200'>
                <Instagram />
              </a>
              <a href='#' className='p-2 rounded-full border-1 hover:bg-white/50 transition-colors duration-200'>
                <Twitter />
              </a>
            </div>
          </div>

          <div>
            <ul>
              <li><a href='/about'>Sobre nosotros</a></li>
              <li><a href='/faq'>Preguntas frecuentes</a></li>
              <li><a href='/contact'>Políticas</a></li>
              <li><a href='/shipping'>Envíos y devoluciones</a></li>
            </ul>
          </div>

          <div>
            <ul>
              <li><a href='/category/electronica'>Víveres</a></li>
              <li><a href='/category/moda'>Moda</a></li>
              <li><a href='/category/hogar'>Hogar</a></li>
              <li><a href='/category/juguetes'>Juguetes</a></li>
            </ul>
          </div>
        </div>

        <p className='mt-6 text-white/50 text-center font-medium'>
          &copy; 2025 ebai. Casi todos los derechos reservados.
        </p>
      </footer>
    </CartProvider>
  )
}
