import { useId } from 'react'
import { ChevronDown } from 'lucide-react'
import { useFilters } from '../hooks/useFilters'
import { BUTTON_RED_STYLE, DEFAULT_FILTERS } from '../constants.js'

export function Filters () {
  const { filters, setFilters, resetFilters } = useFilters()
  const rangeId = useId()
  const categoryId = useId()

  const handleChangePrice = (event) => {
    setFilters(prev => ({
      ...prev,
      range: Number(event.target.value)
    }))
  }

  const handleChangeCategory = (event) => {
    setFilters(prev => ({
      ...prev,
      category: event.target.value
    }))
  }

  return (
    <section className='flex flex-wrap w-full gap-2'>
      <div className='flex max-w-[307px] items-center gap-3 flex-grow p-1.5 bg-neutral-800 rounded'>
        <input
          type='range'
          id={rangeId}
          min={0}
          max={9999}
          value={filters.range}
          onChange={handleChangePrice}
          className='flex-grow h-2 bg-neutral-700 rounded-full appearance-none cursor-pointer'
          style={{
            backgroundImage: `linear-gradient(to right, rgb(252, 211, 77, 0.5) 0%, rgb(252, 211, 77, 0.5) ${
              (filters.range / 9999) * 100
            }%, rgb(64, 64, 64) ${(filters.range / 9999) * 100}%, rgb(64, 64, 64) 100%)`
          }}
        />
        <label
          htmlFor='price'
          className='text-amber-100 text-center bg-amber-200/20 p-1.5 rounded leading-none text-sm font-bold w-[150px]'
        >Max value: ${filters.range}
        </label>
      </div>

      <div className='flex items-center gap-2 relative w-fit p-1.5 bg-neutral-800 rounded'>
        <label
          htmlFor='category'
          className='text-amber-100 bg-amber-200/20 p-1.5 rounded text-sm leading-none font-bold flex items-center justify-center h-fit'
        >Cagetory
        </label>

        <select
          name='category'
          id={categoryId}
          onChange={handleChangeCategory}
          className='w-full bg-neutral-700 border-0 rounded px-3 py-1 text-sm text-white font-extrabold appearance-none cursor-pointer focus:ring-1 focus:ring-amber-300/50 outline-none min-w-[150px]'
        >
          <option value='all'>All</option>
          <option value='furniture'>Furniture</option>
          <option value='groceries'>Groceries</option>
        </select>

        <ChevronDown className='absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-200 pointer-events-none' />
      </div>

      {Object.entries(filters).filter(([key, value]) => value !== DEFAULT_FILTERS[key]).length !== 0 &&
        <div className='flex items-center gap-2 relative w-fit bg-neutral-800 rounded'>
          <button onClick={resetFilters} className={`${BUTTON_RED_STYLE} font-bold  p-1.5 rounded`}>RESET</button>
        </div>}
    </section>
  )
}
