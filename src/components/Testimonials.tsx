import shopify from "../assets/shopifycomp.svg"
import star from "../assets/star.svg"
import profile from "../assets/profile.svg"
import collab from "../assets/collab.svg"
import arrowleft from "../assets/arrow-left.svg"
import arrowright from "../assets/arrow-right.svg"
import { useState } from "react"
import { reviews } from "../helpers/testimonial"
const Testimonials = () => {
  const [tracker, setTracker] = useState(0);
  const next = () => {
    if (tracker == reviews.length - 1) {
      setTracker(0)
    }else{

      setTracker((prev) => prev + 1)
    }
  }
  const previous = () => {
    if (tracker == 0) {
      setTracker(reviews.length - 1)
    }else{

      setTracker((prev) => prev - 1)
    }
  }
  return (
    <div className="   p-24 bg-[#F9FAFB] ">
      <div className="flex md:flex-row flex-col gap-16 max-w-[1700px] mx-auto">

      <div className="flex flex-col gap-[48px] items-start flex-[.6] ">
        <img src={shopify} alt="shopify" />
        <div className="flex">
          <img src={star} alt="rating" />
          <img src={star} alt="rating" />
          <img src={star} alt="rating" />
          <img src={star} alt="rating" />
          <img src={star} alt="rating" />
        </div>
        <h1 className=" 2xl:text-[44px]/[60px] text-3xl font-medium">{reviews[tracker].text}</h1>
        <div className="flex justify-between w-full">
          <div className="flex gap-4">
            <img src={profile} alt="profile" />
            <div className="flex flex-col w-full">
              <p className="w-[100%] text-[#101828] font-semibold text-xl">{reviews[tracker].name}</p>
              <p className="w-[100%] text-[#475467] font-normal 2xl:text-lg text-base">{reviews[tracker].role}</p>
            </div>
          </div>
          <div className="flex gap-8">
            <img src={arrowleft} alt="arrow left" className=" border-[1px] border-[#D1E9FF] rounded-full p-4 cursor-pointer" onClick={previous}/>
            <img src={arrowright} alt="arrow right" className=" border-[1px] border-[#D1E9FF] rounded-full p-4 cursor-pointer" onClick={next}/>
          </div>
        </div>
      </div>

      <img src={collab} alt="collab" className="flex-[.4] 2xl:w-[640px] w-[550px]"/>
      </div>
    </div>
  )
}

export default Testimonials