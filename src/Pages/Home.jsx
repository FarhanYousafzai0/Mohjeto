import React from 'react'
import Nav from '../Components/Nav'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Cooktail from '../Components/Cooktail'
import Footer from '../Components/Footer'
import Art from '../Components/Art'
import Menu from '../Components/Menu'
import Contact from '../Components/Contact'




const Home = () => {
  return (
    <>
<main className='w-full overflow-x-hidden' >


<Nav/>
<Hero/>
<Cooktail/>
<About/>
<Art/>
<Menu/>
<Contact/>
</main>
      
    </>
  )
}

export default Home
