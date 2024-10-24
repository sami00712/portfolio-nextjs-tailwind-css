import Link from "next/link";
import { FaFacebook, FaGithub, FaYoutube, FaLinkedin} from 'react-icons/fa';

export default function Footer(){
    return(
        <div className="bg-gray-600">
            <div className="flex justify-between items-center px-3">
                <div className="font-bold text-5xl">
                    <h1><span className="text-teal-500">S</span>ami <span className="text-teal-500">.</span></h1>
                </div>
                <div className="flex gap-4 text-3xl">
                    <Link href={''}><FaFacebook width={30} className="text-blue-800"/></Link>
                    <Link href={''}><FaGithub width={30} className=""/></Link>
                    <Link href={''}><FaYoutube width={30} className="text-red-600"/></Link>
                    <Link href={''}><FaLinkedin width={30} className="text-blue-700"/></Link>
                </div>
            </div>
            <div className="lg:flex items-center lg:gap-40 lg:ml-24 ml-16 mt-3">
                <div className="flex lg:gap-32 gap-10 text-gray-300 text-sm">
                    <div className="flex-col flex">
                        <h3 className="font-bold text-base text-white">Pages</h3>
                        <Link href={""}>Home</Link>
                        <Link href={""}>About</Link>
                        <Link href={""}>Contact</Link>
                    </div>
                    <div className="flex-col flex">
                        <h3 className="font-bold text-base text-white">Home</h3>
                        <Link href={""}>About me</Link>
                        <Link href={""}>Profile Pic</Link>
                        <Link href={""}>Hire me</Link>
                    </div>
                    <div className="flex-col flex">
                        <h3 className="font-bold text-base text-white">About</h3>
                        <Link href={""}>About me</Link>
                        <Link href={""}>Profile Pic</Link>
                        <Link href={""}>Skills</Link>
                    </div>
                    <div className="flex-col flex">
                        <h3 className="font-bold text-base text-white">Contact</h3>
                        <Link href={""}>Contact form</Link>
                        <Link href={""}>Profile Pic</Link>
                        <Link href={""}>Social links</Link>
                    </div>
                </div>
                <div className="border mt-5 lg:mt-0 border-gray-300 px-10 py-5 rounded-lg shadow-md shadow-gray-200 mr-16 lg:mr-0">
                    <div className="flex items-center border border-gray-300 rounded px-2 text-white w-fit py-1">
                     <p className="mr-2">✉</p>
                     <input type="email" placeholder="Enter your Email Here..." className="outline-none bg-transparent" />
                   </div>
                    <button className="font-bold bg-white text-black px-20 rounded hover:bg-gray-200 mt-3 py-2">Subscribe</button>
                </div>
            </div>
            <div className="w-10/12 mt-10 lg:ml-24 ml-10 h-0.5 bg-gray-500"></div>
            <p className="text-xs text-gray-400 mt-5 pb-5 text-center">Copyright © Sami. All Rights ® Reserved.</p>
        </div>
    )
}