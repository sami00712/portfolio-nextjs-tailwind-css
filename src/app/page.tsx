'use client'
import Image from "next/image";
import Header from "@/components/Header";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Home(){
  return(
    <div className="">
      <Header/>
      <div className="bg-black min-h-screen lg:flex gap-44 items-center px-4 ">
        <div>
        <div className='lg:text-4xl text-teal-400 font-serif font-bold pt-28 text-2xl'>
              <Typewriter 
               options={{
               strings: ['Hello, My name is M-Sami', ' I am Frontend Web-Developer','I am Next Js Developer.'],
               autoStart: true,
               loop: true,
               }}
              />
            </div>
            <div className='lg:text-sm text-white mt-10 text-xs'>
                <p>I am a dedicated frontend web developer with a passion for building engaging user experiences.</p>
                <p>Currently, I am expanding my skill set by pursuing a certification in Cloud Applied Generative AI</p>
                <p>Engineering from GIAIC, focusing on cutting-edge AI technologies. I recently completed a comprehensive</p>
                <p >course on TypeScript, enhancing my development proficiency, and I am now diving deeper into the</p>
                <p >the principles of UI and UX design to create more intuitive and user-friendly interfaces. My expertise</p>
                <p> bridges technical development and creative design, equipping me to deliver innovative and efficient</p>
                <p> solutions in web development projects.</p></div> 
                <div className='mt-12 ml-20 text-white font-bold text-xl'>
                <Link href={''} className='bg-teal-400  px-3 py-1  hover:bg-teal-500 rounded mr-5'>Hire me</Link>
                <Link href={''} className='px-3 py-1 border rounded border-emerald-400 hover:border-2 hover:border-teal-400'>About me</Link>
                </div>
        </div>
        {/* <div className="border-dashed border-2 rounded-full border-x-teal-400 animate-spin-border">
          <Image src={'/profile.png'} alt="profile" width={400} height={100} className=""/>
        </div> */}
        <div className="relative  lg:mt-10 mt-2 ">
         <Image
          src="/profile.png"
         alt="Spinning Border Image" width={400} height={100}
         className="  "
         />
        <div className="absolute inset-0 border-4 border-dashed border-x-emerald-500 border-y-teal-400 rounded-full animate-spin-border hidden lg:block "></div>
        </div>

      </div>
      <Footer/>
    </div>
  )
}