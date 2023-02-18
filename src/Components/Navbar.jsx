import React, { useState } from 'react'
import './navbar.css'
import {Fade} from 'react-reveal'

const Navbar = () => {
  const [burgerClass1, setBurgerClass1] = useState('first-span w-8 h-[3px] bg-slate-200')
  const [burgerClass2, setBurgerClass2] = useState('second-span w-8 h-[3px] bg-slate-200')
  const [burgerClass3, setBurgerClass3] = useState('third-span w-8 h-[3px] bg-slate-200')
  const [burgerStatus, setBurgerStatus] = useState('burger')
  const burgerHandler = (e)=>{
    if (burgerStatus === 'burger'){
      setBurgerClass1('first-span w-8 h-[3px] bg-slate-100 rotate-45')
      setBurgerClass2('second-span w-0 h-[3px] bg-slate-100')
      setBurgerClass3('third-span w-8 h-[3px] bg-slate-100 -rotate-45 translate-y-[-12px]')
      setBurgerStatus('cross')
    }else{
      setBurgerClass1('first-span w-8 h-[3px] bg-slate-100')
      setBurgerClass2('second-span w-8 h-[3px] bg-slate-100')
      setBurgerClass3('third-span w-8 h-[3px] bg-slate-100 ')
      setBurgerStatus('burger')
    }
  }
  return (
    <div className='flex items-center flex-row-reverse lg:flex-row justify-between lg:justify-start p-2 px-2 lg:px-5 2xl:px-9 bg-black lg:gap-8 2xl:gap-16 lg:pl-12 xl:pl-20 2xl:pl-28'>
        <div className=''>
            <h1 className='text-xl lg:text-3xl font-bold text-slate-200'>Daily <span className='text-purple-400 font-extrabold'>Components</span></h1>
        </div>
        <div>
          <ul className='hidden lg:flex text-slate-300 gap-6 ml-4 lg:ml-10 text-md lg:text-lg'>
            <li className='nav-option hover:text-slate-100 cursor-pointer'>Option</li>
            <li className='nav-option hover:text-slate-100 cursor-pointer'>Option</li>
            <li className='nav-option hover:text-slate-100 cursor-pointer'>Option</li>
            <li className='nav-option hover:text-slate-100 cursor-pointer'>Option</li>
          </ul>
        </div>
        <div className='block lg:hidden relative z-20'>

          <div className='flex flex-col justify-between h-4 z-20' onClick={burgerHandler}>
            <div className={burgerClass1}></div>
            <div className={burgerClass2}></div>
            <div className={burgerClass3}></div>
          </div>

          <div className=''>
            {burgerStatus === 'cross' && 
              <div className='absolute mt-7 -z-10 bg-slate-800 -left-2 top-0 pl-6 w-[100vw] h-[calc(100vh-28px)] text-center'>
                <ul className='text-slate-300 flex flex-col justify-between h-full py-52 text-lg'>
                  <Fade right ><li>Option</li></Fade>
                  <Fade right delay={420}><li>Option</li></Fade>
                  <Fade right delay={840}><li>Option</li></Fade>
                  <Fade right delay={1260}><li>Option</li></Fade>
                </ul>
              </div>
            }
          </div>

        </div>
    </div>
  )
}

export default Navbar