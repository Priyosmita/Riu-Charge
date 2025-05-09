import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import FirstSectionHome from './components/FirstSectionHome'
import SecondSectionHome from './components/SecondSectionHome'
import ThirdSectionHome from './components/ThirdSectionHome'


const page = () => {
  return (
    <>
      <Header />

      <FirstSectionHome />

      <SecondSectionHome />

      <ThirdSectionHome />

      <Footer/>
    </>
  )
}

export default page