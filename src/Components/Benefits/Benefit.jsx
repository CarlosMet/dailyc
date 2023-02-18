import React, { useState } from 'react'
import './benefit.css'
import capture from '../../Images/Captura.png'
import Fade from 'react-reveal/Fade'
import mockup from '../../Images/Mockoupcompu2.png'
const Benefit = () => {
  const [variable, setVariable] = useState("click me")
  return (
    <div className='mx-auto max-w-[330px] lg:max-w-[850px] xl:max-w-[1100px] grid sm:grid-cols-1 lg:grid-cols-3 mt-8 lg:mt-20 place-items-center 2xl:gap-4 mb-8 lg:mb-14 2xl:mb-20'>

       <Fade left duration={500}>
       <div className='w-[320px] lg:w-[260px] xl:w-[320px]'>

          <div className='bg-slate-800 rounded-tr-lg rounded-tl-lg'>
              <div>
                <div className='w-full bg-slate-800 h-8 rounded-tr-lg rounded-tl-lg flex pt-2 pl-2 gap-1 border-gray-400 border-b'>
                  <div className='w-3 h-3 rounded-full bg-orange-500'></div>
                  <div className='w-3 h-3 rounded-full bg-yellow-300'></div>
                  <div className='w-3 h-3 rounded-full bg-green-500'></div>
                </div>
              </div>
              <img src={capture} alt="" />
          </div>
          <div>
            <p className="text-xl mt-6 text-slate-500 text-center h-28">We provide good programming practices in our components</p>
          </div>

        </div>
       </Fade>

       <Fade bottom duration={1000}>
       <div className='w-[320px] lg:w-[260px] xl:w-[320px]'>

          <div className='rounded-tr-lg rounded-tl-lg'>
              
              <img className=' h-48' src={mockup} alt="" />
          </div>
          <div>
            <p className="text-2xl text-slate-500 text-center mt-6 h-28">All of our components are adaptable to any project, they are 100% responsive</p>
          </div>

        </div>
       </Fade>

       <Fade right duration={2000}>
       <div className='w-[320px] lg:w-[260px] xl:w-[320px]'>

          <div className='bg-slate-800 rounded-tr-lg rounded-tl-lg'>
              <div>
                <div className='w-full bg-slate-800 h-8 rounded-tr-lg rounded-tl-lg flex pt-2 pl-2 gap-1 border-gray-400 border-b'>
                  <div className='w-3 h-3 rounded-full bg-orange-500'></div>
                  <div className='w-3 h-3 rounded-full bg-yellow-300'></div>
                  <div className='w-3 h-3 rounded-full bg-green-500'></div>
                </div>
              </div>
              <img src={capture} alt="" />
          </div>
          <div>
            <p className="text-2xl text-slate-500 text-center mt-6 h-28">We offer modern components while taking into account the latest design trends.</p>
          </div>

        </div>
       </Fade>

       



    </div>
  )
}

export default Benefit