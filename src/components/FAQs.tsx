import { useState } from "react"
import pluscircle from "../assets/plus-circle.svg"
import minuscircle from "../assets/minus-circle.svg"

const FAQs = () => {
    const [activeAccord, setActiveAccord] = useState('');
    const toggleAccord = (e:any) => {
        if (e.currentTarget.alt == activeAccord) {
            setActiveAccord('');
        }
        else{
            setActiveAccord(e.currentTarget.alt)
        }
        console.log(e.currentTarget.parentElement);
    }

    return (
        <div className="flex flex-col md:flex-row px-[88px]  py-[96px] max-w-[1700px] mx-auto">
            <div className="flex-[.5] flex flex-col items-start">
                <p className=" text-[#175CD3] text-lg font-semibold mb-3">Support</p>
                <h1 className=" text-5xl font-semibold mb-5">FAQs</h1>
                <p className="text-[#667085] font-normal 2xl:text-2xl text-lg">Everything you need to know about the product and billing. Can’t find the answer you’re looking for? Please <span className="underline">chat to our friendly team.</span> </p>
            </div> 
            <div className="flex-[.6]">
                <div className={`p-8 flex justify-between items-start border-b-[1px] ${activeAccord == 'number' ?  'border-[1px] rounded-2xl border-[#EAECF0] bg-[#F9FAFB]' : 'border-b-[#EAECF0] '}  `}>
                    <div className="flex flex-col gap-2">
                        <h3 className=" 2xl:text-xl text-base text-[#101828] font-semibold ">How many participants can join a ClearLink video conference?</h3>
                        <p className={`font-normal text-lg text-[#475467] ${activeAccord == 'number' ? 'block' : 'hidden'}`}>ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.</p>
                    </div>
                    <img src={activeAccord == "number" ? minuscircle : pluscircle} alt="number" onClick={toggleAccord} className="cursor-pointer"/>
                </div>

                <div className={`p-8 flex justify-between items-start border-b-[1px] ${activeAccord == 'device' ?  'border-[1px] rounded-2xl border-[#EAECF0] bg-[#F9FAFB]' : 'border-b-[#EAECF0] '}  `}>
                    <div className="flex flex-col gap-2">
                        <h3 className=" 2xl:text-xl text-base text-[#101828] font-semibold ">Can I use ClearLink on multiple devices?</h3>
                        <p className={`font-normal text-lg text-[#475467] ${activeAccord == 'device' ? 'block' : 'hidden'}`}>ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.</p>
                    </div>
                    <img src={activeAccord == "device" ? minuscircle : pluscircle} alt="device" onClick={toggleAccord} className="cursor-pointer"/>
                </div>

                <div className={`p-8 flex justify-between items-start border-b-[1px] ${activeAccord == 'compatible' ?  'border-[1px] rounded-2xl border-[#EAECF0] bg-[#F9FAFB]' : 'border-b-[#EAECF0] '}  `}>
                    <div className="flex flex-col gap-2">
                        <h3 className=" 2xl:text-xl text-base text-[#101828] font-semibold ">Is ClearLink compatible with other video conferencing platforms?</h3>
                        <p className={`font-normal text-lg text-[#475467] ${activeAccord == 'compatible' ? 'block' : 'hidden'}`}>ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.</p>
                    </div>
                    <img src={activeAccord == "compatible" ? minuscircle : pluscircle} alt="compatible" onClick={toggleAccord} className="cursor-pointer"/>
                </div>

                <div className={`p-8 flex justify-between items-start border-b-[1px] ${activeAccord == 'security' ?  'border-[1px] rounded-2xl border-[#EAECF0] bg-[#F9FAFB]' : 'border-b-[#EAECF0] '}  `}>
                    <div className="flex flex-col gap-2">
                        <h3 className=" 2xl:text-xl text-base text-[#101828] font-semibold ">How does ClearLink ensure the security of my video conferences?</h3>
                        <p className={`font-normal text-lg text-[#475467] ${activeAccord == 'security' ? 'block' : 'hidden'}`}>ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.</p>
                    </div>
                    <img src={activeAccord == "security" ? minuscircle : pluscircle} alt="security" onClick={toggleAccord} className="cursor-pointer"/>
                </div>
                
                <div className={`p-8 flex justify-between items-start border-b-[1px] ${activeAccord == 'software' ?  'border-[1px] rounded-2xl border-[#EAECF0] bg-[#F9FAFB]' : 'border-b-[#EAECF0] '}  `}>
                    <div className="flex flex-col gap-2">
                        <h3 className=" 2xl:text-xl text-base text-[#101828] font-semibold ">Do I need to download any software to use ClearLink?</h3>
                        <p className={`font-normal text-lg text-[#475467] ${activeAccord == 'software' ? 'block' : 'hidden'}`}>ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.</p>
                    </div>
                    <img src={activeAccord == "software" ? minuscircle : pluscircle} alt="software" onClick={toggleAccord} className="cursor-pointer"/>
                </div>

                <div className={`p-8 flex justify-between items-start border-b-[1px] ${activeAccord == 'customer' ?  'border-[1px] rounded-2xl border-[#EAECF0] bg-[#F9FAFB]' : 'border-b-[#EAECF0] '}  `}>
                    <div className="flex flex-col gap-2">
                        <h3 className=" 2xl:text-xl text-base text-[#101828] font-semibold ">What kind of customer support does ClearLink provide?</h3>
                        <p className={`font-normal text-lg text-[#475467] ${activeAccord == 'customer' ? 'block' : 'hidden'}`}>ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.</p>
                    </div>
                    <img src={activeAccord == "customer" ? minuscircle : pluscircle} alt="customer" onClick={toggleAccord} className="cursor-pointer"/>
                </div>
            </div>
        </div>
    )
}

export default FAQs