import React from 'react'

const Hero = () => {
  return (
    <>
    <section id='#her0' className='noisy flex-center relative w-screen h-screen'>
        
<h1 className='  font-[modern-negra] [title] md:text-9xl text-3xl text-yellow max-w-40'>Mojito</h1>



<img
		 src="/images/hero-left-leaf.png"
		 alt="left-leaf"
		 className="absolute left-0 md:top-20 xl:top-36 2xl:top-52 md:bottom-auto -bottom-20 md:w-fit w-1/3"
		/>
		<img
		 src="/images/hero-right-leaf.png"
		 alt="right-leaf"
		 className="absolute right-0 md:bottom-0 xl:top-0 2xl:top-12 top-1/2 md:w-fit w-24"
		/>
    </section>
      
    </>
  )
}

export default Hero
