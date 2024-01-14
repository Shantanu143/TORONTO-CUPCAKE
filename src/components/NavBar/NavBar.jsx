import React, { useEffect, useState } from 'react';
import { FaBarsStaggered, FaXmark } from 'react-icons/fa6';



const NavBar = () => {

  const [toggle, setToggle] = useState(false);

  const [sticky, setSticky] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  }

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    }
  }, [])

  const navItems = [

    { link: "Home", path: "#" },
    { link: "Cupcakes", path: "#cupcakes" },
    { link: "Events", path: "#events" },
    { link: "About us", path: "#about" },
    { link: "Contact us ", path: "#contact" },
  ]
  return (
    <header className='w-full bg-transparent fixed  top-0 right-0 transition-all ease-in duration-300 '>


      <nav className={`px-4 lg:px-24 ${sticky ? 'sticky top-0 left-0 right-0 bg-blue-300' : ''}`}>

        <div className='flex justify-between items-center leading-[5rem] gap-8'>
          <div className='flex items-center gap-2'>
            logo
          </div>

          <ul className='md:flex space-x-12 hidden'>
            {navItems.map((data) => {
              const { link, path } = data;
              return (
                <a href={path} key={path}
                  className='block text-base text-black uppercase cursor-pointer hover:text-pink-500'
                > {link}</a>
              )
            })}

          </ul>
          <div className='space-x-12 hidden lg:flex item-center'>

            <button > <FaBarsStaggered className='w-5 hover:text-blue-700' /></button>
          </div>

          <div className='md:hidden' >
            <button onClick={handleToggle} className='text-black focus:outline-none' >
              {
                toggle ? <FaXmark className='h-5 w-5 text-black' /> : <FaBarsStaggered className='h-5 w-5 text-black' />
              }
            </button>
          </div>
        </div>

        <div className={`space-y-4 px-4 mt-12 py-7 bg-blue-700 ${toggle ? "block fixed top-0 right-0 left-0" : "hidden"}`} >

          {navItems.map((navInfo) => {
            const { path, link } = navInfo;
            return (
              <a
                key={path}
                href={path}
                className='block text-base text-white uppercase cursor-pointer' >
                {link}
              </a>
            )
          })}

        </div>
      </nav >
    </header >

  )
}

export default NavBar
