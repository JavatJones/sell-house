import React from 'react'

const Social = () => {
    return (
        <>
            {/* <article className='bg-emerald-400 w-full flex flex-col justify-center items-center h-96 drop-shadow-[1_1px_1px_rgba(0,0,0,0.1)]  drop-shadow-emerald-400 '>
                <section className='container mx-auto px-5'>
                </section>
            </article> */}



            <section className='container mx-auto  px-5'>

                <article className='flex flex-col gap-10'>


                    <div className='flex flex-col  justify-center items-center'>
                        <h2 className='text-3xl md:text-4xl text-center font-medium max-w-2xl tracking-tight'> {/* Título mejorado y centrado */}
                            IE Builders: <span className='bg-gradient-to-r from-blue-600 to-emerald-600 via-emerald-500  bg-clip-text text-transparent'>We Buy your house fast in Houston</span> – Your Quick Home Sale Solution!"
                        </h2>
                    </div>



                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>

                        <div>
                            <article>
                                <h3>

                                </h3>
                                <p>

                                </p>
                            </article>

                            <article>
                                <h3>

                                </h3>
                                <p>

                                </p>
                            </article>
                        </div>


                        <article className='flex flex-col'>
                            <h3>

                            </h3>

                            {/* reels */}
                        </article>
                    </div>
                </article>

                {/* video */}
                <iframe loading="lazy" className='px-5 w-full h-[350px] lg:h-[750px]' src="https://www.youtube.com/embed/jhHTUBE-sgE?si=J5h6axh-j_S7Empo" allowFullScreen />

                {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/jhHTUBE-sgE?si=J5h6axh-j_S7Empo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
            </section>
        </>
    )
}

export default Social