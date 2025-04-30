import { useState } from 'react'
import { useFilters } from '../hooks/useFilters'
import { ChevronDown, ChevronUp, Filter, ShoppingBag } from 'lucide-react'

export function BottomBar ({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const { filters } = useFilters()

  return (
    <>
      <aside
        className={`fixed left-0 md:left-12 right-0 md:right-12 bottom-0 bg-neutral-700 rounded-4xl h-[280px] md:h-1/3 z-50 shadow-[0_-50px_90px_rgba(0,0,0,0.85)] p-4 flex flex-col md:flex-row transform transition-transform duration-300 ${isOpen ? 'translate-y-8' : 'translate-y-[312px]'}`}
        inert={!isOpen ? true : undefined}
      >
        <button
          onClick={() => setIsOpen(false)}
          className='bg-neutral-800 text-white border-1 border-neutral-200 border-b-transparent rounded-b-none rounded px-4 w-fit h-fit relative -translate-y-[50px] cursor-pointer mr-8 ml-auto'
        >
          <ChevronDown size={32} />
        </button>
      </aside>

      <article
        className='bg-neutral-800 text-white text-xl font-bold border-1 border-neutral-600 hover:shadow-amber-200/50 transition-all duration-300 rounded-full px-3 py-2 flex items-center gap-2 fixed bottom-4 left-1/2 -translate-x-1/2 z-40'
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
          onClick={() => setIsOpen(true)}
          className='py-1 px-3 bg-neutral-700 text-white font-bold border-1 border-neutral-500 rounded-full flex gap-1 items-center hover:border-neutral-200 transition-all duration-300 cursor-pointer'
        >
          <ChevronUp />
          Abrir
        </button>
      </article>
    </>
  )
}
