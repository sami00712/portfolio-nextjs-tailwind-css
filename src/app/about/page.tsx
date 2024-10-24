'use client'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";

export default function About(){
    const [activeTab, setActiveTab] = useState<'skills' | 'education'>('skills');
    return(
        <div>
            <Header/>
            <div className="bg-black min-h-screen pt-10 flex">
                <div >
                    <div className="ml-10 border-2 border-teal-400 border-dotted w-fit">
                    <Image src={'/ab.jpeg'} alt="about-pic" width={300} height={100}/>
                    </div>
                </div>
                <div className="text-white ml-10">
                    <h1 className="text-4xl font-bold">About Me</h1>
                    <div className="text-xs mt-5">
                        <p>My name is Sami, and I am from Karachi, Pakistan. I am currently pursuing a certified Cloud Applied</p>
                        <p>Generative AI Engineering program from GIAIC. I completed TypeScript in my last quarter. In 2023, I</p>
                        <p>passed my matric exams from higher secondary school, marking an important milestone in my education.</p>
                    </div>
                    <div className="flex space-x-8 mb-8 mt-8">
        <button
          className={`text-lg font-semibold relative ${
            activeTab === 'skills' ? 'text-white' : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('skills')}
        >
          Skills
          {activeTab === 'skills' && (
            <span className="absolute left-0 bottom-[-5px] w-full h-[2px] bg-teal-400 transition-all duration-300 ease"></span>
          )}
        </button>

        <button
          className={`text-lg font-semibold relative ${
            activeTab === 'education' ? 'text-white' : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('education')}
        >
          Education
          {activeTab === 'education' && (
            <span className="absolute left-0 bottom-[-5px] w-full h-[2px] bg-teal-400 transition-all duration-300 ease"></span>
          )}
        </button>
      </div>

      {/* Content */}
      <div className="font-serif text-sm">
        {activeTab === 'skills' && (
          <div>
            <ul>
            <li className="mb-2">Frontend Development (HTML, CSS, JavaScript, React, Next.js).</li>
            <li className="mb-2">TypeScript.</li>
            <li className="mb-2">JavaScript.</li>
            <li className="mb-2">UI/UX Design.</li>
            <li className="mb-2">Cloud Applied Generative AI Engineering (GIAIC).</li>
            <li>E-Commerce (Shopify).</li>
          </ul>
          </div>
        )}
        {activeTab === 'education' && (
          <div>
            <ul>
            <li className="mb-2">Certified Cloud Applied Generative AI Engineering (GIAIC).</li>
            <li className="mb-2">Completed TypeScript.</li>
            <li className="mb-2">Currently Learning UI/UX Design.</li>
            <li className="mb-2">Matric Completed in 2023</li>
            <li className="mb-2">1st Year Completed in 2024</li>
            <li className="mb-2">Diploma in Civil Engineering (Ongoing)</li>
          </ul>
          </div>
        )}
      </div>
            
                </div>
            </div>
            <Footer/>
        </div>
    )
}