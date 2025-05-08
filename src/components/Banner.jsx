import { Megaphone } from 'lucide-react'

export function Banner () {
  return (
    <div className='flex gap-4 justify-center items-center bg-linear-to-r from-amber-400 to-amber-200 py-1 md:py-3 px-6 text-sm text-center text-neutral-950'>
      <Megaphone />
      <p className='w-fit'>
        Este proyecto fue creado con fines educativos. Encuentra el código fuente en <a href='https://github.com/pablos-juan/stride-ecomerce' target='_blank' rel='noopener noreferrer' className='underline'>mi repositorio de GitHub</a>.
      </p>
    </div>
  )
}
