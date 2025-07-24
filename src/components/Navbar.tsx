"use client"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import { useEffect, useState } from "react"
import { DownArrow } from "../../public/icons/icons"
import { usePathname } from "next/navigation"
import { useAuthModal } from "@/context/AuthModalContext"
import AuthModal from "@/app/(auth)/AuthModal"

interface NavItem {
  content: string
  link: string
}

type NavProps = {
  items: NavItem[]
}

const Navbar = ({ items }: NavProps) => {
  const [showNav, setShowNav] = useState<boolean>(false)
  const [closing, setClosing] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const pathname = usePathname()
  const { isOpen, closeModal, mode, toggleMode, openModal } = useAuthModal()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMenu = () => {
    if (showNav) {
      setShowNav(false)
      setClosing(true)
    } else {
      setShowNav(true)
    }
  }

  return (
    <>
      <nav
        className={`hover:backdrop-blur-xl transition-all ease-in-out duration-300 fixed w-full  top-0 z-40 flex justify-around items-center p-5 text-white font-semibold 
    
       ${
         scrolled || showNav
           ? "backdrop-blur-xl bg-[#00000033]"
           : " bg-[#FFFFFF33]"
       }
        `}
      >
        <Link href={"/"} className="min-w-[6%]">
          <img
            src="/logo.svg"
            alt="tours to Tuscany baloon logo"
            className={`transition-all ease-in-out duration-300 ${
              scrolled ? "w-16" : "lg:w-full w-20"
            }`}
          />
        </Link>
        <div className="lg:flex gap-10 hidden">
          {items.map((item, idx) => {
            return (
              <Link
                key={idx}
                href={item.link}
                className={`hover:text-primary ${
                  pathname === item.link ? "border-b-2 border-primary" : ""
                }`}
              >
                {item.content}
              </Link>
            )
          })}
        </div>
        <div className="lg:flex hidden gap-2.5 items-center">
          <p className="text-[#EFEFEF4D] inline-flex items-center gap-1">
            EN <DownArrow />
          </p>
          <button
            onClick={() => openModal("login")}
            className="cursor-pointer px-3 py-2.5"
          >
            Sign IN
          </button>
          <Button onClick={() => openModal("signup")}>Sign Up</Button>
        </div>
        <button
          onClick={handleMenu}
          className={`transition-transform duration-300 ease-in-out lg:hidden ${
            showNav ? "rotate-[360deg]" : "rotate-0"
          }`}
        >
          <Image
            src={showNav ? "/icons/x.svg" : "/icons/menu.svg"}
            alt="menu"
            width={32}
            height={32}
          />
        </button>
      </nav>
      {(showNav || closing) && (
        <nav
          className={`fixed lg:hidden w-full top-25 z-30 flex flex-col justify-around items-center  py-10 bg-[#00000033] text-white font-semibold backdrop-blur-xl transition-all duration-300 ease-in-out ${
            showNav ? "animate-slide-in" : "animate-slide-out"
          }`}
          onAnimationEnd={() => {
            if (!showNav) setClosing(false)
          }}
        >
          <div className="flex flex-col gap-6 text-center">
            {items.map((item, idx) => {
              return (
                <Link
                  key={idx}
                  href={item.link}
                  className={`${
                    pathname === item.link ? "border-b-2 border-primary" : ""
                  }`}
                >
                  {item.content}
                </Link>
              )
            })}
          </div>
          <div className="flex flex-col-reverse gap-2.5 mt-6 items-center">
            <p className="text-[#EFEFEF4D] inline-flex items-center gap-1">
              EN <DownArrow />
            </p>
            <button
              onClick={() => openModal("login")}
              className="cursor-pointer px-3 py-2.5"
            >
              Sign IN
            </button>
            <Button onClick={() => openModal("signup")}>Sign Up</Button>
          </div>
        </nav>
      )}
      {isOpen && (
        <AuthModal
          isOpen={isOpen}
          onClose={closeModal}
          mode={mode}
          toggleMode={toggleMode}
        />
      )}
    </>
  )
}

export default Navbar
