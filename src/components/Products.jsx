import { ShoppingCart, Star } from 'lucide-react'

function Rating ({ rating }) {
  return (
    <div className='flex items-center bg-neutral-800 rounded-full px-2.5 py-1 gap-1'>
      <Star className='w-3.5 h-3.5 fill-amber-200 text-amber-200' />
      <span className='align-middle leading-none text-xs font-medium text-amber-200'>{rating.toFixed(1)}</span>
    </div>
  )
}

export function Products ({ products }) {
  return (
    <section className='w-full flex justify-center p-1 md:p-4'>
      <ul className='w-full grid grid-cols-[repeat(auto-fit,minmax(310px,1fr))] gap-3 md:gap-4'>
        {products.map(product => (
          <li key={product.id} className='border-1 border-neutral-700 hover:border-amber-100 transition-all duration-300 group rounded-xl flex flex-col justify-between overflow-hidden bg-neutral-800'>
            <div
              className='flex h-72 items-start flex-col justify-end p-4 gap-1 bg-no-repeat bg-center bg-contain'
              style={{ backgroundImage: `linear-gradient(to top, #040404, transparent), url(${product.thumbnail})` }}
            >
              <div className='flex items-center gap-2'>
                <span className='inline-block px-2.5 py-1 bg-neutral-800 text-amber-200 text-xs font-normal rounded-full'>
                  {product.category}
                </span>

                <Rating rating={product.rating} />
              </div>

              <h1 className='font-bold text-lg ml-0.5 md:text-xl max-w-3/4 text-white leading-6'>
                {product.title}
              </h1>
            </div>

            <article className='flex justify-between items-center gap-1.5 p-4'>
              <p className='font-extrabold text-white text-2xl'>
                ${product.price}
              </p>

              <button className='bg-amber-200/30 text-amber-200 border-1 border-solid border-amber-200/80 w-26 py-2 font-semibold rounded-full hover:shadow-[0_0_15px_rgba(252,211,77,0.6)] hover:shadow-amber-200/50 transition-all duration-300 cursor-pointer flex items-center justify-center px-2 gap-1'>
                <ShoppingCart className='h-4.5' />
                Añadir
              </button>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}
