import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

function App() {
  const honeRef = useRef(null);
  
  useEffect(() => {
    const h1 = honeRef.current;
    const text = h1.textContent;
    const half=text.length/2;
    let clutter = '';
    text.split('').forEach((item, idx) => {
      if(idx>half)
      {
        clutter += `<span class="a" style="display: inline-block;">${item}</span>`;
      }
      else
      {
        clutter += `<span class="b" style="display: inline-block;">${item}</span>`;
      }
    });
    
    h1.innerHTML = clutter;
    
    gsap.to(".hello h1 span.a", {
      y: -50,
      stagger: 0.2,
      duration: 0.5,
      ease: 'power1.out',
    });
    gsap.to(".hello h1 span.b", {
      y: -50,
      stagger: -0.2,
      duration: 0.5,
      ease: 'power1.out',
    });

  }, []);
  
  return (
    <div className='flex hello items-center text-white justify-center w-full h-screen bg-[#111]'>
      <h1 ref={honeRef} className='text-[6vw] font-[Whyte] w-full h-full flex items-center justify-center'>Sheriyans</h1>
    </div>
  );
}

export default App;
