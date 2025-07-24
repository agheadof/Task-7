"use client"
import { createContext, useContext, useState } from "react"

type Mode = "login" | "signup"

interface AuthModalContextType {
  isOpen: boolean
  mode: Mode
  openModal: (mode: Mode) => void
  closeModal: () => void
  toggleMode: () => void
}

const AuthModalContext = createContext<AuthModalContextType | null>(null)

export const AuthModalProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [mode, setMode] = useState<Mode>("login")

  const openModal = (mode: Mode) => {
    setMode(mode)
    setIsOpen(true)
  }

  const closeModal = () => setIsOpen(false)

  const toggleMode = () =>
    setMode((prev) => (prev === "login" ? "signup" : "login"))

  return (
    <AuthModalContext.Provider
      value={{ isOpen, mode, openModal, closeModal, toggleMode }}
    >
      {children}
    </AuthModalContext.Provider>
  )
}

export const useAuthModal = () => {
  const context = useContext(AuthModalContext)
  if (!context)
    throw new Error("useAuthModal must be used within AuthModalProvider")
  return context
}
