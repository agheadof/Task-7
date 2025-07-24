const AboutHero = () => {
  return (
    <div className="relative bg-[url('/about.jpg')] bg-cover bg-fixed h-[992px] text-white">
      <div className=" bg-[#00000033]  h-full" />
      <div className="absolute flex flex-col m-auto w-1/2  h-[390px] inset-0 gap-6">
        <h1 className="font-[podcast] text-5xl lg:text-7xl  text-center">
          Our team cares about your full relax
        </h1>
        <h2 className=" text-center font-bold text-lg lg:text-2xl ">
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness.
        </h2>
        <button className="rounded-[50px] cursor-pointer w-fit py-4 px-6 mx-auto border border-white bg-transparent hover:backdrop-blur-3xl hover:bg-black/20  hover:border-primary transition-all duration-300 ease-in-out">
          View our Tour Packages
        </button>
      </div>
    </div>
  )
}

export default AboutHero
