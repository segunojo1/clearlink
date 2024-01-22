import bot from "../assets/bot.svg"
import avatar from "../assets/avatargroup.svg"
import star from "../assets/star.svg"
import heroimg from "../assets/heroimg.svg"
const Hero = () => {
    return (
        <div className="flex justify-between mt-[160px] px-[88px] pb-[96px]">
            <div className="gap-[48px] flex flex-col  items-start flex-[.6]">
                <div className=" flex flex-col gap-[24px]">
                    <h1 className=" font-semibold text-[64px]/[72px] text-[#1D2939] ">Uniting the world, <br />one video call at a time</h1>
                    <p className=" font-normal text-2xl text-[#667085] max-w-[662px]">Experience the future of communication with ClearLink – where crystal-clear video conferencing meets unparalleled simplicity.</p>
                </div>
                <div className="flex gap-5 items-center">
                    <button className="py-[16px] px-[28px] rounded-[100px] border-[1px] bg-[#175CD3] text-white font-semibold text-base btn">Start your free trial</button>
                    <div className=" gap-3 flex items-center">
                        <img src={bot} alt="bot" />
                        <p className=" font-semibold text-lg">Discover AI assistant</p>
                    </div>
                </div>
                <div className="flex items-center gap-[16px]">
                    <img src={avatar} alt="group of people" />
                    <div className="flex flex-col">
                        <div className="flex">
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <p className=" text-[#344054] text-base font-semibold">5.0</p>
                        </div>
                        <p className=" font-medium text-base text-[#475467]">from 3,000+ reviews</p>
                    </div>
                </div>
            </div>
            <div className="flex-[.4]">

                <img src={heroimg} alt="Hero Img" className=" "/>
            </div>
        </div>
    )
}

export default Hero