import { ArrowUpAZ, BanknoteArrowDownIcon, BanknoteArrowUp } from 'lucide-react'
import { ALFABETIC_SORT, MAX_PRICE_FIRST_SORT, MIN_PRICE_FIRST_SORT } from '../constants'

const BUTTON_NEUTRAL_STYLE = 'bg-neutral-700/50 text-neutral-500 hover:bg-neutral-700 hover:text-neutral-300 active:scale-150'

export function Header ({ sort, setSort }) {
  const handleClick = (event) => {
    const { id } = event.currentTarget
    // console.log(id)
    if (id === sort) return setSort('')
    setSort(id)
  }

  return (
    <header className='flex flex-col md:flex-row justify-center items-center p-1 md:p-4 m-2 gap-2'>
      <input
        type='text'
        placeholder='TV Samsung 70°'
        className='bg-neutral-800 text-white text-xl font-semibold h-12 w-full md:w-2/3 py-2 px-5 rounded-full placeholder:text-neutral-600 outline-offset-2 outline-amber-200/50 focus:outline-2'
      />

      <button onClick={handleClick} id={ALFABETIC_SORT} className={`${sort === ALFABETIC_SORT ? 'bg-amber-200/20 text-amber-100 hover:bg-amber-200/60 hover:text-amber-100 active:scale-150' : BUTTON_NEUTRAL_STYLE} rounded-full py-3 px-4 flex gap-2 transition-all duration-300 cursor-pointer`}>
        <ArrowUpAZ />
      </button>

      <button onClick={handleClick} id={MIN_PRICE_FIRST_SORT} className={`${sort === MIN_PRICE_FIRST_SORT ? 'bg-amber-200/20 text-amber-100 hover:bg-amber-200/60 hover:text-amber-100 active:scale-150' : BUTTON_NEUTRAL_STYLE} rounded-full py-3 px-4 flex gap-2 transition-all duration-300 cursor-pointer`}>
        <BanknoteArrowDownIcon />
      </button>

      <button onClick={handleClick} id={MAX_PRICE_FIRST_SORT} className={`${sort === MAX_PRICE_FIRST_SORT ? 'bg-amber-200/20 text-amber-100 hover:bg-amber-200/60 hover:text-amber-100 active:scale-150' : BUTTON_NEUTRAL_STYLE} rounded-full py-3 px-4 flex gap-2 transition-all duration-300 cursor-pointer`}>
        <BanknoteArrowUp />
      </button>
    </header>
  )
}
