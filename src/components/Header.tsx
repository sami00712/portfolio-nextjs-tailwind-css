import Link from "next/link"


export default function Header(){
    return(
        <div>
        <div className="bg-black flex justify-between items-center py-3 px-5">
            <div>
                <h1 className="text-white font-serif lg:text-5xl lg:font-bold font-bold text-3xl">
                    <span className="text-teal-400">S</span>ami <span className="text-teal-400">.</span>
                </h1>
            </div>
            <div className="text-white font-mono font-bold">
               <Link href={'/'} className="mr-10 hover:text-teal-400 lg:font-bold sm:font-bold">Home</Link>
               <Link href={'/about'} className="mr-10 hover:text-teal-400 lg:font-bold sm:font-bold">About</Link>
               <Link href={'/contact'} className="bg-teal-400 font-bold px-2 py-1 hover:bg-white hover:text-teal-500 rounded">
               Contact
               </Link>
            </div>
           
        </div>
        <div className="w-100% h-0.5 bg-teal-400"></div>


        </div>
    )
}