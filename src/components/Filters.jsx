import { useId } from 'react'
import { ChevronDown } from 'lucide-react'
import { useFilters } from '../hooks/useFilters'

export function Filters () {
  const { filters, setFilters } = useFilters()
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
    <section className='flex w-full md:w-fit flex-col gap-2 bg-neutral-800 rounded px-4 py-2'>
      <h2 className='text-amber-200 text-xl md:text-2xl font-bold mb-1'>
        Filtrar
      </h2>
      <div className='flex items-center gap-3 flex-grow min-w-[200px]'>
        <input
          type='range'
          id={rangeId}
          min={0}
          max={5000}
          value={filters.range}
          onChange={handleChangePrice}
          className='flex-grow h-2 bg-neutral-700 rounded-full appearance-none cursor-pointer'
          style={{
            backgroundImage: `linear-gradient(to right, rgb(252, 211, 77, 0.5) 0%, rgb(252, 211, 77, 0.5) ${
              (filters.range / 5000) * 100
            }%, rgb(64, 64, 64) ${(filters.range / 5000) * 100}%, rgb(64, 64, 64) 100%)`
          }}
        />
        <label
          htmlFor='price'
          className='text-amber-100 text-center w-[80px] bg-amber-200/20 p-1.5 rounded leading-none text-md font-bold'
        >${filters.range}
        </label>
      </div>

      <div className='flex gap-2 relative min-w-[150px]'>
        <label
          htmlFor='category'
          className='bg-neutral-700 border-0 rounded px-3 py-1 text-md text-white gap-2 font-semibold'
        >Cagetory
        </label>

        <select
          name='category'
          id={categoryId}
          onChange={handleChangeCategory}
          className='w-full bg-neutral-700 border-0 rounded px-3 py-1 text-sm text-white appearance-none cursor-pointer focus:ring-1 focus:ring-amber-300/50 outline-none min-w-[150px]'
        >
          <option value='all'>All</option>
          <option value='furniture'>Furniture</option>
          <option value='groceries'>Groceries</option>
        </select>

        <ChevronDown className='absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-200 pointer-events-none' />
      </div>

      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgb(252, 211, 77);
          cursor: pointer;
          border: 2px solid #171717;
          box-shadow: 0 0 5px rgba(252, 211, 77, 0.4);
        }
        input[type="range"]::-webkit-slider-thumb:hover {
          box-shadow: 0 0 10px rgba(252, 211, 77, 0.6);
        }
        input[type="range"]::-moz-range-thumb {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgb(252, 211, 77);
          cursor: pointer;
          border: 2px solid #171717;
          box-shadow: 0 0 5px rgba(252, 211, 77, 0.4);
        }
        input[type="range"]::-moz-range-thumb:hover {
          box-shadow: 0 0 10px rgba(252, 211, 77, 0.6);
        }
      `}
      </style>
    </section>
  )
}
