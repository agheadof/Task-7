import Reviews from "@/components/Reviews"
import AboutHero from "./(aboutComponents)/AboutHero"
import AboutStats from "./(aboutComponents)/AboutStats"
import Advantages from "./(aboutComponents)/Advantages"
import Footer from "@/components/Footer"
import AuthModal from "../(auth)/AuthModal"

const About = () => {
  return (
    <div>
      <AboutHero />
      <AboutStats
        statsData={[
          { count: 20, title: "Years Experience" },
          { count: 100, title: "Happy Customers" },
          { count: 15, title: "Choice of Services" },
          { count: 10, title: "Profissional Guides" },
        ]}
      />
      <Advantages />
      <Reviews />
      <Footer />
    </div>
  )
}

export default About
