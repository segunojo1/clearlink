import logo from "../assets/logo.svg"
import playstore from "../assets/googleplay.svg"
import appstore from "../assets/appstore.svg"
import faecebook from "../assets/facebook.svg"
import instagram from "../assets/instagram.svg"
import github from "../assets/github.svg"
import linkedin from "../assets/linkedin.svg"
import twitter from "../assets/twitter.svg"
import youtube from "../assets/youtube.svg"
import { useEffect, useState } from "react"
const Footer = () => {
    const [year, setYear]:any = useState();
    const gety = new Date().getFullYear();
    console.log(gety);
    useEffect(() => {
        setYear(gety)
    }, [])
    
    return (
        <div className="">

            <div className="flex flex-col md:flex-row gap-[50px] 2xl:gap-[100px] pt-[96px] pb-[48px] px-[88px] w-fit max-w-[1700px] mx-auto">
                <div className="flex flex-col gap-8 max-w-[350px]">
                    <img src={logo} alt="logo" className="w-[152px]" />
                    <p className="text-[#475467] font-normal text-lg">ClearLink is your gateway to effortless, high-quality video conferencing. Join us in shaping the future of communication!</p>
                </div>

                <div className="2xl:w-[160px] flex flex-col items-start gap-4">
                    <h1 className="text-[#667085] font-semibold text-base">Product</h1>
                    <p className="text-[#475467] font-semibold text-base">Overview</p>
                    <p className="text-[#475467] font-semibold text-base">Features</p>
                    <p className="text-[#475467] font-semibold text-base">Solutions</p>
                    <p className="text-[#475467] font-semibold text-base">Tutorials</p>
                    <p className="text-[#475467] font-semibold text-base">Pricing</p>
                </div>
                <div className="2xl:w-[160px] flex flex-col items-start gap-4">
                    <h1 className="text-[#667085] font-semibold text-base">Company</h1>
                    <p className="text-[#475467] font-semibold text-base">About us</p>
                    <p className="text-[#475467] font-semibold text-base">Careers</p>
                    <p className="text-[#475467] font-semibold text-base">Press</p>
                    <p className="text-[#475467] font-semibold text-base">News</p>
                    <p className="text-[#475467] font-semibold text-base">Contact</p>
                </div>
                <div className="2xl:w-[160px] flex flex-col items-start gap-4">
                    <h1 className="text-[#667085] font-semibold text-base">Resources</h1>
                    <p className="text-[#475467] font-semibold text-base">Blog</p>
                    <p className="text-[#475467] font-semibold text-base">Events</p>
                    <p className="text-[#475467] font-semibold text-base">Help centre</p>
                    <p className="text-[#475467] font-semibold text-base">Tutorials</p>
                    <p className="text-[#475467] font-semibold text-base">Support</p>
                </div>
                <div className="2xl:w-[160px] flex flex-col items-start gap-4">
                    <h1 className="text-[#667085] font-semibold text-base">Legal</h1>
                    <p className="text-[#475467] font-semibold text-base">Terms</p>
                    <p className="text-[#475467] font-semibold text-base">Privacy</p>
                    <p className="text-[#475467] font-semibold text-base">Cookies</p>
                    <p className="text-[#475467] font-semibold text-base">Licenses</p>
                    <p className="text-[#475467] font-semibold text-base">Contact</p>
                </div>
                <div className="flex flex-col gap-4">
                    <p className=" text-[#004EEB] font-semibold text-base">Get the app</p>
                    <img src={appstore} alt="app store" className="w-[135px]" />
                    <img src={playstore} alt="play store" className="w-[135px]" />
                </div>
            </div>
            <div className="bg-[#F9FAFB] py-12">
                <div className="flex flex-col md:flex-row justify-between px-[88px] max-w-[1700px] mx-auto">
                    <p className="text-[#667085] text-base font-normal">© {year} ClearLink. All rights reserved</p>
                    <div className="flex gap-6">
                        <img src={linkedin} alt="linkedin" />
                        <img src={twitter} alt="twitter" />
                        <img src={faecebook} alt="facebook" />
                        <img src={instagram} alt="instagram" />
                        <img src={github} alt="github" />
                        <img src={youtube} alt="youtube" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer