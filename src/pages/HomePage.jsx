/* eslint-disable no-unused-vars */
import React from 'react'
import MainHero from '../components/MainHero'
import Hero from '../components/Hero'
import ServiceDesigned from '../components/ServiceDesigned'
import TrustedExperties from '../components/TrustedExperties'
import HowWeWork from '../components/HowWeWork'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import Blog from '../components/Blog'

const HomePage = () => {
  return (
    <div className="w-full overflow-hidden">
      <MainHero />
      <Hero />
      <ServiceDesigned />
      <TrustedExperties />
      <HowWeWork />
      <Testimonials />
      <CTA />
      <Blog />
    </div>
  )
}

export default HomePage
