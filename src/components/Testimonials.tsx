import shopify from "../assets/shopifycomp.svg"
import star from "../assets/star.svg"
import profile from "../assets/profile.svg"
import collab from "../assets/collab.svg"
import arrowleft from "../assets/arrow-left.svg"
import arrowright from "../assets/arrow-right.svg"
const Testimonials = () => {
  return (
    <div className="flex p-24 bg-[#F9FAFB] gap-16">
      <div className="flex flex-col gap-[48px] items-start flex-[.6]">
        <img src={shopify} alt="shopify" />
        <div className="flex">
          <img src={star} alt="rating" />
          <img src={star} alt="rating" />
          <img src={star} alt="rating" />
          <img src={star} alt="rating" />
          <img src={star} alt="rating" />
        </div>
        <h1 className=" 2xl:text-[44px]/[60px] text-3xl font-medium">ClearLink has upgraded our remote meetings. High-quality video, screen sharing, and top-notch security make it essential for our team.</h1>
        <div className="flex justify-between w-full">
          <div className="flex gap-4">
            <img src={profile} alt="" />
            <div className="flex flex-col w-full">
              <p className="w-[100%] text-[#101828] font-semibold text-xl">Sarah Thompson</p>
              <p className="w-[100%] text-[#475467] font-normal 2xl:text-lg text-base">Project Manager, Shopify</p>
            </div>
          </div>
          <div className="flex gap-8">
            <img src={arrowleft} alt="arrow left" className=" border-[1px] border-[#D1E9FF] rounded-full p-4 cursor-pointer"/>
            <img src={arrowright} alt="arrow right" className=" border-[1px] border-[#D1E9FF] rounded-full p-4 cursor-pointer"/>
          </div>
        </div>
      </div>

      <img src={collab} alt="collab" className="flex-[.4] w-[550px]"/>
    </div>
  )
}

export default Testimonials