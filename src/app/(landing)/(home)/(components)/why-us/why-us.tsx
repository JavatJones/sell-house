import React from 'react'


//icons
import { AiFillHome } from "react-icons/ai";
import { GiTakeMyMoney } from "react-icons/gi";
import { IoMdConstruct } from "react-icons/io";
import { IoIosDesktop } from "react-icons/io";

//images
import bad_house from "@/assets/images/bad_house.webp";
import work from "@/assets/images/sale_3.webp";
import anuncio from "@/assets/images/anuncio.webp";

import Image from 'next/image';
import { ButtonScroll_v1, ButtonScroll_v2 } from '@/components/tunnels/button-scroll';



const cards = [
    {
        index: 1,
        image: anuncio,
        title: 'What are you looking for?',
        facts: {
            fact1: 'I want to sell a house.',
            fact2: 'I need help selling my property fast.',
            fact3: 'Are you needing a trusted real estate agent?'
        },
    },
    {
        index: 2,
        image: work,
        title: 'Get a free cash offer',
        facts: {
            fact1: 'We buy your property fast and easy.',
            fact2: 'Need quick cash offer for your home?',
            fact3: 'Contact us and we will make you an offer.',
        },
    },
    {
        index: 3,
        image: bad_house,
        title: 'Any condition, any situation',
        facts: {
            fact1: 'We buy your property fast, no matter the situation.',
            fact2: 'No repairs needed - even distressed homes!',
            fact3: 'Your solution for selling a property, as-is!',
        },
    },
];

const WhyUs = async () => {
    return (
        <section className='container mx-auto px-5'>
            <article className='flex flex-col gap-12 '>
                {/* <div className='flex flex-col justify-center items-center'>
                    <h2 className='text-3xl md:text-4xl text-center font-medium max-w-2xl tracking-tight'>
                        IE Builders: <span className='bg-gradient-to-r from-blue-600 to-emerald-600 via-emerald-500  bg-clip-text text-transparent'>We Buy your house fast in Houston</span> – Your Quick Home Sale Solution!
                    </h2>
                </div> */}

                <div className='flex flex-col justify-center items-center'>
                    <h2 className='text-3xl md:text-4xl text-center font-medium max-w-md tracking-tight'>
                        Your <span className='bg-gradient-to-r from-blue-600 to-emerald-600 via-emerald-500  bg-clip-text text-transparent'>Quick Home Sale Solution</span> with IE Builders!
                    </h2>
                </div>

                {/* cards */}
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto'>


                    {cards.map((item, index) => (
                        <article key={index} className='group flex flex-col gap-3  border-[1px] scale-100  pb-5 even:border-[1.8px] border-white/10 even:border-emerald-400/40   bg-white rounded-3xl even:drop-shadow-2xl even:drop-shadow-emerald-600/50'>
                            <div className='block relative h-48 md:h-72 lg:h-72'>
                                <Image
                                    src={item.image.src}
                                    layout='fill'
                                    alt={item.title}
                                    className='object-cover rounded-t-3xl'
                                >

                                </Image>
                            </div>

                            <div className='flex flex-col gap-5 py-3 px-5'>

                                <h3 className=' font-semibold text-2xl text-center text-gray-900 tracking-tight'>
                                    {item.title}
                                </h3>

                                {Object.values(item.facts).map((item, index) => (
                                    <ul key={index} className='list-none'>
                                        <li className='text-lg tracking-wide text-gray-700 '>
                                            <p>• {item}</p>
                                        </li>
                                    </ul>
                                ))}
                            </div>

                            <div className='flex group-even:hidden items-center justify-center py-2 px-4'>
                                <ButtonScroll_v2 id={"quote-now"} text={`Im interested !`}></ButtonScroll_v2>
                            </div>

                            <div className='hidden group-even:flex items-center justify-center py-2 px-4 '>
                                <ButtonScroll_v1 id={"quote-now"} text={`Get a free offer 💲`}></ButtonScroll_v1>
                            </div>
                        </article>

                    ))}
                </div>

            </article>
        </section>
    )
}

export default WhyUs