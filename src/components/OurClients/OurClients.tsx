import React from 'react'
import ibm from '../../assets/ibm.png';
import spotify from '../../assets/spotify.png';
import coca from '../../assets/coca.png';
import tvs from '../../assets/tvs.png';
import linkedIn from '../../assets/linkendIn.png';


const OurClients = () => {
  return (
    <div className='m-24'>
      <section className="flex items-center flex-col h-full sm:h-auto p-4 md:p-8">
        {/* Heading */}

        <h2 className="text-3xl md:text-5xl uppercase font-bold mb-4">Our Clients</h2>
        {/* Small Horizontal Line */}
        <div className="!w-48 md:w-20 border-t-2 border-[#9e2859] mb-4"></div>

        {/* Paragraph */}
        <p className="text-[#75565d] text-center my-10">
          Our Graphics Department will work with you to reproduce Logos, Icons, Slogans , etc on an edible fondant disc or hand pressed lettering on a fondant disc. Our frostings can be made to mimic your theme colours or to use as a neutral backdrop. </p>

        {/* Images Row */}
        <div className="flex flex-wrap gap-4 md:flex-row md:flex-nowrap my-10">
          <img className="w-1/2 md:w-1/5 h-16  " src={ibm} alt="Image 1" />
          <img className="w-1/2 md:w-1/5 h-16 " src={linkedIn} alt="Image 2" />
          <img className="w-1/2 md:w-1/5 h-16 " src={spotify} alt="Image 3" />
          <img className="w-1/2 md:w-1/5 h-16  " src={coca} alt="Image 4" />
          <img className="w-1/2 md:w-1/5 h-16 " src={tvs} alt="Image 5" />
        </div>

        {/* Button */}

        <button className='bg-[#9e2859] my-10  p-16 py-2 text-[#ebd2dd] rounded font-medium hover:bg-black hover:text-white transition-all ease-in duration-200'>Read More</button>


        {/* Larger Horizontal Line */}
        <div className="w-full border-t-2 border-[#9e2859]  my-10"></div>

        <h2 className="text-3xl md:text-5xl uppercase font-bold my-10">JOIN NEWSLETTER</h2>
        <div className="!w-48 md:w-20 border-t-2 border-[#9e2859] mb-6"></div>
        {/* Email Input and Button Row */}
        <div className="flex flex-col md:flex-row items-center my-10" >
          <input
            type="email"
            className="border-2 border-black px-4 py-2 mb-2 md:mb-0 w-full md:w-auto rounded-tl rounded-bl"
            placeholder="Enter Your Email ID"
          />
          <button className='bg-black border-2 uppercase border-black p-4 px-6 py-2 text-white rounded-tr rounded-br mr-4 hover:bg-transparent hover:text-black transition-all ease-in duration-200'>
            Subscribe Now
          </button> </div>
      </section>
    </div>
  )
}

export default OurClients
