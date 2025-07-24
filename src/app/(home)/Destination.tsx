import Card from "@/components/Card"
import Slider from "@/components/Slider"
import { CardProps } from "@/interfaces"

const Destination = () => {
  return (
    <div className="flex flex-col justify-center  w-3/4 mx-auto my-32 ">
      <div className="block lg:hidden">
        <Slider perView={1} headLine="Explore Our Popular Destinantions ">
          {cardData.map((item, idx) => {
            return <Card key={idx} {...item} />
          })}
        </Slider>
      </div>

      <div className="hidden lg:block">
        <Slider perView={4} headLine="Explore Our Popular Destinantions ">
          {cardData.map((item, idx) => {
            return <Card key={idx} {...item} />
          })}
        </Slider>
      </div>
    </div>
  )
}

export default Destination

const cardData: CardProps[] = [
  {
    img: "/destination1.webp",
    title: "Lucca Bike Tour",
    price: "34",
    scheduale: "EVERY DAY",
    groupCount: "3-10 PP",
    description:
      "A tour of the city and its surroundings led by a professional guide ...",
  },
  {
    img: "/destination2.webp",
    title: "Wine tasting In Tuscany",
    price: "34",
    scheduale: "MONDAY",
    groupCount: "10-30 PP",
    description:
      "The real magic is here where you can enjoy the best Tuscan wine and eat ...",
  },
  {
    img: "/destination3.webp",
    title: "Cinque Terre Tour",
    price: "34",
    scheduale: "TO BE DECIDED",
    groupCount: "10-50 PP",
    description:
      "Visiting the 5 Terre is a must, and you can never go there enough ...",
  },
  {
    img: "/destination4.webp",
    title: "Siena and Surroundings",
    price: "34",
    scheduale: "TO BE DECIDED",
    groupCount: "5-10 PP",
    description:
      "Visit the beautiful Siena and the cities that surround it to experience ...",
  },
  {
    img: "/destination3.webp",
    title: "Cinque Terre Tour",
    price: "34",
    scheduale: "TO BE DECIDED",
    groupCount: "10-50 PP",
    description:
      "Visiting the 5 Terre is a must, and you can never go there enough ...",
  },
  {
    img: "/destination4.webp",
    title: "Siena and Surroundings",
    price: "34",
    scheduale: "TO BE DECIDED",
    groupCount: "5-10 PP",
    description:
      "Visit the beautiful Siena and the cities that surround it to experience ...",
  },
  {
    img: "/destination1.webp",
    title: "Lucca Bike Tour",
    price: "34",
    scheduale: "EVERY DAY",
    groupCount: "3-10 PP",
    description:
      "A tour of the city and its surroundings led by a professional guide ...",
  },
  {
    img: "/destination2.webp",
    title: "Wine tasting In Tuscany",
    price: "34",
    scheduale: "MONDAY",
    groupCount: "10-30 PP",
    description:
      "The real magic is here where you can enjoy the best Tuscan wine and eat ...",
  },
]
