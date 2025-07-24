"use client"
import { AuthModalProps } from "@/interfaces"
import { Eye, Google, X } from "../../../public/icons/icons"
import Input from "@/components/Input"
import Button from "@/components/Button"

const AuthModal = ({ isOpen, onClose, mode, toggleMode }: AuthModalProps) => {
  return (
    <div className="fixed z-50 bg-[#333333]/80 min-w-screen min-h-screen">
      <div className="fixed inset-0 z-50 rounded-3xl  px-14 py-10 shadow-[0px_4px_20px_0px_#FFFFFF40] bg-white w-[488px] h-fit m-auto">
        <div className="flex justify-between">
          <h1 className="font-bold text-3xl">
            {mode === "login" ? "Login" : "Create Account"}
          </h1>
          <button onClick={onClose} className="cursor-pointer">
            <X />
          </button>
        </div>
        <form>
          <div className="flex flex-col gap-5 my-5">
            {mode === "signup" && (
              <Input
                className="w-full border border-[#333]/20 "
                label="Name and Surname"
                placeholder="Enter your name and surname"
              />
            )}
            <Input
              className="w-full border border-[#333]/20 "
              label="Email Address"
              placeholder="Enter your email address"
              type="email"
            />
            <Input
              className="w-full border border-[#333]/20 "
              label="Password"
              placeholder="Enter your password"
              type="password"
              Icon={Eye}
            />
            {mode === "signup" ? (
              <div className="flex gap-2.5">
                <Input type="checkbox" />
                <p className="text-[#33333399]">
                  I agree with <span className="text-primary"> Terms</span> and{" "}
                  <span className="text-primary">Privacy</span>
                </p>
              </div>
            ) : (
              <p className="text-[#33333399] text-end">Forgot your password?</p>
            )}
            <div className="flex flex-col gap-1.5">
              <Button> {mode === "signup" ? "Sign Up" : "Sign In"}</Button>
              <p className="text-[#33333399] text-center">Or</p>
              <button className="justify-center text-[#333333]/40 text-lg font-semibold border border-[#33333333] rounded-[50px] py-2.5 px-6 flex gap-2.5">
                <Google />
                <p>
                  {mode === "signup"
                    ? "Sign Up with Google"
                    : "Sign In with Google"}
                </p>
              </button>
            </div>

            {mode === "login" && (
              <div className="flex justify-center">
                <p className=" text-[#333333]/40 "> Don’t have an account ? </p>
                <button
                  onClick={toggleMode}
                  className="text-primary cursor-pointer"
                >
                  Sign Up
                </button>
              </div>
            )}
            {mode === "signup" && (
              <div className="flex justify-center">
                <p className=" text-[#333333]/40 ">
                  {" "}
                  Already have an account?{" "}
                </p>
                <button
                  onClick={toggleMode}
                  className="text-primary cursor-pointer"
                >
                  {" "}
                  Log In
                </button>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default AuthModal
