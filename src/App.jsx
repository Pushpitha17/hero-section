import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div className='flex bg-black h-screen'>
        <div className='text-white z-10 mt-80 ml-20'>
          <p className='text-4xl font-bold'>Leaders & Champions</p>
          <p className='text-4xl font-bold'>Are Made... Not Born!</p>
          <div className='mt-10'>
            <p className=''> Get Started today with our EXCLUSIVE offer!</p>
            <p>Request more infromation today to find out how you or your child can start training!</p>
          </div>
        </div>
        <div className='h-dvh w-screen'>
          <div className='h-full flex justify-end'>
            <div className='relative'>
              <img src='/bg.jpg' className='h-full clip-svg' style={{ maxWidth: 'none' }} />
              <img src="/circle.svg" className='absolute' alt="" style={{ top: '-9%', height: '118%', right: '-9%', maxWidth: 'none' }} />
              {/* <svg className='text-right absolute'>
                <defs>
                  <clipPath id="myClip">
                    <path d="M317 836.5C-262.5 474.5 84.1667 139.333 346 0.5H904.5L922 836.5" />
                  </clipPath>
                </defs>
              </svg> */}
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default App
