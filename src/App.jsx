import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './Components/HeroSection'

function App() {

  return (
    <>
      <div className=' bg-black'>
        <HeroSection imgPath={'/bg.jpg'} titleText="Leaders & Champions Are Made... Not Born!" subText="Get Started today with our EXCLUSIVE offer! Request more infromation today to find out how you or your child can start training!"/>
      </div>

    </>
  )
}

export default App
