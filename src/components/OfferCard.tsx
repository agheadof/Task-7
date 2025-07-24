import { OfferCardProps } from "@/interfaces"
import Image from "next/image"
import React from "react"

const OfferCard = ({ img, title, description }: OfferCardProps) => {
  return (
    <div className="group overflow-hidden rounded-3xl w-full ">
      <div className="relative flex flex-col justify-center  rounded-3xl ">
        <div className="relative w-full h-[302px] ">
          <Image
            alt={title}
            fill
            src={img}
            className="object-cover rounded-3xl group-hover:scale-[300%] group-hover:translate-y-1/2 group-hover:blur-2xl transition-all duration-300 ease-in-out"
          />
          <div className="absolute min-h-[900px] inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-all duration-300  rounded-3xl" />
        </div>

        <div className="pt-5 px-1.5 flex flex-col gap-3 z-10 group-hover:text-white group-hover:-translate-y-full transition-all duration-300 ease-in-out">
          <h3 className="font-bold text-2xl pb-3">{title}</h3>
          <p className="text-lg">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default OfferCard
