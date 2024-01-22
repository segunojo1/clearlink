import videor from "../assets/video-recorder.svg"
import noise from "../assets/noise.svg"
import calender from "../assets/calendar.svg"
import lock from "../assets/lock-unlocked.svg"
import people from "../assets/faces.svg"
import arrow from "../assets/arrow.svg"
const WhyClearlink = () => {
  return (
    <div className="max-w-[1700px] mx-auto px-[88px]  py-[96px]">
        <p className="text-[#175CD3] font-semibold 2xl:text-lg text-sm mb-3">The ClearLink Advantage</p>
        <h1 className=" font-semibold 2xl:text-5xl/[60px] text-4xl tracking-tight mb-[20px]">Why choose ClearLink?</h1>
        <p className="2xl:text-2xl text-lg max-w-[700px] font-normal text-[#667085] mb-12">In a world where connection is everything, ClearLink takes the lead. Our cutting-edge video conferencing app offers:</p>
        <div className="flex md:flex-row flex-col  justify-between gap-44 md:gap-4">
            <div className="grid xl:grid-cols-2 grid-cols-1 gap-x-4 gap-y-3 flex-[.6] 2xl:gap-y-10 2xl:gap-x-14">
                <div className="flex flex-col items-start ">
                    <img src={videor} alt="video record" className="p-4 bg-[#F9FAFB] border-[1px] border-[#EAECF0] rounded-[100px]" />
                    <p className=" font-semibold 2xl:text-2xl text-xl text-[#101828] mt-5">Crystal-clear HD video</p>
                    <p className=" text-base 2xl:text-lg 2xl:font-normal text-[#475467] mt-2">No more pixelation or blurriness – just stunning, lifelike clarity that brings your team closer in meetings.</p>
                </div>
                <div className="flex flex-col items-start ">
                    <img src={noise} alt="noise cancelling" className="p-4 bg-[#F9FAFB] border-[1px] border-[#EAECF0] rounded-[100px]" />
                    <p className=" font-semibold 2xl:text-2xl text-xl text-[#101828] mt-5">Noise-canceling audio</p>
                    <p className=" text-base 2xl:text-lg 2xl:font-normal text-[#475467] mt-2">Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations.</p>
                </div>
                <div className="flex flex-col items-start ">
                    <img src={calender} alt="calender" className="p-4 bg-[#F9FAFB] border-[1px] border-[#EAECF0] rounded-[100px]" />
                    <p className=" font-semibold 2xl:text-2xl text-xl text-[#101828] mt-5">Scheduling made easy</p>
                    <p className=" text-base 2xl:text-lg 2xl:font-normal text-[#475467] mt-2">Streamline your agenda with ClearLink's intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place.</p>
                </div>
                <div className="flex flex-col items-start ">
                    <img src={lock} alt="unlocked lock" className="p-4 bg-[#F9FAFB] border-[1px] border-[#EAECF0] rounded-[100px]" />
                    <p className=" font-semibold 2xl:text-2xl text-xl text-[#101828] mt-5">Bank-grade security</p>
                    <p className=" text-base 2xl:text-lg 2xl:font-normal text-[#475467] mt-2">Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data from unwanted intruders.</p>
                </div>
            </div>
            <div className="flex-[.4] relative">
                <img src={arrow} alt="arrow" className="absolute top-[-12.5rem] w-[250px] left-10"/>
                <img src={people} alt="happy users" className="w-[450px] 2xl:w-[544px]"/>
            </div>
        </div>
    </div> 
  )
}

export default WhyClearlink