import React from 'react'
import { cocktailLists, mockTailLists } from '../constants'

const Cooktail = () => {
  return (
    <>
    
    <section className='noisy w-screen h-screen relative overflow-hidden' id='#cooktail'>
 {/* <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id="c-left-leaf" />
	 <img src="/images/cocktail-right-leaf.png" alt="r-leaf" id="c-right-leaf" /> */}



     <div className='container mx-auto relative z-10 flex md:flex-row flex-col justify-between items-start gap-20 pt-40 2xl:px-0 px-5'>

<div className="popular">
		 <h2>Most popular cocktails:</h2>
		 
		 <ul>
			{cocktailLists.map(({ name, country, detail, price }) => (
			 <li key={name}>
				<div className="md:me-28">
				 <h3>{name}</h3>
				 <p>{country} | {detail}</p>
				</div>
				<span>- {price}</span>
			 </li>
			))}
		 </ul>
		</div>
		
		<div className="loved">
		 <h2>Most loved mocktails:</h2>
		 
		 <ul>
			{mockTailLists.map(({ name, country, detail, price }) => (
			 <li key={name}>
				<div className="me-28">
				 <h3>{name}</h3>
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