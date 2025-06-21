import React from 'react'
import { cocktailLists, mockTailLists } from '../constants'

const Cooktail = () => {
  return (
    <>
    
    <section className='noisy w-screen md:h-screen min-h-0   p-10 relative overflow-hidden' id='#cooktail'>
 {/* <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id="c-left-leaf" />
	 <img src="/images/cocktail-right-leaf.png" alt="r-leaf" id="c-right-leaf" /> */}



     <div className='container  h-full mx-auto relative z-10 flex md:flex-row flex-col justify-between items-start gap-20 pt-40 2xl:px-0 px-5'>

<div className=" popular space-y-8  md:w-1/2 ">
		 <h2>Most popular cocktails:</h2>
		 
		 <ul>
			{cocktailLists.map(({ name, country, detail, price }) => (
			 <li key={name} className='flex items-center'>
				<div className="md:me-28">
				 <h3 className='text-2xl text-yellow'>{name}</h3>
				 <p>{country} | {detail}</p>
				</div>
				<span>- {price}</span>
			 </li>
			))}
		 </ul>
		</div>
		
		<div className="loved space-y-8 w-full md:w-1/3 pb-20 md:pb-0">
		 <h2>Most loved mocktails:</h2>
		 
		 <ul>
			{mockTailLists.map(({ name, country, detail, price }) => (
			 <li key={name} className='flex items-center justify-between'>
				<div className="">
				 <h3 className='text-2xl text-yellow'>{name}</h3>
				 <p>{country} | {detail}</p>
				</div>
				<span>- {price}</span>
			 </li>
			))}
		 </ul>
		</div>



     </div>




    </section>
    
    
    </>
  )
}

export default Cooktail