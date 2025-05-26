import { useState } from 'react'
import { PanelBottomCloseIcon, ShoppingCart } from 'lucide-react'
import { useCart } from '../hooks/useCart'
import { BUTTON_RED_STYLE } from '../constants'
import { Cart } from './Cart'

export function MenuSection () {
  const { cart, addToCart, removeProduct, removeFromCart, totalPrice, totalQuantity, clearCart } = useCart()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <aside className={`fixed left-0 bottom-0 w-full bg-neutral-700 md:px-6 ${cart.length === 0 ? 'opacity-0 max-h-0' : 'p-3 opacity-100 max-h-full'} transition-all duration-300`}>
      <article className={`flex flex-col bg-neutral-950/50 gap-2 rounded-xl ${isOpen ? 'max-h-200 p-3 opacity-100 overflow-y-scroll' : 'max-h-0 opacity-0 overflow-hidden'} transition-all duration-300`}>
        <div className='flex items-center justify-between'>
          <h2 className='text-white text-2xl'>
            🛍️ Carrito
          </h2>

          <div className='flex gap-2'>
            {cart.length !== 0 && (
              <div className='flex items-center gap-2 relative w-fit bg-neutral-800 rounded'>
                <button
                  onClick={clearCart}
                  className={`${BUTTON_RED_STYLE} font-bold  p-1.5 rounded`}
                >RESET
                </button>
              </div>
            )}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className='text-neutral-500 border-1 border-neutral-500 p-2 rounded-full bg-neutral-700/50 hover:bg-neutral-700 hover:text-neutral-300 active:scale-130 transition-all duration-200'
            >
              <PanelBottomCloseIcon />
            </button>
          </div>
        </div>

        <Cart cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} removeProduct={removeProduct} />
      </article>

      <div className={`flex justify-between items-center ${isOpen ? 'max-h-0 opacity-0' : 'max-h-15 opacity-100'} transition-all duration-300`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='text-amber-200 p-3 w-fit rounded-full bg-amber-200/30 hover:bg-amber-200/80 hover:text-amber-50 active:scale-130 transition-all duration-300 cursor-pointer border-1'
        >
          <ShoppingCart />
        </button>

        <div className='flex items-center gap-2 relative'>
          <p className={`text-neutral-400 font-medium transition-all duration-300 ${cart.length === 0 ? 'opacity-100' : 'opacity-0'}`}>
            Aún no hay nada aquí...
          </p>

          <div className={`flex gap-2 items-center transition-all duration-300 ${cart.length === 0 ? 'opacity-0 max-w-0' : 'opacity-100 max-w-44'}`}>
            <p className='flex items-center justify-center font-bold border-1 p-2 h-8 w-8 bg-amber-200/30 rounded-full text-white text-lg leading-0'>
              {totalQuantity}
            </p>

            <h3 className='text-3xl text-white font-semibold'>
              ${totalPrice}
            </h3>
          </div>
        </div>
      </div>
    </aside>
  )
}
