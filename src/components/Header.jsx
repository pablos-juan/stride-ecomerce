export function Header () {
  return (
    <header className='flex flex-col md:flex-row justify-center items-center p-1 md:p-4 gap-2'>
      <input
        type='text'
        placeholder='TV Samsung 70°'
        className='bg-neutral-800 text-white text-xl font-semibold h-12 w-full md:w-2/3 py-2 px-5 m-2 rounded-full placeholder:text-neutral-600 outline-offset-2 outline-amber-200/50 focus:outline-2'
      />
    </header>
  )
}
