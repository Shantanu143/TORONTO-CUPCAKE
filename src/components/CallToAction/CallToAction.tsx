
import pieImg from '../../assets/pie.png'
import freshImg from '../../assets/fresh.png'
import widImg from '../../assets/widget-add-light.svg'
const CallToAction = () => {

  const cardData = [
    {
      id: 1,
      img: pieImg,
      heading: "tasty",
      info: "Freshly made healthy for you and your loved ones directly from the oven",
    }, {
      id: 2,
      img: freshImg,
      heading: "FRESH",
      info: "Freshly made healthy for you and your loved ones directly from the oven...",
    }, {
      id: 1,
      img: widImg,
      heading: "Customize",
      info: "Themed birthdays or anniversaries are all the rage. From Cookie Monster to The Bachelorette we have done t...",
    }
  ]
  return (
    <div className='m-24'>


      <div className="flex justify-around ">

        {cardData.map((data) => {
          const { id, heading, info, img } = data;
          return (
            <div key={id} className="max-w-xs bg-white p-6 text-center">
              <div className="text-4xl text-blue-500 mb-4 flex justify-center items-center">
                <img src={img} alt='Pie Img' className='w-28' />
              </div>
              <h2 className="text-2xl font-bold uppercase text-[#aa4361] mb-2">
                {heading}
              </h2>
              <p className="text-[#6d3e4a] text-xl">
                {info}
              </p>
            </div>


          );
        })}


      </div>

    </div>
  )
}

export default CallToAction
