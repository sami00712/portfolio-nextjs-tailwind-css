
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaFacebook, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import Link from "next/link";

export default function Contact(){
    return(
        <div>
          <Header/>  
          <div className=" p-20 lg:flex gap-x-56 bg-black min-h-screen">
        {/* Left Side - Contact Details */}
        <div className=" mb-8  ">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">Contact <span className="text-teal-400">Us</span></h2>
          <div className="text-gray-400 mb-6">
          <p >I am a dedicated frontend web developer</p>
          <p > with a passion for building engaging user </p>
          <p >Currently, I am expanding my skill . </p>
          </div>
          <ul className="text-white space-y-4">
            <li>
              <strong>Address:</strong> 34 Street, City Karachi, Pakistan
            </li>
            <li>
              <strong>Phone:</strong> +92 333 3739199
            </li>
            <li>
              <strong>Email:</strong> samiqaimkhani43@gmail.com
            </li>
          </ul>
          <div className="flex text-3xl gap-8 mt-10">
            <Link href={''}><FaFacebook  className="text-blue-600 hover:scale-150 transition duration-300 ease-in-out"/></Link>
            <Link href={''}><FaGithub className="text-white hover:scale-150 transition duration-300 ease-in-out"/></Link>
             <Link href={''}><FaYoutube  className="text-red-500 hover:scale-150 transition duration-300 ease-in-out"/></Link>
            <Link href={''}><FaLinkedin  className="text-blue-500 hover:scale-150 transition duration-300 ease-in-out"/></Link>
          </div>
        </div>
        

        {/* Right Side - Form */}
        <div className="w-100% lg:w-1/2 bg-transparent p-8 shadow-lg shadow-teal-400 rounded-lg">
          <form className="">
            <div className="mb-6">
              <label htmlFor="name" className="block text-teal-400 text-sm font-bold mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="w-full px-3 py-2 border bg-transparent border-teal-400 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-teal-400 text-sm font-bold mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your email"
                className="w-full bg-transparent text-white px-3 py-2 border border-teal-400 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-teal-400 text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your message"
                className="w-full px-3 py-2 bg-transparent text-white border border-teal-400 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                rows={4}
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="bg-teal-400 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
           <Footer/> 
        </div>
    )
}