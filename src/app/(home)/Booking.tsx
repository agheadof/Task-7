import Button from "@/components/Button"
import Input from "@/components/Input"
import { Calender, Clock } from "../../../public/icons/icons"

const Booking = () => {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 bg-[url('/gradiant.png')] bg-cover bg-fixed my-16 min-h-[648px]">
      <div className=" flex flex-col justify-center items-center mr-auto ml-auto lg:mr-0 ">
        <h1 className="lg:font-extrabold lg:text-3xl font-bold text-lg mt-16">
          Book Now Bike
        </h1>
        <div className=" bg-white/30 rounded-3xl p-8 flex flex-col gap-8 mb-8 lg:my-auto w-full">
          <form className="flex flex-col gap-3 lg:gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <Input
                label="Name and Surname"
                placeholder="Enter your name and surname"
              />
              <Input
                label="Email Address"
                placeholder="Enter your email address"
                type="email"
              />
              <Input
                label="Telephone Number"
                placeholder="Enter your telephone number"
              />
              <Input
                label="Service Type"
                placeholder="Select the service types"
              />

              <Input
                label="Date"
                placeholder="Select the date"
                Icon={Calender}
              />
              <Input label="Time" placeholder="Select the time" Icon={Clock} />
            </div>
            <Button className="w-3/4 sm:w-2/5 text-sm lg:text-xl mx-auto">
              Contact Us
            </Button>
          </form>
        </div>
      </div>

      <div className="hidden relative lg:flex justify-center">
        <img
          src="/bike.png"
          alt="Bike"
          className="absolute -bottom-10 left-0 hover:scale-110 transition-all duration-300 ease-in-out"
        />
      </div>
    </div>
  )
}

export default Booking
