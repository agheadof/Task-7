"use client"

import { ItemProps } from "@/interfaces"
import Dropdown from "./Dropdown"
import { DropdownProps } from "@/interfaces"

const FilterItem = ({ icon, title, dropDown }: ItemProps) => {
  return (
    <div>
      <div className="flex gap-2">
        <div>{icon}</div>
        <div>{title}</div>
      </div>
      <div>
        <Dropdown title={dropDown.title} options={dropDown.options} />
      </div>
    </div>
  )
}

export default FilterItem
