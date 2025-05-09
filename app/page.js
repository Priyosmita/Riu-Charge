import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import FirstSectionHome from './components/FirstSectionHome'
import SecongSectionHome from './components/SecongSectionHome'


const page = () => {
  return (
    <>
      <Header />

      <FirstSectionHome />

      <SecongSectionHome />

      <Footer/>
    </>
  )
}

export default page