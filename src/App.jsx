import React from 'react'
import Home from './Pages/Home'
import './global.css'
import { ScrollTrigger,SplitText } from 'gsap/all'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger,SplitText);


const App = () => {
  return (
    <>
    <Home/>
   </>
  )
}

export default App
