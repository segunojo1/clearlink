import logo from "../assets/logo.svg"
import drop from "../assets/down-arrow.svg"

const Nav = () => {
  return (
    <div className="flex justify-between max-w-[1472px] bg-[#F2F4F7] border-[1px] border-[#D0D5DD] 2xl:py-[16px] py-3 px-4 2xl:px-[32px] items-center rounded-[100px] mx-auto  w-full">
        <img src={logo} alt="logo" className="w-[140px]"/>
        <div className="gap-10 md:flex hidden">
            <div className="flex gap-[6px] items-center">
                <p className=" font-semibold text-lg text-[#667085]">Products</p>
                <img src={drop} alt="" />
            </div>
            <div className="flex gap-[6px] items-center">
                <p className=" font-semibold text-lg text-[#667085]">Solutions</p>
                <img src={drop} alt="" />
            </div>
            <div className="flex gap-[6px] items-center">
                <p className=" font-semibold text-lg text-[#667085]">Resources</p>
                <img src={drop} alt="" />
            </div>
            <div className="flex gap-[6px] items-center">
                <p className=" font-semibold text-lg text-[#667085]">Pricing</p>
            </div>
        </div>
        <div className="flex gap-2">
            <button className="2xl:py-[14px] py-2 px-3 2xl:px-[24px] bg-white rounded-[100px] border-[1px] border-[#98A2B3] font-semibold text-base btn">Talk to sales</button>
            <button className="2xl:py-[14px] py-2 px-3 2xl:px-[24px] rounded-[100px] border-[1px] bg-[#175CD3] text-white font-semibold text-base btn">Sign up for free</button>
        </div>
    </div>
  )
}

export default Nav