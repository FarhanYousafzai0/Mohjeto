import React, { useRef } from 'react';
import { navLinks } from '../constants';
import gsap from 'gsap';

import { useGSAP } from '@gsap/react';


const Nav = () => {
  const navRef = useRef();

  useGSAP(() => {
    const navTwen = gsap.timeline({
      scrollTrigger: {
        trigger: navRef.current,
        start: 'top top',
        end: 'bottom+=100 top',
        scrub: true,
      },
    });

    navTwen.fromTo(
      navRef.current,
      {
        backgroundColor: 'transparent',
        backdropFilter: 'blur(0px)',
      },
      {
        backgroundColor: '#00000050',
        backdropFilter: 'blur(10px)',
        duration: 0.5,
        ease: 'power2.out',
      }
    );
  }, []);

  return (
    <nav
      ref={navRef}
      className="p-4  flex items-center justify-between fixed top-0 left-0 w-full z-50 text-white transition-all duration-300"
    >
      {/* Logo */}
      <a href="#nav" className="flex items-center gap-2 text-2xl md:text-3xl">
        <img src="/images/logo.png" alt="Logo" className="w-8 h-8 object-contain" />
      Alchemy Bar
      </a>

      {/* Navigation Links */}
      <ul className="flex gap-6 font-medium ">
        {navLinks.map((link) => (
          <li key={link.id} className=" transition-colors duration-200 cursor-pointer md:block hidden">
            <a href={`#${link.id}`}>{link.title}</a>
              
          </li>
        ))}
         <div className='  flex gap-1 cursor-pointer items-end text-black flex-col justify-center md:hidden  rounded-full'>

         <span className='w-4 rounded h-[4px] bg-white'></span>

         <span className='w-8 rounded h-[4px] bg-white'></span>
         <span className='w-12 rounded h-[4px] bg-white'></span>
         </div>
      </ul>

   
    </nav>
  );
};

export default Nav;
