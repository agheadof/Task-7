import OfferCard from "@/components/OfferCard"
import { OfferCardProps } from "@/interfaces"
import React from "react"

const Offers = () => {
  return (
    <div className="my-16 w-3/4 mx-auto">
      <div className="flex-col lg:flex-row flex justify-center gap-8">
        {offersData.map((item, idx) => {
          return <OfferCard {...item} key={idx} />
        })}
      </div>
    </div>
  )
}

export default Offers

const offersData: OfferCardProps[] = [
  {
    img: "/offer1.png",
    title: "Bike and rickshaw rental",
    description: "Book your quality vehicle quickly for an hour or all day!",
  },
  {
    img: "/offer2.jpg",
    title: "Guided tour of the countryside",
    description:
      "Live the real Lucchese experience by visiting the suburbs by bike!",
  },
  {
    img: "/offer4.png",
    title: "Taxi and NCC service",
    description:
      "Do you need not only a bike but also a driver? Then you have found the right place!",
  },
  {
    img: "/offer3.png",
    title: "Bus Package",
    description:
      "Do you need not only a bike but also a driver? Then you have found the right place!",
  },
]
