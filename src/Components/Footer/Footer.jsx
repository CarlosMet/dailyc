import React from 'react'
import './footer.css'

const Footer = () => {
  return (
   <div className=''>

    <div className='px-4 py-12 mt-8 bg-slate-700 rounded-tr-[65px] lg:rounded-tr-[95px] flex justify-between text-slate-300 flex-col lg:flex-row'>
        <div className='flex justify-between flex-23'>
        <div className=''>
            <h3 className='text-slate-200 font-bold text-lg mb-3 tracking-tight'>Components</h3>
            <ul>
                <li>Pure Css</li>
                <li>Tailwind</li>
                <li>Bootstrap</li>
                <li>Javascript</li>
            </ul>
        </div>
        <div>
            <h3 className='text-slate-200 font-bold text-lg mb-3 tracking-tight'>Customization</h3>
            <ul>
                <li>Sizing</li>
                <li>Color</li>
                <li>Spacing</li>
            </ul>
        </div>
        </div>
        <div className='flex-13 flex justify-between mt-6 lg:mt-0 lg:justify-evenly'>
           <div className=''>
            <h3 className='text-slate-200 font-bold text-lg mb-3 tracking-tight'>About us</h3>
            <ul>
                <li>Contact</li>
                <li>Social networks</li>                
            </ul>
           </div>
           <div>
            hola
           </div>
        </div>
    </div>

   </div>
  )
}

export default Footer