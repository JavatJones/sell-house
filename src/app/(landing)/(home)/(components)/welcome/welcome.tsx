import React from 'react'

// import arrow from '@/assets/images/arrow_green.png'
import LeadForm from './(components)/lead-form'

const Welcome = () => {
  return (
    <section id='quote-now' className='relative w-full flex items-center justify-center min-h-screen xl:min-h-[800px] pt-28 lg:pt-36 py-28 px-5'>
      <div className='absolute inset-0 bg-gradient-to-b from-emerald-500 via-emerald-400 to-bg-[#F2F6F5] '>
      </div>  
      <article className='container mx-auto flex flex-col lg:flex-row w-full h-full gap-10 '>
        <div className='flex flex-col w-full lg:w-5/12 space-y-8 drop-shadow-2xl justify-center items-center'>
          <h1 className='text-3xl md:text-4xl text-center font-semibold max-w-2xl tracking-tight text-white'>
            Sell Your House Fast in Houston, Get a Fair Cash Offer Today!
          </h1>
          <p className='text-base tracking-wide text-white text-justify max-w-sm'>
            Need to sell your Houston home quickly? fast cash for properties in any condition, get your cash offer today!
          </p>
        </div>
        <div className='relative flex flex-col w-full lg:w-7/12 items-center justify-center'>

          
         <div className='w-full lg:max-w-xl space-y-8 drop-shadow-2xl p-10 rounded-2xl bg-blue-950 backdrop-blur-3xl border-[1px] border-emerald-400'>
            <h2 className='text-2xl font-bold text-white text-center tracking-tight'>Get a cash offer by iE Builders !</h2>
            <LeadForm></LeadForm>
          </div>


        </div>
      </article>
    </section>
  )
}

export default Welcome