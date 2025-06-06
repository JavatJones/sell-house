import React from 'react'

//images
import Logo from '@/assets/logos/IE-Builders-Logo_Color-01.webp'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='bg-[#F2F6F5] py-10 border-[0.5px]'>
      <section className='container mx-auto flex flex-col justify-center items-center gap-10'>



        <article>
          <Image src={Logo.src} alt='IE-Builders-Logo' width={250} height={250} />
        </article>
        
        <article>
          <h2>© 2025 IE Builders LLC, All Rights Reserved.</h2>
        </article>

      </section>
    </footer>
  )
}

export default Footer