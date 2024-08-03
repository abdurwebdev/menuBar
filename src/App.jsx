import React, { useState, useEffect } from 'react';
import gsap from 'gsap';

const App = () => {
  const [circles, setCircle] = useState(0);
  const random = gsap.utils.random(-500, 500, 50);

  useEffect(() => {
    gsap.to('.circle', {
      x: circles,
      duration: 1,
    });
  }, [circles]);

  return (
    <>
    <div className="w-full h-screen flex-col gap-y-5 flex items-center justify-center text-white bg-[#111]">
      <button
        onClick={() => {
          setCircle(random);
          console.log("hello");
          
        }}
        className="rounded-3xl text-2xl px-10 py-5 text-white bg-yellow-300"
      >
        Animate
      </button>
      <div className="circle w-[200px] h-[200px] rounded-full bg-green-400"></div>
    </div>
    </>
  );
};

export default App;
