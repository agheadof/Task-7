import { InputProps } from "@/interfaces"

const Input = ({ label, placeholder, type, className, Icon }: InputProps) => {
  if (type === "checkbox") {
    return (
      <label className="flex items-center gap-2 cursor-pointer">
        <input type="checkbox" className={`rounded-3xl ${className}`} />
        <span className="text-sm lg:text-base font-medium">{label}</span>
      </label>
    )
  }

  return (
    <div className="flex flex-col gap-2">
      <label className="lg:font-semibold lg:text-lg font-medium text-sm">
        {label}
      </label>

      <div className="relative">
        <input
          type={type || "text"}
          placeholder={placeholder}
          className={`bg-white rounded-lg p-2 lg:py-3.5 lg:px-6 placeholder:text-xs lg:placeholder:text-lg  ${className}`}
        />

        {Icon && (
          <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-500">
            <Icon />
          </span>
        )}
      </div>
    </div>
  )
}

export default Input
