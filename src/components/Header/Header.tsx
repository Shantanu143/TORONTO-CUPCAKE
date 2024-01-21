import './header.css'
import cupcakeImg from '../../assets/cupcakeImg.png'
const Header = () => {
  return (
    <div className='px-4 lg:px-24 bg_color flex items-center'>
      <div className='flex w-full flex-col md:flex-row justify-between items-center gap-122 py-40' >

        <div className='md:w-2/4 space-y-8 h-full' >

          <h2 className='text-5xl font-bold leading-snug text-black' >BAKED WITH LOVE, SERVED WITH A
            <span className='text-[#aa4361]'> SMILE</span>
          </h2>

          <p className='md:w-4/5 text-2xl text-[#6d3e4a]' >
            Whether it's the comforting oroma of freshly baked bread or the sweetness of a decadent cupcake, our ovens work tirelessly to create moments of pure delight for you

          </p>
          <div>
            <button className=' mr-4 bg-black border-2  border-black p-4 px-6 py-2 text-white rounded font-medium hover:bg-transparent hover:text-black transition-all ease-in duration-200'>Order Now</button>
            <button className='bg-transparent border-2   border-black p-4 px-6 py-2 text-black rounded font-medium hover:bg-black hover:text-white transition-all ease-in duration-200'>Browse All Produts</button>
          </div>

        </div>

        <div className='md:w-1/3 h-full' >
          <img src={cupcakeImg} alt='cupcakeImg' />
        </div>
      </div>
    </div>
  )
}

export default Header
