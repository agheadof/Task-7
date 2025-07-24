import Hero from "@/app/(home)/Hero"
import Destination from "./(home)/Destination"
import Stats from "./(home)/Stats"
import Contact from "./(home)/Contact"
import Offers from "./(home)/Offers"
import Booking from "./(home)/Booking"
import Packages from "./(home)/Packages"
import Reviews from "@/components/Reviews"
import Footer from "@/components/Footer"

export default function Root() {
  return (
    <div>
      <Hero />
      <Destination />
      <Stats
        statsData={[
          { count: 20, title: "Years Experience" },
          { count: 100, title: "Happy Customers" },
          { count: 15, title: "Choice of Services" },
          { count: 10, title: "Profissional Guides" },
        ]}
      />
      <Contact />
      <Offers />
      <Booking />
      <Packages />
      <Reviews />
      <Footer />
    </div>
  )
}
