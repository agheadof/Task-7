import { PackageProps } from "@/interfaces"
import Image from "next/image"

const Package = ({ img, title, price, features }: PackageProps) => {
  return (
    <div className="flex flex-col size-full group overflow-hidden rounded-3xl shadow-[0px_0px_20px_0px_#0000001A]">
      <div className="relative flex flex-col justify-center  rounded-3xl ">
        <div className="relative  w-full min-h-[340px]">
          <Image
            className="rounded-t-3xl object-cover group-hover:scale-[300%] group-hover:translate-y-1/2 group-hover:blur-2xl transition-all duration-300 ease-in-out"
            fill
            src={img}
            alt={title}
          />
          <div className="absolute h-[900px] inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out rounded-3xl" />
        </div>
        <div className="p-6 flex flex-col justify-center z-10 group-hover:text-white group-hover:-translate-y-1/2 transition-all duration-300 ease-in-out">
          <h1 className="font-extrabold text-xl">{title}</h1>
          <h2 className="font-bold text-5xl text-primary mt-4 ">
            <sup className="font-normal text-xl text-[#333333]/50 align-super pr-1.5 group-hover:text-white">
              €
            </sup>
            {price}
            <sub className="font-normal text-lg text-[#333333]/50 p-1.5 group-hover:text-white">
              /day
            </sub>
          </h2>
          <div className="my-4">
            {features.map((item, idx) => {
              return (
                <div key={idx} className="flex items-center ">
                  <div className="flex-none">
                    <item.Icon />
                  </div>
                  <p className="m-4 text-nowrap text-[clamp(12px,1.5vw,13px)]">
                    {item.name}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
        <button className="text-primary border border-primary rounded-[50px] text-xl font-semibold py-3 px-6 bg-transparent m-6 mt-0 cursor-pointer z-10 hover:bg-primary hover:text-white transition-all duration-300 ease-in-out">
          {" "}
          Book Now{" "}
        </button>
      </div>
    </div>
  )
}

export default Package
