import React from 'react'
import Navbar from '../components/Navbar'
import TeamSection from '../components/TeamSection'
import Footer from '../components/Footer'
import Testimonials from '../components/Testimonials'

export default function App() {
  return (
    <div>
      <div className='cursor-pointer shadow-lg shadow-slate-700 fixed right-10 bottom-10 bg-white border-black border-2 rounded h-20 w-36 z-10 flex justify-center items-center'>
        <p>Know about <br /> current Event</p>
      </div>
      <Navbar/>
      <TeamSection/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}
