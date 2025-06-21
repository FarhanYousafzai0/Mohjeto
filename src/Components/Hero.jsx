import React from 'react'

const Hero = () => {
  return (
    <>
    <section id='#her0' className='noisy  relative w-screen h-screen'>
        
<h1 className='  xl:text-[18vw] text-[17vw] lg:text-[17vw] md:text-[15vw] font-bold text-white flex-center font-[modern-negra]  uppercase'>Mojito</h1>
 


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


		<div className='container mx-auto absolute left-1/2 -translate-x-1/2 lg:bottom-20 top-auto md:top-[30vh] flex justify-between items-end px-5'>

<div className='flex lg:flex-row flex-col w-full gap-10 justify-between items-center lg:items-end mx-auto'>

<div className='space-y-5 md:block hidden'>
 <p>Cool. Crisp. Classic.</p>
			 <p className="subtitle text-5xl leading-none font-[modern-negra] font-bold text-yellow">
				Sip the Spirit <br /> of Summer
			 </p>


</div>

<div className="space-y-5 text-lg lg:max-w-2xs md:max-w-xs w-full">
			 <p className="subtitle">
				Every cocktail on our menu is a blend of premium ingredients,
				creative flair, and timeless recipes — designed to delight your
				senses.
			 </p>
			 <a href="#cocktails">View cocktails</a>
			</div>

</div>

		</div>
    </section>
      
    </>
  )
}

export default Hero
