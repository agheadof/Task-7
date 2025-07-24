import {
  Badge,
  BestPriceLarg,
  GuideLarg,
  RoadMap,
} from "../../../../public/icons/icons"

const Advantages = () => {
  return (
    <div className="flex justify-center my-16 min-h-[355px] text-black  bg-[url('/gradiant.png')] bg-cover bg-fixed">
      <div className="my-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center w-3/4 mx-auto gap-6 ">
        <div className=" bg-white/30 rounded-3xl w-11/12 h-[190px] p-8 flex flex-col items-center gap-8 mx-auto text-center">
          <div className="flex size-16">
            <RoadMap />
          </div>
          <p className="font-semibold text-[clamp(12px,1vw,20px)]">
            Complete Packages For All Your Wishes
          </p>
        </div>
        <div className=" bg-white/30 rounded-3xl w-11/12 h-[190px] p-8 flex flex-col items-center gap-8 mx-auto text-center">
          <div className="flex size-16">
            <Badge />
          </div>
          <p className="font-semibold text-[clamp(12px,1vw,20px)]">
            Over 30 Years Of Experience
          </p>
        </div>
        <div className=" bg-white/30 rounded-3xl w-11/12 h-[190px] p-8 flex flex-col items-center gap-8 mx-auto text-center">
          <div className="flex size-16">
            <GuideLarg />
          </div>
          <p className="font-semibold text-[clamp(12px,1vw,20px)]">
            Expert Guides For You
          </p>
        </div>
        <div className=" bg-white/30 rounded-3xl w-11/12 h-[190px] p-8 flex flex-col items-center gap-8 mx-auto text-center">
          <div className="flex size-16">
            <BestPriceLarg />
          </div>
          <p className="font-semibold text-[clamp(12px,1vw,20px)]">
            Guaranteed fun at the best price!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Advantages
