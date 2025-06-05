import React from 'react'
import WhyUs from './(components)/why-us/why-us'
import Social from './(components)/social/social'
import FactsUs from './(components)/why-us/facts'
import Welcome from './(components)/welcome/welcome'





//One single page Web-Site
const HomePage = async () => {
  return (
    <div className='flex flex-col gap-28'>


      <Welcome></Welcome>
      <WhyUs></WhyUs>
      <FactsUs></FactsUs>
      <Social></Social>

    </div>
  )
}

export default HomePage