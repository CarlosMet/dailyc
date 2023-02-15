import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center overflow-hidden max-w-[100vw]'>
        <div className='p-4 2xl:px-14'>
            <h1 className='text-xl lg:text-3xl font-bold text-gray-600'>Daily <span className='text-purple-400 font-extrabold'>Components</span></h1>
        </div>
        <div>
          <ul className='flex text-gray-500 gap-4 lg:gap-8 ml-4 lg:ml-10 text-md lg:text-lg'>
            <li>Option</li>
            <li>Option</li>
            <li>Option</li>
            <li>Option</li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar