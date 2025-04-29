import { Filters } from './Filters'

export function Header () {
  return (
    <header className='flex flex-col md:flex-row justify-between items-center p-1 mt-3 md:mt-0 md:p-4 gap-2'>
      {/* <h1 className='text-white text-4xl md:text-7xl font-bold md:px-2.5 py-2 rounded'>
        Mercado
        <span className='mx-2 md:mx-5 px-2 bg-amber-300/50 rounded italic'>
          Liebre
        </span>
      </h1> */}
      <Filters />
    </header>
  )
}
