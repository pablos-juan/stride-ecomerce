import { useState } from 'react'
import { useFilters } from '../hooks/useFilters'
import { ChevronDown, ChevronUp, Filter, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react'
import { Filters } from './Filters'

function OnCardProduct () {
  return (
    <article className='flex items-center bg-neutral-800 p-2.5 gap-4 rounded'>
      <img
        src='https://picsum.photos/200'
        className='h-32 md:38'
        alt=''
      />

      <div className='flex flex-col gap-2 w-full'>
        <section className='flex justify-between'>
          <div className='flex gap-2 text-amber-200 bg-neutral-700 items-center w-fit p-1 rounded'>
            <p className='text-xl text-white'>12</p>
            <Plus className='bg-amber-200/30 rounded-full' />
            <Minus className='bg-amber-200/20 rounded-full' />
          </div>

          <button className='p-2 text-red-200/70 cursor-pointer rounded transition-all duration-300 hover:bg-red-200/30 hover:text-red-200'>
            <Trash2 />
          </button>
        </section>

        <h3 className='text-white text-2sm font-semibold leading-4.5 md:max-w-2/3'>
          Producto numero uno de prueba con tres parrafos
        </h3>

        <p className='text-white text-xl font-extrabold'>
          $3200
        </p>
      </div>
    </article>
  )
}

export function MenuSection ({ children }) {
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
        className={`fixed left-1/2 transform -translate-x-1/2 bottom-0 bg-neutral-800 rounded-t-4xl h-[280px] w-full md:w-[700px] z-50 p-1 md:p-4 flex flex-col transition-all duration-300 border-1 border-neutral-500 ${isOpen ? 'translate-y-0 shadow-[0_-50px_90px_rgba(0,0,0,0.85)]' : 'translate-y-[280px] md:translate-y-[280px]'}`}
      >
        <article
          className='bg-neutral-800 text-white text-2sm font-bold border-1 border-neutral-500 border-b-transparent transition-all duration-300 rounded-t-3xl rounded-b-none w-fit h-fit px-3 py-2 flex items-center gap-2 absolute -top-12.5 left-1/2 -translate-x-1/2 z-40 shadow-[0_-50px_90px_rgba(0,0,0,0.85)]'
        >
          <div className='flex items-center'>
            <div className='flex items-center py-0.5 px-2.5 gap-2 bg-amber-700/80 rounded-full'>
              <ShoppingBag size={18} className='text-amber-200' />
              <span className='text-amber-200'>
                0
              </span>

              {/* agregar el precio total del carrito */}
            </div>
          </div>

          <div className='flex items-center py-0.5 px-2.5 gap-2 bg-neutral-700/80 rounded-full'>
            <Filter size={18} />
            <span className='text-white'>
              {currentFilters()}
            </span>
          </div>

          <div className='h-8 border-1 border-neutral-700 mx-1' />

          <button
            onClick={() => setIsOpen(!isOpen)}
            className='py-0.5 px-3 bg-neutral-700 text-white font-bold text-2sm border-1 border-neutral-500 rounded-full flex gap-1 items-center justify-center hover:border-neutral-200 transition-all duration-300 cursor-pointer transform-'
          >
            {isOpen
              ? (
                <>
                  <ChevronDown size={18} />
                  Cerrar
                </>
                )
              : (
                <>
                  <ChevronUp size={18} />
                  Abrir
                </>
                )}
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
            <h2 className='text-white text-2xl'>
              🛍️ Carrito
            </h2>

            <OnCardProduct />
          </article>
        </section>
      </aside>
    </>
  )
}
