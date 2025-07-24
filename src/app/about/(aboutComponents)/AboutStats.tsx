import { StatsData } from "@/interfaces"
import Image from "next/image"

const AboutStats = ({ statsData }: StatsData) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-20 items-center w-3/4 mx-auto my-32 ">
      <div className=" rounded-3xl border border-[#EFEFEF] p-6 flex justify-center items-center hover:scale-110 transition-all duration-300 ease-in-out">
        <div className="relative flex h-[560px] w-full">
          <Image
            src="/Houses.png"
            alt="Rural Houses"
            fill
            className="object-cover rounded-3xl"
          />
        </div>
      </div>
      <div className=" flex flex-col justify-center ">
        <div className="flex flex-col gap-1.5">
          <p className="font-semibold text-[16px] text-[#33333399]">
            WELCOME TO OUR SITE!
          </p>
          <h1 className="font-extrabold text-3xl ">
            We are the best company for your visit
          </h1>
        </div>
        <p className="py-8">
          {" "}
          After decades of experience, and a whole life in Lucca, we offer you
          the most complete tourism service in the city. In addition to having
          bikes and rickshaws to have as much fun as you want, you have the
          choice of tour guides with whom to tour and drivers for your every
          need! We offer packages in the way that you get the most at the lowest
          price. Book with us and we will always be available for you!
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {statsData.map((item, idx) => {
            return (
              <p key={idx} className="text-[16px] text-[#33333399]">
                <span className="block font-bold text-3xl text-primary">
                  {item.count}+
                </span>
                {item.title}
              </p>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default AboutStats
