import React from 'react'
import { CheckCircle2Icon } from 'lucide-react'
import Image from 'next/image'
import SaleImage from '@/assets/images/sale_2.webp'
import { ButtonScroll_v1 } from '@/components/tunnels/button-scroll'


const FactsUs = () => {
    return (
        <section className='container mx-auto  px-5'>
            <article className='flex flex-col gap-10'>
                <div className='flex flex-col justify-center items-center'>
                    <h2 className='text-3xl md:text-4xl text-center font-medium max-w-2xl tracking-tight'>
                        <span className='bg-gradient-to-r from-blue-600 to-emerald-600 via-emerald-500 bg-clip-text text-transparent'>Sell your house fast</span> in Houston with IE Builder – Your solution for a <span className='bg-gradient-to-r from-blue-600 to-emerald-600 via-emerald-500 bg-clip-text text-transparent'>Fast Cash Offer</span>, As-Is!
                    </h2>
                </div>


                <article className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
                    {/* Columna Izquierda: Texto y Puntos Clave */}
                    <div className='flex flex-col space-y-5'>

                        <article className="flex flex-col gap-10">

                            <article className="flex items-start">
                                <div className="flex-shrink-0 pt-0.5"> {/* pt-0.5 para alinear mejor el icono */}
                                    <CheckCircle2Icon
                                        className={`h-7 w-7 text-green-500`}
                                        aria-hidden="true" // Decorativo, el texto lo describe
                                    />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold text-gray-900 tracking-wider">
                                        Fast Cash Offers in 24 Hrs.
                                    </h3>
                                    <p className="mt-1 text-gray-600 text-base tracking-tight">
                                        We provide a no-obligation cash offer for your Houston home within 24 hours, guaranteeing a swift sale.
                                    </p>
                                </div>
                            </article>
                            <article className="flex items-start">
                                <div className="flex-shrink-0 pt-0.5"> {/* pt-0.5 para alinear mejor el icono */}
                                    <CheckCircle2Icon
                                        className={`h-7 w-7 text-green-500`}
                                        aria-hidden="true" // Decorativo, el texto lo describe
                                    />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold text-gray-900 tracking-wider">
                                        Sell As-Is, No Repairs Needed.
                                    </h3>
                                    <p className="mt-1 text-gray-600 text-base tracking-tight">
                                        Save money and stress. We buy your house in its current condition – no fixes or cleaning required.
                                    </p>
                                </div>
                            </article>
                            <article className="flex items-start">
                                <div className="flex-shrink-0 pt-0.5"> {/* pt-0.5 para alinear mejor el icono */}
                                    <CheckCircle2Icon
                                        className={`h-7 w-7 text-green-500`}
                                        aria-hidden="true" // Decorativo, el texto lo describe
                                    />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold text-gray-900 tracking-wider">
                                        Simple Process, Trusted Local Buyers.
                                    </h3>
                                    <p className="mt-1 text-gray-600 text-base tracking-tight">
                                        Enjoy a straightforward, transparent sale with local Houston experts who prioritize your convenience.
                                    </p>
                                </div>
                            </article>

                        </article>

                        <div className='flex w-full items-center justify-center'>
                            <ButtonScroll_v1 id={"1"} text={'Quote now 🚀'}></ButtonScroll_v1>
                        </div>
                    </div>

                    {/* Columna Derecha: Imagen */}
                    {/* Ajusta la altura de la imagen según tus necesidades */}
                    <div className="relative h-80 md:h-96 lg:h-[30rem] xl:h-[34rem] rounded-xl overflow-hidden shadow-xl">
                        <Image
                            src={SaleImage.src}
                            alt="Science"
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-500 ease-in-out hover:scale-105" // Efecto sutil de zoom al pasar el cursor
                        />
                    </div>
                </article>

            </article>
        </section>
    )
}

export default FactsUs