import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


//images
import Logo from "@/assets/logos/IE-Builders-Logo_Color-01.webp"
import { ButtonScroll_v1 } from '../tunnels/button-scroll'

const NavBar = async () => {
  return (
    <header className='fixed top-0 z-50 w-full bg-[#F2F6F5]/50 backdrop-blur-[10px] drop-shadow-2xl'>

      <section>
        <article className='block'>
          <nav className='container mx-auto flex flex-row justify-between items-center p-2 '>
            <Link href={"/"}>
              <Image
                alt='IE Builders'
                src={Logo.src}
                width={200}
                height={200}
              ></Image>
            </Link>
            <h2 className='text-[0px]'>iE Builders</h2>
            <h2 className='text-[0px]'>Sell my house</h2>
            <h2 className='text-[0px]'>I want sell my house</h2>

            <ButtonScroll_v1 id={"quote-now"} text={"Quote now 🚀"}></ButtonScroll_v1>
          </nav>
        </article>
      </section>

    </header>
  )
}

export default NavBar