
import { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './OurMenu.css';

// import required modules
import { Navigation } from 'swiper/modules';

//img that required

import cup1 from '../../assets/cupcake1.jpeg';
import cup2 from '../../assets/cupcake2.jpeg';
import cup3 from '../../assets/cupcake3.jpeg';
import cup4 from '../../assets/cupcake4.jpeg';
interface NavItem {
  id: number;
  label: string;
}

const OurMenu = () => {
  const cardData: any = [
    {
      id: 1,
      img: cup1,
      title: 'Vanilla Lemon',
      description: 'Decadent Chocolate Cake infused With Fudge Buttercream',
    }, {
      id: 2,
      img: cup2,
      title: 'Vanilla Lemon',
      description: 'Decadent Chocolate Cake infused With Fudge Buttercream',
    }, {
      id: 3,
      img: cup3,
      title: 'Vanilla Lemon',
      description: 'Decadent Chocolate Cake infused With Fudge Buttercream',
    }, {
      id: 4,
      img: cup4,
      title: 'Vanilla Lemon',
      description: 'Decadent Chocolate Cake infused With Fudge Buttercream',
    },
  ]

  const [activeNavItem, setActiveNavItem] = useState<number | null>(null);

  const navItems: NavItem[] = [
    { id: 1, label: 'All' },
    { id: 2, label: 'Special Events' },
    { id: 3, label: 'Individual Flavors' },
    { id: 4, label: 'Populer Cupcakes' },
  ];

  const handleNavItemClick = (id: number) => {
    setActiveNavItem(id);
  };
  return (
    <>
      <div className='m-40'>

        <h1 className='text-5xl uppercase text-center font-bold mb-20'>Our menu</h1>

        <div className="flex justify-around mb-20  p-4">
          {navItems.map((navItem) => (
            <a
              key={navItem.id}
              href="#"
              className={`text-black cursor-pointer ${activeNavItem === navItem.id ? 'border-b-2 border-black' : ''
                }`}
              onClick={() => handleNavItemClick(navItem.id)}
            >
              {navItem.label}
            </a>
          ))}
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}

          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 60,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >


          {
            cardData.map((data: any) => {
              const { img, title, id, description } = data;
              return (
                <SwiperSlide key={id}>
                  <div className='max-w-md mx-auto bg-transparent hover:border-2 hover:border-[#9d2d5a] rounded-3xl swiper-card flex items-center flex-col justify-center overflow-hidden '>
                    <img className=" object-cover !w-32 !h-32 text-center" src={img} alt="Card" />
                    <div className="p-4">
                      <h2 className="text-xl text-[#554c4c] font-bold mb-2">{title}</h2>
                      <p className="text-[#9f868d] mb-4">{description}</p>
                      <button className="bg-[#9d2d5a] text-[#d9abbe] px-4 py-2 rounded hover:bg-transparent border-2 border-[#9d2d5a] hover:text-[#9d2d5a]">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </SwiperSlide>);
            })
          }
          <div className='m-10 flex justify-between'>
            <div className="swiper-button-prev">
              <div className="border-2 border-[#9d2d5a] ounded p-3">
                <FaArrowLeft className='text-[#9d2d5a] ' />
              </div>
            </div>


            <div className="swiper-button-next ">

              <div className="border-2  border-[#9d2d5a] rounded p-3">
                <FaArrowRight className='text-[#9d2d5a]' />
              </div>

            </div>
          </div>
        </Swiper >
      </div>
    </>
  )
}

export default OurMenu
