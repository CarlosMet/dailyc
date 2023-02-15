import React, {useRef, useState,useEffect} from 'react'
import './hero.css'
import heroImg from '../../images/cryptoframe-removebg-preview.png'
import heroSvg from '../../images/undraw_working_re_ddwy.svg'

const Hero = () => {    

    const [text, setText] = useState("Css")
    const [count, setCount] = useState(1)
    const [className, setClassName] = useState(`${text}-enter`);
    
    
  useEffect(() => {
    const interval = setTimeout(() => {
      setCount(prevCount => prevCount + 1);
    }, 3000);

    if (count === 1) {
      setText('pure Css');
    } else if (count === 2) {
      setText('Tailwind');
    } else if (count === 3) {
      setText('Bootstrap   ');
    } else if (count === 4) {
        setText("Javascript")        
    }else{
        setCount(1);
    }


    setClassName(`${text}-enter`);

    return () => {
      clearTimeout(interval);
    };
  }, [count]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setClassName('');
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [text]);

  return (
    <div className='hero flex flex-col items-center gap-6 text-center lg:flex-row lg:text-left lg:justify-between px-4 py-12 md:px-12 md:py-16 lg:px-20 lg:py-20 xl:px-24 2xl:px-64 2xl:py-40'>
        <div className='w-[310px] md:w-[475px] lg:w-[620px] xl:w-[710px] lg:mt-4'>
            <h1 className='titulo text-2xl lg:text-3xl xl:text-6xl tracking-tight text-slate-900'>Welcome to daily components.</h1>
            <p className='container1 text-xl lg:text-2xl font-semibold mt-2 lg:mt-4 text-slate-500'>We provide pre-built and pre-design components for your apps, these components are built using <span className='text-purple-500 font-semibold'><span className={className}>{text}</span></span> </p>
            <button className='bg-purple-500 px-20 text-xl text-white font-semibold mt-4 rounded-3xl py-2 lg:mt-6 xl:mt-10 2xl:mt-12'>Get started</button>
        </div>        
        <div className='hero-img lg:mt-12'>
            <img src={heroImg} alt="" />
            <div className='hidden lg:block absolute-svg lg:top-40 lg:left-[-155px] 2xl:left-[-215px] 2xl:top-48'>
                <img src={heroSvg} alt="" />
            </div>
        </div>
        
    </div>
  )
}

export default Hero



