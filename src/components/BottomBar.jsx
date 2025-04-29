import { useState } from 'react'
import { useFilters } from '../hooks/useFilters'
import { ChevronDown, ShoppingCart } from 'lucide-react'

export function BottomBar ({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const { filters } = useFilters()

  return (
    <>
      <aside
        className={`fixed left-0 md:left-5 right-0 md:right-5 bottom-0 bg-neutral-700 rounded-xl h-[280px] md:h-1/3 shadow-lg z-50 p-4 flex flex-col md:flex-row transform transition-transform duration-300 ${isOpen ? 'translate-y-10' : 'translate-y-[300px]'}`}
        inert={!isOpen ? true : undefined}
      >
        <button
          onClick={() => setIsOpen(false)}
          className='bg-neutral-800 text-white border-1 border-neutral-200 rounded px-3 w-fit h-fit relative -translate-y-10 cursor-pointer ml-auto'
        >
          <ChevronDown size={48} />
        </button>
      </aside>

      <button
        onClick={() => setIsOpen(true)}
        className='bg-neutral-800 text-white text-xl font-bold border-1 border-neutral-600 hover:shadow-amber-200/50 transition-all duration-300 cursor-pointer rounded-full px-6 py-3 flex items-center gap-3 fixed bottom-4 left-1/2 -translate-x-1/2 z-1 h-18'
      >
        <div className='flex relative items-center gap-1.5 mr-1'>
          <span className='bg-amber-950 text-amber-100 text-normal border-1 border-amber-800 rounded-full px-1 absolute -bottom-2.5 -right-2'>
            0
          </span>
          <ShoppingCart size={38} className='text-amber-100' />
        </div>

        <div className='h-9 border-1 mx-1 border-neutral-200/50' />

        <div className='flex flex-col gap-2'>
          {Object.entries(filters).map(([key, value]) => (
            <span
              key={key}
              className='text-sm font-extrabold text-amber-200 bg-amber-200/30 px-1 rounded'
            >
              {key === 'range' ? `$${value.toString()}` : value.toString()}
            </span>
          ))}
        </div>
      </button>
    </>
  )
}
