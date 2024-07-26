import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
function App() {
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const buttonMenuRef = useRef(null);
  useEffect(() => {
    const menu=buttonMenuRef.current;
    const close=buttonRef.current;
    const tl=gsap.timeline();
    tl.to(menuRef.current,{
       right:0,
       duration:0.7
    })
    tl.to("#full h4",{
      y:-30,
      stagger:0.2
    })
    tl.to(buttonRef.current,{
      x:-30,
      duration:0.4
    })
    tl.pause();
    const handleMenuBar = () =>{
      tl.play();
    }
    const handleCloseBar = () =>{
      tl.reverse();
    }
    menu.addEventListener("click",handleMenuBar);
    close.addEventListener("click",handleCloseBar)
    return () => {
    menu.removeEventListener("click",handleMenuBar);
    close.removeEventListener("click",handleCloseBar)
    }
  }, [])
  
  return (
    <>
    <div className='main flex  items-center justify-between bg-black w-full h-14 p-10 font-[Whyte] text-white'>
      <div>
      <h1>Sheriyans</h1>
      </div>
      <div>
      <button ref={buttonMenuRef}><AiOutlineMenu/></button>
      </div>
    </div>
    <div id="full" ref={menuRef} className='w-[40%] py-40 right-[-40%] px-10 flex text-xl font-bold flex-col gap-y-5 text-white h-screen bg-black absolute top-0 '>
      <h4>About</h4>
      <h4>Work</h4>
      <h4>Services</h4>
      <h4>Play</h4>
      <button className='absolute top-5 right-5' ref={buttonRef}><AiOutlineClose/></button>
    </div>
    </>
  )
}

export default App