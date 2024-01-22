import videor from "../assets/video-recorder.svg"
import people from "../assets/faces.svg"
import arrow from "../assets/arrow.svg"
const WhyClearlink = () => {
  return (
    <div className=" mx-auto px-[88px]  py-[96px]">
        <p className="text-[#175CD3] font-semibold 2xl:text-lg text-sm mb-3">The ClearLink Advantage</p>
        <h1 className=" font-semibold 2xl:text-5xl/[60px] text-4xl tracking-tight mb-[20px]">Why choose ClearLink?</h1>
        <p className="2xl:text-2xl text-lg max-w-[700px] font-normal text-[#667085] mb-12">In a world where connection is everything, ClearLink takes the lead. Our cutting-edge video conferencing app offers:</p>
        <div className="flex justify-between gap-2 ">
            <div className="grid grid-cols-2 gap-y-3 flex-[.6]">
                <div className="flex flex-col items-start">
                    <img src={videor} alt="" />
                    <p className=" font-semibold 2xl:text-2xl text-xl text-[#101828] mt-5">Crystal-clear HD video</p>
                    <p className=" text-base 2xl:text-lg 2xl:font-normal text-[#475467] mt-2">No more pixelation or blurriness – just stunning, lifelike clarity that brings your team closer in meetings.</p>
                </div>
                <div className="flex flex-col items-start">
                    <img src={videor} alt="" />
                    <p className=" font-semibold 2xl:text-2xl text-xl text-[#101828] mt-5">Crystal-clear HD video</p>
                    <p className=" text-base 2xl:text-lg 2xl:font-normal text-[#475467] mt-2">No more pixelation or blurriness – just stunning, lifelike clarity that brings your team closer in meetings.</p>
                </div>
                <div className="flex flex-col items-start">
                    <img src={videor} alt="" />
                    <p className=" font-semibold 2xl:text-2xl text-xl text-[#101828] mt-5">Crystal-clear HD video</p>
                    <p className=" text-base 2xl:text-lg 2xl:font-normal text-[#475467] mt-2">No more pixelation or blurriness – just stunning, lifelike clarity that brings your team closer in meetings.</p>
                </div>
                <div className="flex flex-col items-start">
                    <img src={videor} alt="" />
                    <p className=" font-semibold 2xl:text-2xl text-xl text-[#101828] mt-5">Crystal-clear HD video</p>
                    <p className=" text-base 2xl:text-lg 2xl:font-normal text-[#475467] mt-2">No more pixelation or blurriness – just stunning, lifelike clarity that brings your team closer in meetings.</p>
                </div>
            </div>
            <div className="flex-[.4] relative">
                <img src={arrow} alt="arrow" className="absolute top-[-12.5rem] w-[250px] left-10"/>
                <img src={people} alt="happy users" className="w-[450px]"/>
            </div>
        </div>
    </div> 
  )
}

export default WhyClearlink