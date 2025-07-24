"use client"

import { useState } from "react"
import {
  Calender,
  Car,
  Clock,
  Globe,
  Group,
  Search,
  Tour,
} from "../../public/icons/icons"
import FilterItem from "./FilterItem"
import { ItemProps } from "@/interfaces"
import Button from "./Button"

const FilterBox = () => {
  const [activeTab, setActiveTab] = useState<"public" | "private">("public")

  return (
    <div className=" w-full ">
      <div className="w-full bg-[#FFFFFF33] p-5  rounded-xl hover:backdrop-blur-xl transition-all duration-300 ease-in-out">
        <div className="flex flex-row justify-between lg:justify-start ">
          <button
            onClick={() => setActiveTab("public")}
            className={`${
              activeTab === "public"
                ? "bg-white text-primary "
                : "bg-[#FFFFFF66] text-white"
            } rounded-tl-xl p-4 font-semibold`}
          >
            <Globe />
            <h1>Public Tours</h1>
          </button>
          <button
            onClick={() => setActiveTab("private")}
            className={`${
              activeTab === "private"
                ? "bg-white text-primary "
                : "bg-[#FFFFFF66] text-white"
            } rounded-tr-xl p-4 font-semibold`}
          >
            <Group />
            <h1>Private Tours</h1>
          </button>
        </div>
        <div className=" flex flex-col lg:flex-row lg:items-center items-start justify-between rounded-b-xl lg:rounded-xl lg:rounded-tl-none w-full bg-white gap-y-2 p-8 lg:p-3">
          {filterData.map((item, idx) => (
            <div key={idx} className="flex items-center gap-8">
              <FilterItem
                icon={item.icon}
                title={item.title}
                dropDown={item.dropDown}
              />
              {idx !== filterData.length - 1 && (
                <div className="w-px h-10 bg-[#3333331a] hidden lg:flex" />
              )}
            </div>
          ))}

          <Button
            onClick={() => {}}
            className="size-20 p-6 rounded-xl text-white"
          >
            <Search />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default FilterBox

const filterData: ItemProps[] = [
  {
    icon: <Group />,
    title: "Number of people",
    dropDown: {
      title: "Choose number",
      options: ["1", "2", "3", "4", "5"],
    },
  },
  {
    icon: <Calender />,
    title: "Date",
    dropDown: {
      title: "Choose Date",
      options: ["1", "2", "3", "4", "5"],
    },
  },
  {
    icon: <Clock />,
    title: "Time",
    dropDown: {
      title: "Choose Time",
      options: ["1", "2", "3", "4", "5"],
    },
  },
  {
    icon: <Tour />,
    title: "Tour",
    dropDown: {
      title: "Select Tour",
      options: ["1", "2", "3", "4", "5"],
    },
  },
  {
    icon: <Car />,
    title: "Transportation",
    dropDown: {
      title: "Select Transportation",
      options: ["1", "2", "3", "4", "5"],
    },
  },
]
