import NavBar from '../../components/NavBar/NavBar'
import Header from '../../components/Header/Header'
import CallToAction from '../../components/CallToAction/CallToAction'
import HowItMade from '../../components/HowItMade/HowItMade'
import OurMenu from '../../components/OurMenu/OurMenu'
import AboutUs from '../../components/AboutUs/AboutUs'
import OurClients from '../../components/OurClients/OurClients'
import Footer from '../../components/Footer/Footer.tsx'
const Home = () => {
  return (
    <>
      <NavBar />
      <Header />
      <CallToAction />
      <HowItMade />
      <OurMenu />
      <AboutUs />
      <OurClients />
      <Footer />
    </>
  )
}

export default Home
