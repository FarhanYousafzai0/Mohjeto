import React, { useRef } from 'react';
import Magnetic from './Magnetic';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import gsap from 'gsap';
const About = () => {
  const textRef = useRef();




  useGSAP(() => {
	const titleSplit = SplitText.create('#about h2', {
	 type: 'words'
	})
	
	const scrollTimeline = gsap.timeline({
	 scrollTrigger: {
		trigger: '#about',
		start: 'top center'
	 }
	})
	
	scrollTimeline
	 .from(titleSplit.words, {
		opacity: 0, duration: 1, yPercent: 100, ease: 'expo.out', stagger: 0.02
	})
	 .from('.top-grid div, .bottom-grid div', {
		opacity: 0, duration: 1, ease: 'power1.inOut', stagger: 0.04,
	}, '-=0.5')
 })

  return (
    <div id="#about" className="relative p-10">
      {/* Top Content */}
      <div className="md:flex md:flex-row flex-col items-center justify-between mt-20">
        <div className="text-start">
          <Magnetic>
            <button className="p-3 bg-white cursor-pointer text-black rounded-md">
              Best Cocktails
            </button>
          </Magnetic>

          <h2
            ref={textRef}
            className="md:text-5xl text-3xl text-gray-400 max-w-md mt-5 font-[modern-negra] -leading-5 font-bold"
          >
            Where every detail matters – from muddle to garnish
          </h2>
        </div>

        <div>
          <p className="max-w-md text-[1.2rem] md:mt-0 mt-4">
            Every cocktail we serve is a reflection of our obsession with detail — from the first
            muddle to the final garnish. That care is what turns a simple drink into something
            truly memorable.
          </p>

          <div className="mt-4">
            <p className="font-bold text-4xl">
              <span className="text-yellow text-5xl">4.5</span>/
              <span className="text-2xl">5</span>
            </p>
            <p className="text-sm mt-2 text-white-100">More than +12000 customers</p>
          </div>
        </div>
      </div>

      {/* First Grid */}
      <div className="top-grid w-full mt-10 px-5 md:px-10 py-0 grid grid-cols-1 md:grid-cols-12 gap-6 place-content-center relative overflow-hidden">
        {/* Left Image */}
        <div className="md:col-span-3 rounded-3xl overflow-hidden relative group">
          <div className="noisy absolute inset-0 z-10" />
          <img
            src="/images/abt1.png"
            alt="grid-img-1"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Center Image */}
        <div className="md:col-span-6 rounded-3xl overflow-hidden relative group">
          <div className="noisy absolute inset-0 z-10" />
          <img
            src="/images/abt2.png"
            alt="grid-img-2"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Right Image */}
        <div className="md:col-span-3 rounded-3xl overflow-hidden relative group">
          <div className="noisy absolute inset-0 z-10" />
          <img
            src="/images/abt5.png"
            alt="grid-img-5"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Second Grid */}
      <div className="bottom-grid w-full px-5 md:px-10 py-10 grid grid-cols-1 md:grid-cols-12 gap-6 place-content-center relative">
        <div className="md:col-span-8 rounded-3xl overflow-hidden h-80 relative group">
          <div className="noisy absolute inset-0 z-10" />
          <img
            src="/images/abt3.png"
            alt="grid-img-3"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="md:col-span-4 rounded-3xl overflow-hidden h-80 relative group">
          <div className="noisy absolute inset-0 z-10" />
          <img
            src="/images/abt4.png"
            alt="grid-img-4"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
