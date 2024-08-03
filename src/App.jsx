import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import PageTwo from './components/PageTwo';
const App = () => {
    const container = useRef();
    useGSAP(()=>{
      gsap.from(container.current,{
        rotate:360,
        scale:0,
        opacity:0,
        delay:1,
        duration:1
      })
    })
   
  return (
    <>
    <section className='w-full h-screen flex items-center m-auto gap-x-5 justify-center'>
      <div   className="container p-5 gap-y-5 flex-col border-2 rounded-3xl border-black w-[20%] flex items-center justify-center">
        <div className="circle w-[200px] h-[200px] rounded-full bg-lime-300"></div>
        <div ref={container}  className="box w-[200px] h-[200px] bg-red-500"></div>
      </div>
      <div className="kuch p-5 gap-y-5 flex-col  w-[20%] flex items-center justify-center">
      <div className="circle w-[200px] h-[200px] rounded-full bg-blue-400"></div>
      <div className="box w-[200px] h-[200px] bg-red-500"></div>
      </div>
    </section>
    <PageTwo/>
    </>
  )
}

export default App