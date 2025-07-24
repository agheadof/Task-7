import FilterBox from "@/components/FilterBox"

const Hero = () => {
  return (
    <div className="relative bg-[url('/hero.jpg')] bg-cover bg-fixed h-[1200px] lg:h-[992px] ">
      <div className=" bg-[#00000033]  h-full" />
      <div className="absolute flex flex-col m-auto w-3/4  h-[600px] lg:h-[390px] inset-0 gap-16">
        <div className="flex flex-col gap-4">
          <h1 className="font-[podcast] text-5xl lg:text-7xl text-white text-center">
            Enjoy in the best way!
          </h1>
          <h2 className="text-white text-center font-bold text-lg lg:text-2xl">
            Enjoy our services for your trip anytime
          </h2>
        </div>
        <FilterBox />
      </div>
    </div>
  )
}

export default Hero
