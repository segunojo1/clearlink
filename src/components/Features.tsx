import imgg from "../assets/features.svg"
import arrow from "../assets/check-circle.svg"

const Features = () => {
    return ( 
        <div className="pl-[88px]  py-[96px] flex">
            <div className="flex flex-col gap-[32px]">
                <h1 className="text-[#101828] 2xl:text-5xl/[60px] text-3xl font-semibold">Ready to clear the path to perfect communication?</h1>
                <div className="flex flex-col 2xl:gap-5 gap-2">
                    <div className="flex gap-3 items-center">
                        <img src={arrow} alt="arrow" />
                        <p className=" font-normal 2xl:text-2xl text-lg text-[#475467]">30 days free trial</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <img src={arrow} alt="arrow" />
                        <p className=" font-normal 2xl:text-2xl text-lg text-[#475467]">Cancel at any time</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <img src={arrow} alt="arrow" />
                        <p className=" font-normal 2xl:text-2xl text-lg text-[#475467]">Access to all features</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <img src={arrow} alt="arrow" />
                        <p className=" font-normal 2xl:text-2xl text-lg text-[#475467]">Peronalized onboarding</p>
                    </div>
                </div>

                <div className="flex gap-2">
                    <button className="py-[14px] px-[24px] bg-white rounded-[100px] border-[1px] border-[#98A2B3] font-semibold text-base btn">Talk to sales</button>
                    <button className="py-[14px] px-[24px] rounded-[100px] border-[1px] bg-[#175CD3] text-white font-semibold text-base btn">Sign up for free</button>
                </div>
            </div>
            <img src={imgg} alt="imgg" className=" w-[600px]"/>
        </div>
    )
}

export default Features