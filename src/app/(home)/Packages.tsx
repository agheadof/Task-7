import { PackageProps } from "@/interfaces"
import {
  BestPrice,
  Bus,
  Companion,
  DayOne,
  Discount,
  Driver,
  Guide,
  Map,
  MountainBiking,
  PointLocation,
  Support,
  Ticket,
  Water,
} from "../../../public/icons/icons"
import Package from "@/components/Package"

const Packages = () => {
  return (
    <div className="flex flex-col justify-center w-3/4 mx-auto my-32 ">
      <h1 className="font-extrabold text-3xl">The Most Popular Packages</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-16 ">
        {packagesData.map((item, idx) => (
          <Package {...item} key={idx} />
        ))}
      </div>
    </div>
  )
}

export default Packages

const packagesData: PackageProps[] = [
  {
    img: "/pkg1.png",
    title: "BIKE / RICKSHAW",
    price: 10,
    features: [
      { Icon: DayOne, name: "Your bike for a day" },
      { Icon: Map, name: "City App" },
      { Icon: Discount, name: "Discount on Rickshaw" },
      { Icon: Support, name: "Guaranteed Support" },
    ],
  },
  {
    img: "/pkg2.png",
    title: "BIKE TOURS",
    price: 30,
    features: [
      { Icon: MountainBiking, name: "A Mountain Bike Included" },
      { Icon: Guide, name: "A Guide For You" },
      { Icon: Water, name: "Bottle of water" },
      { Icon: Support, name: "Guaranteed Support" },
    ],
  },
  {
    img: "/pkg3.png",
    title: "BUS TRIPS",
    price: 45,
    features: [
      { Icon: Ticket, name: "Park ticket" },
      { Icon: Bus, name: "Return bus" },
      { Icon: Companion, name: "Companion" },
      { Icon: Support, name: "Guaranteed Support" },
    ],
  },
  {
    img: "/offer4.png",
    title: "Transfer",
    price: 10,
    features: [
      { Icon: Driver, name: "Personal Driver" },
      { Icon: PointLocation, name: "Wherever You Want" },
      { Icon: BestPrice, name: "At the best price" },
      { Icon: Support, name: "Guaranteed Support" },
    ],
  },
]
