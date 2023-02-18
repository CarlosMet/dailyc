import React from 'react'

const Responsive = () => {
  return (
    <div className='px-8 lg:px-32 2xl:px-52 mt-8 lg:mt-14 xl:mt-20 2xl:mt-28'>
        <div>
          <h2 className='text-2xl xl:text-4xl 2xl:text-5xl tracking-tight max-w-6xl text-slate-800'>Responsive design.</h2>
          <p className='mt-2 text-[#f760a9] font-medium'>Mobile first</p>
          <p className='mt-4 lg:mt-8 lg:max-w-xl 2xl:max-w-3xl text-slate-500 text-lg'>Our components are built with the concept of "mobile first" in mind, which means that they are designed to prioritize the user experience on mobile devices. This is important because mobile devices have become the primary means of accessing the internet, and users expect websites and applications to be optimized for smaller screens and touch interfaces. By designing with a mobile-first approach, we ensure that our components are lightweight and easy to navigate.</p>
        </div>

        <div className='relative w-[315px] lg:w-[460px] mx-auto mt-7 lg:mt-12 2xl:mt-20'>

        <div className="relative-box w-[315px] lg:w-[460px] h-[205px] lg:h-[250px] border border-black rounded-3xl overflow-hidden mx-auto">
          <div className="flex justify-between px-7 py-8">
            <div className="first-card flex flex-col justify-between h-[120px] lg:px-2 lg:h-40 lg:pt-5">
              <div className='w-[120px] h-[65px] lg:w-44 bg-slate-700 rounded-lg border-black border-2 mb-5'></div>
              <div className='w-[120px] lg:w-44 h-[3px] bg-slate-500'></div>
              <div className='w-[120px] lg:w-44 h-[3px] bg-slate-500'></div>
              <div className='w-[120px] lg:w-44 h-[3px] bg-slate-500'></div>
            </div>
            <div className="second-card flex flex-col justify-between h-[120px] lg:px-2 lg:h-40 lg:pt-5">
              <div className='w-[120px] h-[65px] lg:w-44 bg-slate-700 rounded-lg border-black border-2 mb-5'></div>
              <div className='w-[120px] lg:w-44 h-[3px] bg-slate-500'></div>
              <div className='w-[120px] lg:w-44 h-[3px] bg-slate-500'></div>
              <div className='w-[120px] lg:w-44 h-[3px] bg-slate-500'></div>
            </div>
          </div>
          <div className='w-full h-6 bg-slate-700 lg:mt-1'></div>
          
        </div>
        <div className='absolute top-5 bg-slate-700 w-28 lg:w-[136px] h-44 lg:h-52 -left-5 lg:-left-16 border-black border-4 rounded-2xl flex flex-col items-center pt-6 lg:pt-8'>
            <div className='h-[90px] flex flex-col justify-between'>
              <div className='w-[74px] h-[37px] border border-white bg-[#f760a9] rounded-lg'></div>
              <div>
                <div className='w-[74px] h-[2px] bg-gray-300 mb-2'></div>
                <div className='w-[74px] h-[2px] bg-gray-400 mb-2'></div>
                <div className='w-[74px] h-[2px] bg-gray-400 mb-2'></div>
              </div>
            </div>
          </div>
        
        </div>        
        
    </div>
  )
}

export default Responsive