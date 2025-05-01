import { useState } from 'react'
import { useFilters } from '../hooks/useFilters'
import { ChevronDown, ChevronUp, Filter, ShoppingBag } from 'lucide-react'

export function MenuSection ({ children }) {
  const [isOpen, setIsOpen] = useState(true)
  const { filters } = useFilters()

  return (
    <>
      <aside
        className={`fixed left-0 md:left-12 right-0 md:right-12 bottom-0 bg-neutral-800 rounded-4xl h-[280px] md:h-1/3 z-50 p-4 flex flex-col md:flex-row transform transition-all duration-300 border-1 border-neutral-500 ${isOpen ? 'translate-y-8 shadow-[0_-50px_90px_rgba(0,0,0,0.85)]' : 'translate-y-[280px] md:translate-y-[245px]'}`}
      >
        <article
          className='bg-neutral-800 text-white text-xl font-bold border-1 border-neutral-500 border-b-transparent hover:shadow-amber-200/50 transition-all duration-300 rounded-t-3xl rounded-b-none w-fit h-fit px-3 py-2 flex items-center gap-2 relative -top-17 left-1/2 -translate-x-1/2 z-40'
        >
          <div className='flex items-center py-0.5 px-2.5 gap-2 bg-amber-700/80 rounded-full'>
            <ShoppingBag size={18} className='text-amber-200' />
            <span className='text-amber-200'>
              0
            </span>
          </div>

          <div className='flex items-center py-0.5 px-2.5 gap-2 bg-neutral-700/80 rounded-full'>
            <Filter size={18} />
            <span className='text-white'>
              0
            </span>
          </div>

          <div className='h-8 border-1 border-neutral-700 mx-1' />

          <button
            onClick={() => setIsOpen(!isOpen)}
            className='py-0.5 px-3 bg-neutral-700 text-white font-bold border-1 border-neutral-500 rounded-full flex gap-1 items-center hover:border-neutral-200 transition-all duration-300 cursor-pointer transform-'
          >
            {isOpen
              ? (
                <>
                  <ChevronDown />
                  Cerrar
                </>
                )
              : (
                <>
                  <ChevronUp strokeWidth={3} />
                  Abrir
                </>
                )}
          </button>
        </article>
      </aside>

    </>
  )
}
