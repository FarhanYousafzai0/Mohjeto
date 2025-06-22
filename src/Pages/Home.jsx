import React from 'react'
import Nav from '../Components/Nav'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Cooktail from '../Components/Cooktail'
import Footer from '../Components/Footer'



const Home = () => {
  return (
    <>
<main className='w-full overflow-x-hidden' >
<Nav/>
<Hero/>
<Cooktail/>
<About/>
<Footer/>
</main>
      
    </>
  )
}

export default Home
