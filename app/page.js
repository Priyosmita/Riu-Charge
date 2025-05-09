import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import FirstSectionHome from './components/FirstSectionHome'
import SecondSectionHome from './components/SecondSectionHome'


const page = () => {
  return (
    <>
      <Header />

      <FirstSectionHome />

      <SecondSectionHome />

      <Footer/>
    </>
  )
}

export default page