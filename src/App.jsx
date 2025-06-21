import React from 'react';
import Home from './Pages/Home';
import './global.css';
import { ScrollTrigger, SplitText } from 'gsap/all';
import gsap from 'gsap';
import { ReactLenis, useLenis } from 'lenis/react';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
 
  useLenis((lenis) => {
    ScrollTrigger.update(); // keep GSAP synced with Lenis
  });

  return (
    <ReactLenis
      root // required for full app scroll smoothing
      options={{
        duration: 1, // adjust scroll speed (default: 1.2)
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // elastic easing
        smooth: true,
        smoothTouch: false,
      }}
    >
      <Home />
    </ReactLenis>
  );
};

export default App;
