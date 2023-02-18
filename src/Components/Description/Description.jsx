import React from 'react'
import './Description.css'
import Fade from 'react-reveal/Fade'

const Description = () => {
  return (
    <div className='description px-4 lg:px-0 py-6 lg:pt-16 xl:pt-24 2xl:pt-28'>
        <Fade duration={2000} left>
            <h2 className='text-2xl xl:text-4xl 2xl:text-5xl text-center tracking-tight max-w-6xl mx-auto text-slate-800'>Save time and build awesome apps with our modern components.</h2></Fade>
        <Fade duration={2000} right>
            <p className='max-w-3xl mx-auto text-center text-lg mt-8 text-slate-500 font-medium'>Start saving time while creating modern and awesome websites, with our components your websites will look amazing, but the best part is that you don't need more than one minute to use them, just copy and paste them in your project </p>         
        </Fade>
    </div>
  )
}

export default Description


