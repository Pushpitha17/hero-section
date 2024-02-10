import React from 'react'

function HeroSection({ imgPath, titleText, subText }) {
  return (
    <div className='max-w-screen-2xl	 ml-auto'>
      <div className='flex h-dvh'>
        <div className='text-white z-10  w-1/2' style={{ margin: "24% 0 0 8%" }}>
          <div className='relative max-w-96'>
            <p className='text-3xl font-bold'>{titleText}</p>
            <div className='mt-10 text-sm max-w-80'>
              <p className=''>{subText}</p>
            </div>
          </div>

        </div>
        <div className='w-1/2'>
          <div className='h-full flex justify-end'>
            <div className='relative'>
              <img src={imgPath} className='h-full clip-svg' style={{ maxWidth: 'none' }} />
              <img src="/circle.svg" className='absolute' alt="" style={{ top: '-9%', height: '118%', right: '-15%', maxWidth: 'none' }} />
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

    </div>
  )
}

export default HeroSection