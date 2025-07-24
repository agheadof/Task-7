"use client"
interface ButtonProps {
  onClick?: () => void
  children: React.ReactNode
  className?: string
}

const Button = ({ onClick, children, className }: ButtonProps) => {
  return (
    <button
      className={`${className} bg-primary text-white rounded-[50px] justify-center items-center flex py-2.5 px-6 cursor-pointer hover:bg-white hover:text-primary hover:border-primary border-2 border-transparent transition-all duration-300 ease-in-out`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
