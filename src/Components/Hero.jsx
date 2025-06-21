import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import Magnetic from './Magnetic';
import { useMediaQuery } from 'react-responsive';

gsap.registerPlugin(ScrollTrigger, SplitText);

const Hero = () => {



	const videoRef = useRef();


 const isMobile = useMediaQuery({ maxWidth: 767 });


  useGSAP(() => {
    const heroSplit = new SplitText('.title', { type: 'chars,words' });
    const subSplit = new SplitText('.subtitle', { type: 'lines,words' });

    heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));

    gsap.from(heroSplit.chars, {
      yPercent: 50,
      stagger: 0.05,
      duration: 1.4,
      ease: 'expo.out',
    });

    gsap.from(subSplit.lines, {
      opacity: 0,
      yPercent: 80,
      stagger: 0.06,
      delay: 1,
      duration: 0.7,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#hero',
          start: "top top",
		end: "bottom top",
          scrub: true,
        },
      })
      .to('.right-leaf', { yPercent: 100 }, 0)
      .to('.left-leaf', { yPercent: -100 }, 0);



const startValue = isMobile ? "top 50%" : "center 60%";
	const endValue = isMobile ? "120% top" : "bottom top";

	let tl = gsap.timeline({
	 scrollTrigger: {
		trigger: "video",
		start: startValue,
		end: endValue,
		scrub: true,
		pin: true,
	 },
	});
	
	videoRef.current.onloadedmetadata = () => {
	 tl.to(videoRef.current, {
		currentTime: videoRef.current.duration,
		
	 });
	};
  }, []);

  return (
   <> <section id="hero" className="noisy     overflow-hidden">
      <h1 className="title flex-center md:mt-10 mt-20 xl:text-[18vw] text-[12vw] lg:text-[17vw] md:text-[15vw] font-bold text-white text-center font-[modern-negra] uppercase">
       Citrino
      </h1>

      {/* LEFT Leaf */}
      <img
        src="/images/hero-left-leaf.png"
        alt="left-leaf"
        className="left-leaf absolute left-0 md:top-20 xl:top-36 2xl:top-52 md:bottom-auto -bottom-20 md:w-fit w-1/3 pointer-events-none"
      />

      {/* RIGHT Leaf */}
      <img
        src="/images/hero-right-leaf.png"
        alt="right-leaf"
        className="right-leaf absolute right-0 md:bottom-0 xl:top-0 2xl:top-12 top-1/2 md:w-fit w-24 pointer-events-none"
      />

      <div className="container mx-auto absolute left-1/2 -translate-x-1/2 lg:bottom-20 top-auto md:top-[30vh] flex justify-between items-end px-5">
        <div className="flex lg:flex-row flex-col w-full gap-10 justify-between items-center lg:items-end mx-auto">
          <div className="space-y-5 md:block hidden subtitle">
            <p>Cool. Crisp. Classic.</p>
            <p className="text-5xl leading-8 font-[modern-negra] font-bold text-yellow">
              Sip the Spirit <br /> of Summer
            </p>
          </div>

          <div className="space-y-5 text-lg lg:max-w-2xs md:max-w-xs w-full">
            <p className="subtitle md:mt-0 mt-10">
              Every cocktail on our menu is a blend of premium ingredients,
              creative flair, and timeless recipes — designed to delight your
              senses.
            </p>

            <Magnetic>
              <a
                href="#cocktails"
                className="subtitle inline-block py-3 px-6 rounded-full hover:border-2 hover:border-white text-white font-medium tracking-wide   transition-colors duration-300"
              >
                View Cocktails
              </a>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
	
	<div className='w-full video md:h-[100%]  absolute  bottom-0 left-0 md:object-contain  object-cover'>

<video
		 ref={videoRef}
		 muted
		 playsInline
		 preload="auto"
		 src="/videos/output.mp4"
		/>

	</div>
	</>
  );
};

export default Hero;
