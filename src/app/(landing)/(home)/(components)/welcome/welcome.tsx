import React from 'react'
import Fondo from '@/assets/images/fondo.webp'
const Welcome = () => {
  return (
    <section className='bg-emerald-400 h-full xl:h-[1000px]  drop-shadow-emerald-400 relative w-full bg-cover bg-right lg:bg-center object-cover drop-shadow-2xl block'
      style={{ backgroundImage: `url(${Fondo.src})` }}>
      <div className='absolute inset-0 bg-gradient-to-r from-blue-600/40 to-emerald-600/20 via-emerald-500/20'>
      </div>
      <article>
        <div>

        </div>
        <div>

        </div>
      </article>
    </section>
  )
}

export default Welcome