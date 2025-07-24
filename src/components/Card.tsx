import { CardProps } from "@/interfaces"
import { Calender, Group } from "../../public/icons/icons"
import Image from "next/image"

const Card = ({
  img,
  title,
  price,
  scheduale,
  groupCount,
  description,
}: CardProps) => {
  return (
    <div className="group overflow-hidden rounded-3xl w-full ">
      <div className="relative flex flex-col justify-center  rounded-3xl ">
        <div className="relative  w-full h-[400px] ">
          <Image
            alt={title}
            fill
            src={img}
            className="object-cover rounded-3xl group-hover:scale-[300%] group-hover:translate-y-1/2 group-hover:blur-2xl transition-all duration-300 ease-in-out"
          />
          <div className="absolute h-[900px] inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-all duration-300  rounded-3xl" />
        </div>

        <div className="pt-4 px-1.5 flex flex-col gap-3 z-10 group-hover:text-white group-hover:-translate-y-full transition-all duration-300 ease-in-out">
          <h3 className="font-bold text-2xl">{title}</h3>
          <p>
            from{" "}
            <span className="font-extrabold text-2xl text-primary">
              {price} €
            </span>
          </p>
          <div className="text-primary font-semibold text-[16px] flex justify-between">
            <div className="flex flex-row gap-1.5">
              <Calender />
              <p>{scheduale}</p>
            </div>
            <div className="flex flex-row gap-1.5">
              <Group />
              <p>{groupCount}</p>
            </div>
          </div>
          <p className="text-lg">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
