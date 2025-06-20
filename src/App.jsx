import React from 'react'
import Home from './Pages/Home'
import './App.css'
import { ScrollTrigger,SplitText } from 'gsap/all'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger,SplitText);


const App = () => {
  return (
    <>
   <div className='w-screen h-screen bg-amber-500 flex-center text-8xl '>Hello,Gsap</div>
    </>
  )
}

export default App
