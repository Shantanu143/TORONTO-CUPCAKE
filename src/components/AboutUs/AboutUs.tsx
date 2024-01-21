import './AboutUs.css'
import bekar from '../../assets/bekar.png'
const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-around bg_about  md:flex-row md:items-stretch">
      {/* Left Side (Image) */}

      <div className="w-full md:w-1/2 flex items-center">
        <img className="w-96" src={bekar} alt="Image" />
      </div>

      {/* Right Side (Content) */}
      <div className="w-full md:w-1/2 mr-10 mt-10">
        <h1 className="text-5xl text-pink-200 uppercase font-bold mb-6">WHo WE Are</h1>
        <p className="text-[#F3DDE1] mb-10 ">Welcome to Toronto Cupcake. We believe in simple joy that a perfectly baked treat can bring. Step into our visual bakery and discover a world of flavors, textures and homemade goodness.</p>
        <button className='bg-[#9e2859]   p-16 py-2 text-[#ebd2dd] rounded font-medium hover:bg-black hover:text-white transition-all ease-in duration-200'>Read More</button>
      </div>
    </div>

  )
}

export default AboutUs
