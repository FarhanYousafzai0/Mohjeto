import React, { useRef, useEffect } from 'react'
import { featureLists, goodLists } from '../constants'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useMediaQuery } from 'react-responsive'

gsap.registerPlugin(ScrollTrigger)

const Art = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  // Refs for animation targets
  const artRef = useRef(null)
  const titleRef = useRef(null)
  const leftListRef = useRef(null)
  const rightListRef = useRef(null)
  const cocktailImgRef = useRef(null)
  const maskedContainerRef = useRef(null)
  const maskedContentRef = useRef(null)

  // Initial entrance animation
  useGSAP(() => {
    // Animate the main title
    gsap.from(titleRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
      delay: 0.2,
    })

    // Animate the lists and image in stagger
    gsap.from(
      [leftListRef.current, cocktailImgRef.current, rightListRef.current],
      {
        y: 80,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power2.out',
        delay: 0.7,
      }
    )

    // Animate the masked container in
    gsap.from(maskedContainerRef.current, {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      delay: 1.2,
    })
  }, [])

  // Scroll-triggered mask and fade animation
  useGSAP(() => {
    const start = isMobile ? 'top 20%' : 'top top'

    const maskTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: artRef.current,
        start,
        end: 'bottom center',
        scrub: 1.5,
        pin: true,
      },
    })

    // Fade out the will-fade elements
    maskTimeline
      .to(
        artRef.current.querySelectorAll('.will-fade'),
        { opacity: 0, stagger: 0.2, ease: 'power1.inOut' },
        0
      )
      // Animate the cocktail image scale and mask
      .to(
        cocktailImgRef.current.querySelector('img'),
        {
          scale: 1.3,
          maskPosition: 'center',
          maskSize: '500%',
          duration: 1,
          
          ease: 'power1.inOut',
        },
        '-=0.5'
      )
      // Reveal the masked content
      .to(
        maskedContentRef.current,
        { opacity: 1, duration: 1, ease: 'power1.inOut' },
        '-=0.5'
      )
      // Extra animation: pulse the masked content for emphasis
      .to(
        maskedContentRef.current,
        { scale: 1.05, yoyo: true, repeat: 1, duration: 0.3, ease: 'power1.inOut' },
        '+=0.2'
      )
  }, [isMobile])

  return (
    <>
      {/* Main Art Section */}
      <div
        id="art"
        ref={artRef}
        className="flex-center flex-col min-h-dvh p-5 mt-20 relative radial-gradient"
      >
        <div className="container mx-auto h-full">
          {/* Title */}
          <h2
            ref={titleRef}
            className="will-fade relative md:text-[20vw] text-8xl text-nowrap leading-none font-modern-negra text-center text-[#505050] mb-8 font-semibold"
          >
            The <span className="uppercase">Art</span>
          </h2>

          {/* Content Row */}
          <div className="content flex lg:flex-row flex-col w-full gap-10 justify-between items-center lg:items-end mx-auto">
            {/* Left List */}
            <ul
              ref={leftListRef}
              className="space-y-4 will-fade"
            >
              {goodLists.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <img src="/images/check.png" alt="check" />
                  <p>{feature}</p>
                </li>
              ))}
            </ul>
            {/* Cocktail Image */}
            <div
              className="cocktail-img"
              ref={cocktailImgRef}
            >
              <img
                src="/images/under-img.jpg"
                alt="cocktail"
                className="abs-center masked-img size-[60%] mt-5 object-contain rounded-xl"
              />
            </div>
            {/* Right List */}
            <ul
              ref={rightListRef}
              className="space-y-4 will-fade"
            >
              {featureLists.map((feature, index) => (
                <li key={index} className="flex items-center justify-start gap-2">
                  <img src="/images/check.png" alt="check" />
                  <p className="md:w-fit w-60">{feature}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Masked Container */}
          <div
            className="masked-container"
            ref={maskedContainerRef}
          >
            <h2 className="will-fade text-4xl md:text-5xl font-modern-negra text-center mb-10 text-white mt-32">
              Sip-Worthy Perfection
            </h2>
            <div
              id="masked-content"
              ref={maskedContentRef}
              style={{ opacity: 0, transform: 'translateY(40px)' }}
              className="md:px-0 px-5 space-y-0 absolute md:bottom-0  bottom-52 left-1/2 -translate-x-1/2"
            >
              <h3 className="md:text-5xl text-2xl text-center font-serif md:w-full w-80 text-white">
                Made with Craft, Poured with Passion
              </h3>
              <p className="text-lg text-center">
                This isn’t just a drink. It’s a carefully crafted moment made just for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Art