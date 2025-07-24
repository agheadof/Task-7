import { ReviewCardProps } from "@/interfaces"
import Slider from "./Slider"
import ReviewCard from "./ReviewCard"

const Reviews = () => {
  return (
    <div className="flex flex-col justify-center  w-3/4 mx-auto my-32 ">
      <div className="block lg:hidden">
        <Slider perView={1} headLine="Happy Customers Says ">
          {reviewData.map((item, idx) => {
            return <ReviewCard key={idx} {...item} />
          })}
        </Slider>
      </div>

      <div className="hidden lg:block">
        <Slider perView={2} headLine="Happy Customers Says ">
          {reviewData.map((item, idx) => {
            return <ReviewCard key={idx} {...item} />
          })}
        </Slider>
      </div>
    </div>
  )
}

export default Reviews

const reviewData: ReviewCardProps[] = [
  {
    img: "/reviewGuy.webp",
    name: "Lyod Gomez",
    review:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure",
  },
  {
    img: "/reviewGuy.webp",
    name: "Lyod Gomez",
    review:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure",
  },
  {
    img: "/reviewGuy.webp",
    name: "Lyod Gomez",
    review:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure",
  },
]
