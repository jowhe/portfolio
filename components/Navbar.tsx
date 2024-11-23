"use client"

import React from 'react'
import Link from 'next/link';
import SearchForm from './SearchForm';
import DarkLightDropdown from './DarkLightDropdown';


const Navbar = () => {
  return (
    <>
      <section className="container border border-t-0 mx-auto py-3 px-6 z-10">
        <nav className="flex flex-col md:flex-row justify-between">
          <div className='flex flex-col md:flex-row w-full md:w-1/3 '>
            <Link
              href="/"
              className="text-2xl mr-4"
            >Joe</Link>
          </div>
          <div className="md:float-end md:w-1/3">
            <span className="flex justify-between md:justify-evenly w-full">
              <SearchForm />
              <DarkLightDropdown />
            </span> 
          </div>
        </nav>
      </section>
    </>
  )
}

export default Navbar