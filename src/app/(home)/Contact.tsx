import Button from "@/components/Button"
const Contact = () => {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 bg-[url('/gradiant.png')] bg-cover bg-fixed my-16 h-[450px]">
      <div className="relative ">
        <div className="absolute inset-0 bg-white/30 rounded-3xl p-8 flex flex-col gap-8 max-w-[569px] max-h-[330px] m-auto">
          <h1 className="lg:font-extrabold lg:text-3xl font-bold text-lg">
            Get Special Offers for Organizations
          </h1>
          <p className="text-black text-sm lg:text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <Button className="w-2/5 text-sm lg:text-xl mx-auto">
            Contact Us
          </Button>
        </div>
      </div>

      <div className="hidden relative lg:flex justify-center">
        <img
          src="/Girl2.png"
          alt="Girl with a hat"
          className="absolute bottom-0 "
        />
      </div>
    </div>
  )
}

export default Contact
