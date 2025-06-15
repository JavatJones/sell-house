import React from 'react'

// import arrow from '@/assets/images/arrow_green.png'
import LeadForm from './(components)/lead-form'

const Welcome = () => {
  return (
    <section id='quote-now' className='relative w-full flex items-center justify-center min-h-screen xl:min-h-[500px] pt-28 lg:pt-36 px-5 '>
      {/* <div className='absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-bg-[#F2F6F5] '>
      </div> */}
      <article className='container mx-auto flex flex-col lg:flex-row w-full h-full gap-10 '>
        <div className='flex flex-col w-full lg:w-6/12 space-y-8 drop-shadow-2xl justify-center items-center'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl text-center font-medium tracking-tight'>
            Sell your house and<span className='bg-gradient-to-r from-blue-600 to-emerald-600 via-emerald-500 bg-clip-text text-transparent'> get a fair cash offer</span> today!
          </h1>
          <p className='text-gray-600 text-justify text-lg tracking-wide max-w-md'>
            Need to sell your Houston home quickly? We offer fast cash for properties in any condition. Get your transparent cash offer today!
          </p>
        </div>
        <div className='relative flex flex-col w-full lg:w-6/12 items-center justify-center'>


          <article className='w-full lg:max-w-xl bg-white space-y-8 p-8 border-[1.8px] border-emerald-400/40 rounded-3xl drop-shadow-2xl drop-shadow-emerald-600/50'>
            <h2 className='text-2xl font-medium text-black text-center tracking-tight'>Get a cash offer by iE Builders !</h2>
            <LeadForm></LeadForm>
          </article>


        </div>
      </article>
    </section>
  )
}

export default Welcome