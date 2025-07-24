"use client"

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { SliderProps } from "@/interfaces"
import { DownArrow } from "../../public/icons/icons"
import React from "react"

const KeenSlider = ({ perView, children, headLine }: SliderProps) => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: perView,
      spacing: 16,
    },
  })

  return (
    <div className="flex flex-col">
      <div className="text-center flex flex-col items-center lg:flex-row lg:justify-between mb-10">
        <h2 className="text-2xl font-bold">{headLine}</h2>
        <div className="flex gap-4 mt-5 lg:mt-0">
          <button
            onClick={() => instanceRef.current?.prev()}
            className="flex items-center justify-center rounded-full size-10 rotate-90 text-[#33333399] bg-[#EFEFEF] cursor-pointer"
          >
            <DownArrow />
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className="flex items-center justify-center rounded-full size-10 -rotate-90 text-white bg-primary cursor-pointer"
          >
            <DownArrow />
          </button>
        </div>
      </div>

      <div ref={sliderRef} className="keen-slider">
        {React.Children.map(children, (child, idx) => (
          <div className="keen-slider__slide" key={idx}>
            {child}
          </div>
        ))}
      </div>
    </div>
  )
}

export default KeenSlider
