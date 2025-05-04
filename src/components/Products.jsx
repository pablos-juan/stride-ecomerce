import { ShoppingCart, Star } from 'lucide-react'
import { useCart } from '../hooks/useCart'
import { BUTTON_RED_STYLE, BUTTON_AMBER_STYLE } from '../constants.js'

function Rating ({ rating }) {
  return (
    <div className='flex items-center bg-amber-200/20 rounded-full px-2.5 py-1 gap-1'>
      <Star className='w-3.5 h-3.5 fill-amber-100 text-amber-100' />
      <span className='align-middle leading-none text-xs font-medium text-amber-100'>{rating.toFixed(1)}</span>
    </div>
  )
}

export function Products ({ products }) {
  const { cart, addToCart, removeProduct } = useCart()

  const isProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <section className='w-full flex justify-center p-1 md:p-4 mb-8 md:mb-0'>
      <ul className='w-full grid grid-cols-[repeat(auto-fit,minmax(310px,1fr))] gap-3 md:gap-4'>
        {products.map(product => {
          const inCart = isProductInCart(product)

          return (
            <li key={product.id} className='border-1 border-neutral-700 hover:border-amber-100 transition-all duration-300 group rounded-xl flex flex-col justify-between overflow-hidden bg-neutral-800'>
              <div
                className='flex h-72 items-start flex-col justify-end px-4 py-3 gap-1 bg-no-repeat bg-center bg-contain'
                style={{ backgroundImage: `linear-gradient(to top, #040404, transparent), url(${product.thumbnail})` }}
              >
                <div className='flex items-center gap-2'>
                  <span className='inline-block px-2.5 py-1 bg-amber-200/20 text-amber-100 text-xs font-normal rounded-full'>
                    {product.category}
                  </span>

                  <Rating rating={product.rating} />
                </div>

                <h1 className='font-bold text-lg ml-0.5 md:text-xl max-w-3/4 text-white leading-6'>
                  {product.title}
                </h1>
              </div>

              <article className='flex justify-between items-center gap-1.5 px-4 py-3'>
                <p className='font-extrabold text-white text-2xl'>
                  ${product.price}
                </p>

                <button
                  className={`border-1 border-solid w-fit py-2 font-semibold rounded-full cursor-pointer flex items-center justify-center px-4 gap-1 ${inCart ? BUTTON_RED_STYLE : BUTTON_AMBER_STYLE}`}
                  onClick={() => inCart
                    ? removeProduct(product)
                    : addToCart(product)}
                >
                  {inCart
                    ? (
                      <>Eliminar</>
                      )
                    : (
                      <>
                        <ShoppingCart className='h-4.5' />
                        Añadir
                      </>
                      )}
                </button>
              </article>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
