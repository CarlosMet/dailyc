import React, {useState,useEffect} from 'react'
import './hero.css'
import heroImg from '../../images/cryptoframe-removebg-preview.png'
import heroSvg from '../../images/undraw_working_re_ddwy.svg'
import heroMockup from '../../images/cutmockup.png'

const Hero = () => {    

    const [text, setText] = useState("Css")
    const [count, setCount] = useState(1)
    const [className, setClassName] = useState(`${text}-enter`);
    
    
  useEffect(() => {
    const interval = setTimeout(() => {
      setCount(prevCount => prevCount + 1);
    }, 3000);

    if (count === 1) {
      setText('pure-Css');
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
    <div className='hero py-4 xl:py-6 2xl:py-24'>

        <div className='flex gap-12 lg:gap-8 flex-col items-center lg:flex-row lg:text-left lg:justify-between max-w-[330px] md:max-w[480px] lg:max-w-[910px] xl:max-w-[1100px] 2xl:max-w-[1450px] mx-auto'>
          <div className='hero-flex-1 mt-6 lg:mt-8 text-center lg:text-left xl:p-5'>
            <h1 className='titulo text-2xl lg:text-3xl xl:text-5xl tracking-tight text-slate-900'>Welcome to daily components.</h1>
            <p className='container1 text-lg lg:text-2xl font-semibold mt-2 lg:mt-4 text-slate-500'>We provide pre-built and pre-designed components for your apps, these components are built using <span className='text-purple-500 font-semibold fixed-width whitespace-nowrap'><span className={className}>{text}</span></span> </p>
            <button className='bg-purple-500 px-20 text-xl text-white font-semibold mt-4 rounded-3xl py-2 lg:mt-6 xl:mt-10 2xl:mt-12'>Get started</button>
          </div>        
          <div className='hero-img lg:mt-12 hero-flex-2'>
            <img className='w-[100%]' src={heroMockup} alt="" />
            <div className='hidden lg:block absolute-svg lg:top-40 lg:left-[-155px] 2xl:left-[-215px] 2xl:top-48'>
                
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default Hero



