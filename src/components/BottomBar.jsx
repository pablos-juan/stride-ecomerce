import { useState } from 'react'
import { useFilters } from '../hooks/useFilters'
import { Filter, Minus, PanelBottomClose, PanelTopCloseIcon, Plus, ShoppingBag, Trash2 } from 'lucide-react'
import { Filters } from './Filters'
import { useCart } from '../hooks/useCart'
import { BUTTON_RED_STYLE } from '../constants'

function Cart ({ cart, addToCart, removeFromCart, removeProduct }) {
  return cart.map(product => (
    <article key={product.id} className='flex items-center bg-neutral-800 py-2.5 px-3 gap-4 rounded'>
      <img
        src={product.thumbnail}
        className='h-27'
        alt=''
      />

      <div className='flex flex-col gap-2 w-full'>
        <section className='flex justify-between'>
          <div className='flex gap-2 text-amber-200 bg-neutral-700 items-center w-fit py-1 px-2 rounded'>
            <p className='text-xl text-white'>
              {product.quantity}
            </p>
            <button onClick={() => addToCart(product)} className='cursor-pointer hover:bg-amber-200/30 rounded-full border-2 border-amber-200 p-0.5 transition-colors duration-300'>
              <Plus size={18} />
            </button>
            <button onClick={() => removeFromCart(product)} className='cursor-pointer hover:bg-amber-200/30 rounded-full border-2 border-amber-200 p-0.5 transition-colors duration-300'>
              <Minus size={18} />
            </button>
          </div>

          <button onClick={() => removeProduct(product)} className='p-2 text-red-200/70 cursor-pointer rounded transition-all duration-300 hover:bg-red-200/30 hover:text-red-200 active:text-red-100 active:bg-red-200/50'>
            <Trash2 />
          </button>
        </section>

        <h3 className='text-white text-2sm font-semibold leading-4.5 md:max-w-2/3'>
          {product.title}
        </h3>

        <p className='text-white text-xl font-extrabold'>
          ${product.price}
        </p>
      </div>
    </article>
  )
  )
}

const NEUTRAL_STYLE = 'bg-neutral-700/50 text-neutral-500 hover:bg-neutral-700 hover:text-neutral-300'

const NEUTRAL_ACTIVE_STYLE = 'bg-amber-200/20 text-amber-100 hover:bg-amber-200/60 hover:text-amber-100'

export function MenuSection ({ children }) {
  const { cart, addToCart, removeProduct, removeFromCart, totalQuantity, clearCart } = useCart()
  const [isOpen, setIsOpen] = useState(false)
  const { filters } = useFilters()

  const currentFilters = () => {
    const defaultValues = {
      category: 'all',
      range: 9999
    }

    return Object.entries(filters).filter(([key, value]) => value !== defaultValues[key]).length
  }

  return (
    <>
      <aside
        className={`fixed left-1/2 transform -translate-x-1/2 md:right-3 md:left-auto md:translate-x-0 bottom-0 bg-neutral-800 rounded-t-4xl h-[650px] w-full md:w-[448px] z-50 p-1 md:p-4 flex flex-col transition-all duration-300 border-1 border-neutral-500 ${isOpen ? 'translate-y-0 shadow-[0_-50px_90px_rgba(0,0,0,0.85)]' : 'translate-y-[650px]'}`}
      >
        <article
          className='bg-neutral-800 text-white text-2sm font-bold border-1 border-neutral-500 border-b-transparent transition-all duration-300 rounded-t-3xl rounded-b-none w-fit h-fit px-3 py-2 flex items-center gap-2 absolute -top-12.5 left-1/2 -translate-x-1/2 z-40 shadow-[0_-50px_90px_rgba(0,0,0,0.85)]'
        >
          <div className={`flex items-center py-0.5 px-2.5 gap-2 ${totalQuantity !== 0 ? NEUTRAL_ACTIVE_STYLE : NEUTRAL_STYLE} rounded-full transition-all duration-300`}>
            <ShoppingBag size={20} />
            <span>
              {totalQuantity}
            </span>
          </div>

          <div className={`flex items-center py-0.5 px-2.5 gap-2 ${currentFilters() !== 0 ? NEUTRAL_ACTIVE_STYLE : NEUTRAL_STYLE} rounded-full transition-all duration-300`}>
            <Filter size={20} />
            <span>
              {currentFilters()}
            </span>
          </div>

          <div className='h-8 border-1 border-neutral-700 mx-1' />

          <button
            onClick={() => setIsOpen(!isOpen)}
            className='rounded-full bg-radial from-amber-400/80 from-30% to-amber-700 opacity-85 hover:opacity-100 active:scale-120 w-fit py-1 px-5 flex gap-2 transition-all duration-300 cursor-pointer'
          >
            {isOpen
              ? <PanelBottomClose size={21} />
              : <PanelTopCloseIcon size={21} />}
          </button>
        </article>

        <section className='h-full w-full overflow-y-auto flex flex-col gap-3 p-2'>
          <article className='flex flex-col gap-2 bg-neutral-950/50 p-3 rounded-xl'>
            <h2 className='text-white text-2xl'>
              🛠️ Filtrar
            </h2>
            <Filters />
          </article>

          <article className='flex flex-col bg-neutral-950/50 p-3 gap-2 rounded-xl'>
            <div className='flex items-center justify-between'>
              <h2 className='text-white text-2xl'>
                🛍️ Carrito
              </h2>

              {cart.length !== 0 && (
                <div onClick={clearCart} className='flex items-center gap-2 relative w-fit bg-neutral-800 rounded'>
                  <button className={`${BUTTON_RED_STYLE} font-bold  p-1.5 rounded`}>RESET</button>
                </div>
              )}
            </div>

            <Cart cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} removeProduct={removeProduct} />
          </article>
        </section>
      </aside>
    </>
  )
}
