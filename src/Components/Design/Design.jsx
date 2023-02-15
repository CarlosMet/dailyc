import React, { useState } from 'react'
import {TfiRulerAlt} from 'react-icons/tfi'
import {VscSymbolColor} from 'react-icons/vsc'
import {MdOutlineFormatSize} from 'react-icons/md'
import './design.css'
import Spin from 'react-reveal/Spin'

const Design = () => {
  const [rangeValue, setRangeValue] = useState(10)  
  const sizeHtml = `
<form class="max-w-[2${rangeValue}] text-gray-500 bg-transparent">
  <label for="username">Username</label>      
  <input type="text" name="username" /> 
  <label for="username">Email</label>      
  <input type="email" name="email" />    
  <input type="submit" />
<form/>
  `
  const [sizeColor, setSizeColor] = useState(["text-slate-600", "text-slate-300","text-slate-300"])
  const [color, setColor] = useState("#000")
  const [btns, setBtns] = useState(
    [{color: "text-slate-300", size:40, title:"sizing", id:1, icon:<MdOutlineFormatSize />},
     {color: "text-slate-300", size:40, title: "colors", id:2, icon:<MdOutlineFormatSize />},
     {color: "text-slate-300", size:40, title: "spacing", id:3, icon:<MdOutlineFormatSize />}]
  )
  const clickHandler = index =>{
    const newSizeColor = [...sizeColor];
    newSizeColor.fill("text-slate-300");
    newSizeColor[index] = "text-slate-600";
    setSizeColor(newSizeColor);
  }
  const rangeHandler = (e)=>{
    setRangeValue(e.target.value)    
  }
  const colorHandler = (e) =>{
    setColor(e.target.value)
  }
  return (
    <div className='min-h-[100vh] lg:py-12 relative max-w-[100vw] overflow-hidden'>
      <div className='green-float absolute  w-40 h-40 rotate-12 left-36 top-28 -z-10'></div>
      <div className='-rotate-12 -z-10 absolute right-52 top-[550px]'><Spin><div className='green-float absolute  w-52 h-52  -z-10'></div></Spin></div>
      <div className='float-container absolute bg-[#f3f3f3] w-28 h-28 rotate-12 left-80 bottom-64 -z-10'></div>
      <div className='float-container absolute bg-[#f3f3f3] w-20 h-20 rotate-6 right-48 top-44 -z-10'></div>
      <div className='float-container absolute bg-[#f1fcf6] w-60 h-60 rotate-12 left-0 bottom-12 -z-10'></div>
      <div className='float-container absolute bg-[#f1fcf6] w-32 h-32 rotate-12 right-96 top-12 -z-10'></div>
      <div className='deg12 absolute left-48 2xl:left-[700px] bottom-40 -z-10 '><Spin duration={1900} delay={350}><div className='green-float hidden lg:block  w-64 h-64 rotate-6  -z-10'></div></Spin></div>
      <div className='rotate-12 left-[700px] top-52 -z-10 absolute'><Spin duration={700}><div className='float-container bg-[#b9f9da] w-20 h-20 -rotate-45 '></div></Spin></div>
      <div className='-rotate-12 -z-10'><Spin duration={1500} delay={550}><div className='absolute w-32 h-32 border border-slate-300 border-dashed -z-10'></div></Spin></div>
      <div className='absolute bottom-24 right-52 -rotate-6 -z-10'>
        <Spin duration={1500} delay={550}><div className='w-32 h-32 -rotate-12 border border-slate-300 border-dashed -z-10 absolute '>
          </div>
        </Spin>
      </div>

      
        <div className='px-8 lg:px-32 2xl:px-52'>
            <h2 className='text-2xl xl:text-4xl 2xl:text-5xl tracking-tight max-w-6xl text-slate-800'>Edit your component.</h2>
            <p className='mt-4 lg:mt-8 lg:max-w-xl 2xl:max-w-3xl text-slate-500 text-lg'>We know each project is unique and different, that's why we give you the option to edit some elements like colors, shadows, spacing and sizing, let your imagination soar and let's create amazing things together.</p>
        
        <div className='flex flex-col lg:px-6 lg:flex-row items-center justify-between lg:max-w-[900px] 2xl:max-w-[1100px] mx-auto mt-10 lg:mt-16 2xl:mt-28'>
          
          <div className='grid grid-cols-3 place-items-center lg:flex gap-24 flex-col lg:place-items-start'>
              {btns.map((bttn, index) => {
            return (
              <div key={bttn.id} className="">
                {bttn.id === 1 && <TfiRulerAlt size={52} onClick={()=> clickHandler(index)} className={sizeColor[0]}/>}             
                {bttn.id === 2 && <VscSymbolColor size={52} onClick={()=> clickHandler(index)} className={sizeColor[1]} />}   
                {bttn.id === 3 && <MdOutlineFormatSize size={52} onClick={()=> clickHandler(index)} className={sizeColor[2]} />}  
                <p className='text-lg'>{bttn.title}</p>
              </div> 
            )}            
           )}
          </div>
          <div>            
            {sizeColor[0] === "text-slate-600" && 
              <div className='flex flex-col lg:flex-row gap-6 lg:gap-16 2xl:gap-24 mt-4 lg:mt-0'>
                
                <div className='border-2 bg-white shadow-2xl rounded-lg p-6 flex flex-row lg:flex-col items-center gap-6 justify-between'>
                  <div>
                    <p>Size</p>
                    <input type="range" min={10} max={90} onChange={rangeHandler} className="appearance-none bg-black h-1 w-12 lg:w-20" />
                  </div>
                  <div className='items-center justify-between mt-4'>
                    <input type="color" value="#837c7c"  className='h-6 w-6 lg:h-8 lg:w-8 color-pick' onChange={colorHandler} disabled />
                    <p className='text-slate-300 text-sm'>{color}</p>
                  </div>
                  <div>
                    <p className='text-slate-300 text-sm'>Spacing</p>
                    <input type="range" min={10} max={90} onChange={rangeHandler} className="appearance-none bg-gray-300 h-1 w-12 lg:w-20 " disabled />
                  </div>

                </div>
              <div>

                <div className='barra w-72 lg:w-[390px] 2xl:w-[435px] rounded-tr-lg rounded-tl-lg h-8 bg-slate-700 flex pt-2 pl-3 gap-1 border-b-2 border-gray-400'>
                  <div className='w-3 h-3 bg-orange-500 rounded-full'></div>
                  <div className='w-3 h-3 bg-green-400 rounded-full'></div>
                  <div className='w-3 h-3 bg-yellow-400 rounded-full'></div>
                </div>

                <div className='codebox w-72 lg:w-[390px] 2xl:w-[435px] h-64 lg:h-72 bg-slate-700 px-4 text-gray-300 overflow-x-scroll'>
                  <pre>
                    {sizeHtml}
                  </pre>
                </div>

              </div>
            </div>
            }
            {sizeColor[1] === "text-slate-600" && <div>content2</div>}
            {sizeColor[2] === "text-slate-600" && <div>content3</div>}
            
          </div>
        </div>
        
        </div>
    </div>
  )
}

export default Design


  