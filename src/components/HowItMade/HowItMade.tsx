import './HowItMade.css'
import img1 from '../../assets/infoImg1.png';
import img2 from '../../assets/infoImg2.png';
import img3 from '../../assets/infoImg3.png';
import img4 from '../../assets/infoImg4.png';
import img from '../../assets/made.png';
const HowItMade = () => {
  const cardInfo: any = [
    {
      id: 1,
      img: img1,
      heading: 'Corn Flour',
      info: 'Corn starch, maize starch, or corn flour is the starch derived from corn grains'

    },
    {
      id: 2,
      img: img2,
      heading: 'Soy flakes ',
      info: 'Soy flakes defatted soy flakes are further processed into soybean meal for feeding.'

    },
    {
      id: 3,
      img: img3,
      heading: 'Corn Flour',
      info: 'Corn starch, maize starch, or corn flour is the starch derived from corn grains'

    },
    {
      id: 4,
      img: img4,
      heading: 'Oats flakes',
      info: 'Oats flakes are white to golden in color and are used baking and processing into muesli.'

    },


  ]
  return (
    <>
      <div className='w-full px-4  lg:px-24 bg_img ' >


        <div className=' flex flex-col lg:flex-row items-center'>

          <div className='w-full lg:w-1/2' >
            <h2 className='text-5xl font-bold mb-8 text-[#f6dde1] leading-snug' >HOW IT'S MADE?
            </h2>

            <p className='md:w-4/5 text-2xl mb-8 text-[#f6dde1]' >
              A line of tasty and healthy specialties rich in fiber and vegetable protein baked specially for you and your loved ones, directly from the oven. Taste and See the wonders of Toronto Cupcakes.        </p>
            <div>
              <button className='bg-[#9e2859]   p-16 py-2 text-[#ebd2dd] rounded font-medium hover:bg-black hover:text-white transition-all ease-in duration-200'>Read More</button>
            </div>


          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {cardInfo.map((data: any) => (
              <div key={data.id} className="max-w-xs bg-transparent p-6 text-center">
                <div className="text-4xl text-blue-500 mb-4 flex justify-center items-center">
                  <img src={data.img} alt="Pie Img" className="w-28" />
                </div>
                <h2 className="text-2xl font-bold uppercase text-[#f5e4ea] mb-2">
                  {data.heading}
                </h2>
                <p className="text-[#e5dade] text-xl">{data.info}</p>
              </div>
            ))}
          </div>

        </div>

        <div className='w-full mb-8 bg padding rounded'>
          <div className='flex w-full flex-col md:flex-row justify-between items-center gap-122 '>
            <div className='md:w-2/4 space-y-8 h-full'>
              <h1 className='uppercase text-4xl mb-8 text-white'>One Dozen in One Click</h1>
              <hr className='mb-8 border-white' />
              <p className='text-white text-xl lg:text-2xl mb-4'>
                Step into our visual bakery and discover a world of flavors, textures, and homemade goodness.
              </p>
              <button className='mr-4 bg-black border-2 border-black p-4 px-6 py-2 text-white rounded font-medium hover:bg-transparent hover:text-black transition-all ease-in duration-200'>
                Add to Cart
              </button>
            </div>
            <div className=' lg:w-1/4 lg:order-1 mb-4 lg:mb-0'>
              <img src={img} className='w-full lg:w-3/4 mx-auto lg:mx-0 h-60' alt='img' />
            </div>
          </div>
        </div>
      </div> </>
  )

}
export default HowItMade
