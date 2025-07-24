import { JSX } from "react"

export interface ItemProps {
  icon: React.ReactNode
  title: string
  dropDown: DropdownProps
}

export interface DropdownProps {
  title: string
  options: string[]
}

export interface CardProps {
  img: string
  title: string
  price: string
  scheduale: string
  groupCount: string
  description: string
}

export interface OfferCardProps {
  img: string
  title: string
  description: string
}

export interface Stats {
  count: number
  title: string
}

export type StatsData = {
  statsData: Stats[]
}

export interface InputProps {
  label?: string
  placeholder?: string
  type?: string
  className?: string
  Icon?: React.FC
}

interface Feature {
  name: string
  Icon: React.FC
}

export interface PackageProps {
  img: string
  title: string
  price: number
  features: Feature[]
}

export interface SliderProps {
  children: React.ReactNode
  perView: number
  headLine: string
}

export interface ReviewCardProps {
  img: string
  name: string
  review: string
}

export interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  toggleMode: () => void
  mode: "login" | "signup"
}
