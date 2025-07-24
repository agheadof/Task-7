import { ReviewCardProps } from "@/interfaces"
import { Qout } from "../../public/icons/icons"
import Image from "next/image"

const ReviewCard = ({ img, name, review }: ReviewCardProps) => {
  return (
    <div className="flex flex-col justify-center gap-5 lg:gap-10 items-center border border-[#EFEFEF] p-4 lg:p-8 ">
      <div className="flex flex-col gap-4 items-center">
        <div className="relative size-10 lg:size-20 ">
          <Image
            fill
            src={img}
            alt={`profile of ${name}`}
            className="rounded-full"
          />
        </div>
        <h2>{name}</h2>
      </div>
      <div className="flex flex-col mx-2 lg:mx-8">
        <div className="self-start">
          <Qout />
        </div>
        <p className="my-2.5 mx-2 lg:mx-5 text-sm lg:text-lg text-center">
          {review}
        </p>
        <div className="self-end">
          <Qout />
        </div>
      </div>
    </div>
  )
}

export default ReviewCard
