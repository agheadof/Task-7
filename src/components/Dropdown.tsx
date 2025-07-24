"use client"
import { useState } from "react"
import { DownArrow } from "../../public/icons/icons"
import { DropdownProps } from "@/interfaces"

const Dropdown = ({ title, options }: DropdownProps) => {
  const [selectedValue, setSelectedValue] = useState<string>("")
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleChange = (event: any) => {
    setSelectedValue(event.target.value)
  }

  return (
    <div className="relative">
      <select
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        value={selectedValue}
        onChange={handleChange}
        className=" text-[#333333cc] appearance-none w-full px-4 py-2 pr-8 focus:outline-none focus:shadow-outline"
      >
        <option value="">{title}</option>
        {options.map((option, idx) => {
          return (
            <option key={idx} value={option}>
              {" "}
              {option}{" "}
            </option>
          )
        })}
      </select>
      <div
        className={`pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#33333399] transition-all  duration-300 ease-in-out ${
          isOpen && "rotate-180 "
        }`}
      >
        <DownArrow />
      </div>
    </div>
  )
}

export default Dropdown
