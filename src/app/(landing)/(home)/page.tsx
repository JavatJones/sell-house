import React from 'react'


//components
import WhyUs from './(components)/why-us/why-us'
import FactsUs from './(components)/why-us/facts'
import Welcome from './(components)/welcome/welcome'





//One single page Web-Site
const HomePage = async () => {
  return (
    <div className='flex flex-col gap-28'>


      <Welcome></Welcome>
      <WhyUs></WhyUs>
      <FactsUs></FactsUs>

    </div>
  )
}

export default HomePage