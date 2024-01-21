import { useEffect, useState } from 'react';
import { FaBarsStaggered, FaXmark } from 'react-icons/fa6';

import headerLogo from '../../assets/torentoLogo.png'

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


      <nav className={`px-4 lg:px-24 ${sticky ? 'sticky top-0 left-0 right-0 bg-[#75565d]' : ''}`}>

        <div className='flex justify-between items-center leading-[5rem] gap-8'>
          <div className='flex items-center gap-2'>
            <img src={headerLogo} className='h-20 my-4' alt=' header logo' />
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
            <button ><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1C2.10665 1.40667 3.62397 1.72267 4.30662 2.764C4.78128 3.49067 4.78128 4.45467 4.78128 6.384V10.0133C4.78128 13.936 4.86262 15.2293 5.9706 16.448C7.07725 17.6667 8.86123 17.6667 12.4265 17.6667H19.2064C22.7611 17.6667 23.5317 16.8653 24.2144 13.4093C24.513 11.9027 24.8144 10.4147 24.9664 8.912C25.2544 6.06667 23.669 5.16 21.1451 5.16H4.78128M18.9998 25C19.5302 25 20.0389 24.7893 20.414 24.4142C20.789 24.0391 20.9997 23.5304 20.9997 23C20.9997 22.4696 20.789 21.9609 20.414 21.5858C20.0389 21.2107 19.5302 21 18.9998 21C18.4693 21 17.9606 21.2107 17.5856 21.5858C17.2105 21.9609 16.9998 22.4696 16.9998 23C16.9998 23.5304 17.2105 24.0391 17.5856 24.4142C17.9606 24.7893 18.4693 25 18.9998 25ZM8.33324 25C8.86366 25 9.37237 24.7893 9.74743 24.4142C10.1225 24.0391 10.3332 23.5304 10.3332 23C10.3332 22.4696 10.1225 21.9609 9.74743 21.5858C9.37237 21.2107 8.86366 21 8.33324 21C7.80281 21 7.29411 21.2107 6.91904 21.5858C6.54398 21.9609 6.33326 22.4696 6.33326 23C6.33326 23.5304 6.54398 24.0391 6.91904 24.4142C7.29411 24.7893 7.80281 25 8.33324 25Z" stroke="#070707" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            </button>
            <button >
              <svg width="23" height="29" viewBox="0 0 23 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.5 11.5C14.3995 11.5 16.75 9.1495 16.75 6.25C16.75 3.3505 14.3995 1 11.5 1C8.6005 1 6.25 3.3505 6.25 6.25C6.25 9.1495 8.6005 11.5 11.5 11.5Z" stroke="#070707" stroke-width="2" />
                <path d="M22 21.3438C22 24.6053 22 27.25 11.5 27.25C1 27.25 1 24.6053 1 21.3438C1 18.0822 5.70137 15.4375 11.5 15.4375C17.2986 15.4375 22 18.0822 22 21.3438Z" stroke="#070707" stroke-width="2" />
              </svg>
            </button>
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
