import React from 'react'
import Dark from "../images/image-about-dark.jpg";
import Light from "../images/image-about-light.jpg";


const Section = () => {
  return (
    <>
    <section className='grid grid-cols-1 lg:grid-cols-3 '>
      <article >
        <img src={Dark} alt="dark" className='w-full' />
      </article>
      <article className='p-8 lg:p-12'>
        <h2 className='font-semibold text-2xl lg:text-3xl uppercase ' style={{letterSpacing : "0.2rem"}}>ABOUT OUR FURNITURE</h2>
        <p className='text-slate-900 opacity-75 mt-6'>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p>
      </article>
      <article>
        <img src={Light} alt="light" className='w-full' />
      </article>
    </section>
    <div className="text-center mt-3 bg-black text-gray-100 w-full flex-3">
        <h1 className='py-2'>Challenge by Frontend Mentor. Coded by Vivek Rajput</h1>
      </div>
    </>
    
  )
}

export default Section