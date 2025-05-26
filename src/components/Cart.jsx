import { Minus, Plus, Trash2 } from 'lucide-react'

export function Cart ({ cart, addToCart, removeFromCart, removeProduct }) {
  return cart.map(product => (
    <article key={product.id} className='flex w-full h-full items-center bg-neutral-700/30 py-2.5 px-3 gap-4 rounded'>
      <img
        src={product.thumbnail}
        className='h-27'
        alt='Imagen del producto'
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
