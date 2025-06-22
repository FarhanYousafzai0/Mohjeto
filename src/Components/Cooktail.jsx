import React, { useRef } from 'react';
import { cocktailLists, mockTailLists } from '../constants';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Cocktail = () => {
  const sectionRef = useRef();
  const popularRef = useRef();
  const lovedRef = useRef();

  useGSAP(() => {
    // Section Fade In
    gsap.from(sectionRef.current, {
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 85%',
        end: 'top 30%',
        scrub: false,
      },
    });

    // Popular Cocktails List Animation
    gsap.from(popularRef.current.querySelectorAll('li'), {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: popularRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reset',
      },
    });

    // Loved Mocktails List Animation
    gsap.from(lovedRef.current.querySelectorAll('li'), {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      delay: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: lovedRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reset',
      },
    });

    // Leaf Animations Timeline
    const leafTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#cocktails',
        start: 'top 30%',
        end: 'bottom 80%',
        scrub: true,
        toggleActions: 'play none none reset'
      }
    });

    // Animate both leaves together
    leafTimeline.from('#c-left-leaf',{
        x: -100, y: 100,
        opacity:0,
        stagger:0.06
    }
    
      
    );


     leafTimeline.from('#c-right-leaf',{
        x: 100, y: 100,
        opacity:0,
         stagger:0.06
     }
      
      
    );

  }, []);

  return (
    <section
      ref={sectionRef}
      className="noisy cooktail w-screen md:h-screen min-h-0 p-10 relative overflow-hidden"
      id="cocktails"
    >
      <img
        src="/images/cocktail-left-leaf.png"
        alt="left leaf"
        id="c-left-leaf"
        className="absolute left-0 md:bottom-0 md:top-auto -top-20 md:w-fit w-1/3"
      />
      <img
        src="/images/cocktail-right-leaf.png"
        alt="right leaf"
        id="c-right-leaf"
        className="absolute right-0 md:bottom-0 md:top-auto -top-20 md:w-fit w-1/3"
      />
      
      <div className="container h-full mx-auto relative z-10 flex md:flex-row flex-col justify-between items-start gap-20 pt-40 2xl:px-0 px-5">
        {/* Popular Cocktails */}
        <div ref={popularRef} className="popular space-y-8 md:w-1/3">
          <h2 className="text-3xl font-bold font-serif text-white">Most Popular Cocktails:</h2>
          <ul className="space-y-4">
            {cocktailLists.map(({ name, country, detail, price }) => (
              <li key={name} className="flex items-center justify-between">
                <div className="md:me-28">
                  <h3 className="text-2xl text-yellow font-modern-negra">{name}</h3>
                  <p className="text-sm">
                    {country} | {detail}
                  </p>
                </div>
                <span className="text-white">- {price}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Loved Mocktails */}
        <div ref={lovedRef} className="loved space-y-8 w-full md:w-1/3 pb-20 md:pb-0">
          <h2 className="text-3xl font-bold font-serif text-white">Most Loved Mocktails:</h2>
          <ul className="space-y-4">
            {mockTailLists.map(({ name, country, detail, price }) => (
              <li key={name} className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl text-yellow font-modern-negra">{name}</h3>
                  <p className="text-sm">
                    {country} | {detail}
                  </p>
                </div>
                <span className="text-white">- {price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktail;