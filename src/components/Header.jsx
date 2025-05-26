import { ArrowUpAZ, BanknoteArrowDownIcon, BanknoteArrowUp, Funnel, MapPin, User } from 'lucide-react'
import { ALFABETIC_SORT, MAX_PRICE_FIRST_SORT, MIN_PRICE_FIRST_SORT } from '../constants'
import { Filters } from '../components/Filters'
import { useState } from 'react'

const NEUTRAL_STYLE = 'bg-neutral-700/50 text-neutral-500 hover:bg-neutral-700 hover:text-neutral-300 active:scale-130'

const NEUTRAL_ACTIVE_STYLE = 'bg-amber-200/20 text-amber-100 hover:bg-amber-200/60 hover:text-amber-100 active:scale-130'

export function Header ({ sort, setSort, search, setSearch }) {
  const [active, setActive] = useState()
  const handleClick = (event) => {
    const { id } = event.currentTarget
    if (id === sort) return setSort('')
    setSort(id)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
  }

  return (
    <header className='flex flex-col justify-center p-1 m-2 gap-2'>
      <div className='flex items-center justify-between w-full gap-2'>
        <img
          src='/images/ebai.webp'
          alt='logo'
          className='w-28'
        />

        <div className='flex gap-2'>
          <div className='text-neutral-500 border-1 border-neutral-500 p-3 rounded-full bg-neutral-700/50 hover:bg-neutral-700 hover:text-neutral-300 active:scale-130 transition-all duration-300'>
            <User />
          </div>

          <div className='text-neutral-500 border-1 border-neutral-500 p-3 rounded-full bg-neutral-700/50 hover:bg-neutral-700 hover:text-neutral-300 active:scale-130 transition-all duration-300'>
            <MapPin />
          </div>
        </div>
      </div>

      <div className='flex gap-2'>
        <input
          type='text'
          value={search}
          onChange={handleChange}
          placeholder='TV Samsung 70"'
          className='bg-neutral-800 text-white text-xl font-semibold h-12 w-full py-2 px-5 rounded-full placeholder:text-neutral-600 outline-offset-2 outline-amber-200/50 focus:outline-2'
        />

        <button
          className={`cursor-pointer border-1 p-3 rounded-full active:scale-130 transition-all duration-300 ${active ? 'text-amber-200/80 bg-amber-200/30 hover:bg-amber-200/80 hover:text-amber-50' : 'text-neutral-500 bg-neutral-700/50 hover:bg-neutral-700 hover:text-neutral-300'} `}
          onClick={() => setActive(!active)}
        >
          <Funnel />
        </button>
      </div>

      <div className={`flex flex-col mt-2 md:flex-row gap-2 justify-between w-full transition-all duration-300 ${active ? 'opacity-100 max-h-46 overflow-hidden' : 'opacity-0 max-h-0'}`}>
        <div className='flex gap-2'>
          <button onClick={handleClick} id={ALFABETIC_SORT} className={`${sort === ALFABETIC_SORT ? NEUTRAL_ACTIVE_STYLE : NEUTRAL_STYLE} rounded-full py-3 px-4 flex gap-2 transition-all duration-300 cursor-pointer`}>
            <ArrowUpAZ />
          </button>

          <button onClick={handleClick} id={MAX_PRICE_FIRST_SORT} className={`${sort === MAX_PRICE_FIRST_SORT ? NEUTRAL_ACTIVE_STYLE : NEUTRAL_STYLE} w-fit rounded-full py-3 px-4 flex gap-2 transition-all duration-300 cursor-pointer`}>
            <BanknoteArrowUp />
          </button>

          <button onClick={handleClick} id={MIN_PRICE_FIRST_SORT} className={`${sort === MIN_PRICE_FIRST_SORT ? NEUTRAL_ACTIVE_STYLE : NEUTRAL_STYLE} rounded-full py-3 px-4 flex gap-2 transition-all duration-300 cursor-pointer`}>
            <BanknoteArrowDownIcon />
          </button>
        </div>

        <Filters />
      </div>
    </header>
  )
}
