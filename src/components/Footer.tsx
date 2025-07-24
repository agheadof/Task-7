import Image from "next/image"
import {
  Email,
  Facebook,
  Instagram,
  Location,
  Phone,
  Twitter,
} from "../../public/icons/icons"
import Link from "next/link"

const Footer = () => {
  return (
    <div className="bg-[#333333]  mt-32">
      <div className="w-3/4 mx-auto  text-white pt-10">
        <div className="relative size-32 mb-10">
          <Image src={"/logo.svg"} alt="Balloon Logo" fill />
        </div>
        <div className="py-8 border-y border-white/10 flex flex-col lg:flex-row gap-y-20 justify-between">
          <div className="flex flex-col gap-2.5">
            <h3 className="mb-2.5 font-extrabold text-xl">Services</h3>
            <p className="font-semibold text-lg hover:text-primary cursor-pointer">
              Bike and Rickshaw rental
            </p>
            <p className="font-semibold text-lg hover:text-primary cursor-pointer">
              Guided Tours of Lucca
            </p>
            <p className="font-semibold text-lg hover:text-primary cursor-pointer">
              Guided Bike Tour of Lucca
            </p>
            <p className="font-semibold text-lg hover:text-primary cursor-pointer">
              Trip In The Tuscan Hills
            </p>
            <p className="font-semibold text-lg hover:text-primary cursor-pointer">
              Transportation With Luxury Cars
            </p>
            <p className="font-semibold text-lg hover:text-primary cursor-pointer">
              Wine Tours By Bus With Guide
            </p>
          </div>
          <div className="flex flex-col gap-2.5">
            <h3 className="mb-2.5 font-extrabold text-xl">Home</h3>
            <p className="font-semibold text-lg hover:text-primary cursor-pointer">
              Home
            </p>
            <p className="font-semibold text-lg hover:text-primary cursor-pointer">
              About Us
            </p>
            <p className="font-semibold text-lg hover:text-primary cursor-pointer">
              Tour Packages
            </p>
          </div>
          <div className="flex flex-col gap-2.5">
            <h3 className="mb-2.5 font-extrabold text-xl">Help</h3>
            <p className="font-semibold text-lg hover:text-primary cursor-pointer">
              Terms of Use
            </p>
            <p className="font-semibold text-lg hover:text-primary cursor-pointer">
              Provicy Policy
            </p>
          </div>
          <div className="flex flex-col gap-2.5">
            <h3 className="mb-2.5 font-extrabold text-xl">Contacts</h3>
            <div className="flex gap-2.5 text-primary">
              <Location />
              <p className="font-semibold text-white text-lg ">
                Piazza Napoleone, Lucca, Tuscany
              </p>
            </div>
            <div className="flex gap-2.5 text-primary">
              <Phone />
              <p className="font-semibold text-white text-lg ">
                +39 346 368 5708
              </p>
            </div>
            <div className="flex gap-2.5 text-primary">
              <Email />
              <p className="font-semibold text-white text-lg ">
                italiainlimo@gmail.com
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
            <h3 className="mb-2.5 font-extrabold text-xl">Social Media</h3>
            <div className="flex gap-5 text-primary">
              <Link href={""} className="hover:text-white cursor-pointer">
                <Twitter />
              </Link>
              <Link href={""} className="hover:text-white cursor-pointer">
                <Facebook />
              </Link>
              <Link href={""} className="hover:text-white cursor-pointer">
                <Instagram />
              </Link>
            </div>
          </div>
        </div>
        <p className="p-10 text-center">
          Copyright © 2022. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
