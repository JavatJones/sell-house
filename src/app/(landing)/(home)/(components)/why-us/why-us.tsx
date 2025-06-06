import React from 'react'


//icons
import { AiFillHome } from "react-icons/ai";
import { GiTakeMyMoney } from "react-icons/gi";
import { IoMdConstruct } from "react-icons/io";

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
        title: 'Sell my house in Houston',
        fact1: '📌 Quick Home Sale In Houston: Get a Cash Offer for Your Property Today!',
        fact2: '🏡 Need to Sell Your House Fast in Houston? We Buy in Houston, Spring, Tomball, Katy & More!',
        icon: <AiFillHome />,
    },
    {
        index: 2,
        image: work,
        title: 'Get a free cash offer',
        fact1: '🧾 Get a Free Cash Offer - We Buy Houses Houston Fast!',
        fact2: '💰 Experience a Fast Home Sale: Get Your No-Obligation Cash Offer Now!',
        fact3: '🔒 Urgent Home Sale In Houston? Get a Fair, Fast Cash Offer Today!',
        icon: <GiTakeMyMoney />
    },
    {
        index: 3,
        image: bad_house,
        title: 'Any condition, any situation',
        fact1: '🛠️ Sell Your Property In Fast Houston, No Repairs Needed – Even Distressed Homes!',
        fact2: '🚀 We Buy Homes Quickly in Houston: From Inherited to Distressed, Any Situation Welcome.',
        icon: <IoMdConstruct />
    },
];

const WhyUs = async () => {
    return (
        <section className='container mx-auto px-5'>
            <article className='flex flex-col gap-25 '>
                <div className='flex flex-col justify-center items-center'>
                    <h2 className='text-3xl md:text-4xl text-center font-medium max-w-2xl tracking-tight'> {/* Título mejorado y centrado */}
                        IE Builders: <span className='bg-gradient-to-r from-blue-600 to-emerald-600 via-emerald-500  bg-clip-text text-transparent'>We Buy your house fast in Houston</span> – Your Quick Home Sale Solution!
                    </h2>
                </div>

                {/* cards */}
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-10 xl:gap-15 '>


                    {cards.map((item, index) => (
                        <div key={index} className='group flex flex-col gap-3  border-[1px] scale-100  pb-5 xl:even:scale-110 even:border-[1.8px] border-white/10 even:border-emerald-400/40   bg-white rounded-3xl even:drop-shadow-2xl even:drop-shadow-emerald-600/50'>
                            <div className='block relative h-48 md:h-72 lg:h-72'>
                                <Image
                                    src={item.image.src}
                                    layout='fill'
                                    alt={item.title}
                                    className='object-cover rounded-t-3xl'
                                >

                                </Image>
                            </div>

                            <div className='flex flex-col gap-5 py-5 lg:py-2 px-5 '>

                                <h3 className=' font-semibold text-2xl text-center text-gray-900 tracking-tight'>
                                    {item.title}
                                </h3>
                                <p className='text-base tracking-wide text-gray-600 capitalize'>
                                    {item.fact1}
                                </p>
                                <p className='text-base tracking-wide text-gray-600 capitalize'>
                                    {item.fact2}
                                </p>
                                <p className=' text-base tracking-wide text-gray-600 capitalize'>
                                    {item.fact3}
                                </p>
                            </div>

                            <div className='flex group-even:hidden items-center justify-center py-2 px-4'>
                                <ButtonScroll_v2 id={"quote-now"} text={`Im interested !`}></ButtonScroll_v2>
                            </div>

                            <div className='hidden group-even:flex items-center justify-center py-2 px-4 '>
                                <ButtonScroll_v1 id={"quote-now"} text={`Get a free offer 💲`}></ButtonScroll_v1>
                            </div>
                        </div>

                    ))}
                </div>
                
            </article>
        </section>
    )
}

export default WhyUs