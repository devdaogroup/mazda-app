import React from 'react';
import Image from "next/image";
import HowToMintImage from "@/assets/img/HowToMint.svg";
import Share from "@/assets/img/share.svg";

function HowTo() {
    return (
       <>
           <div className="my-10">
               <Image src={HowToMintImage} alt={"how-to-mint"}/>
           </div>
           <div className="container flex mx-auto  -mt-36 text-white justify-between items-center h-[400px] p-2">
               <div className="w-2/4 ">
                   <h3 className="font-bold text-4xl">How To Mint?</h3>
                   <p className="pt-4 font-bold text-xs leading-5 pe-3">
                       In the first step you need to upload your videos URL that’s about MAZDA company car’s which
                       you’ve uploaded in the Instagram as a “Reels” or in Youtube in the “Youtube Shorts” section or
                       even other social media accounts such as TikTok, Facebook or Twitch in the “REELS” page of our
                       site.
                   </p>
               </div>
               <div className="w-1/3 relative">
                   <div className="w-[228px] bg-blue-500 rounded-xl h-[228px]"></div>
                   <div className="w-[228px] absolute top-[50px] -left-[50px] flex justify-center items-center  backdrop-blur-md bg-sky-50 bg-opacity-20 border rounded-xl h-[228px]">
                       <Image src={Share} alt={"share"} height={84} width={84}/>
                   </div>
               </div>
           </div>

           <div className="w-full  flex p-2 mt-6 justify-center items-center">
               <span className="bg-gradient-to-r from-gray-700 rounded-full to-purple-700 h-[35px] w-[35px] flex mx-3 justify-center items-center text-white">1</span>
               <span className="bg-gradient-to-r from-gray-700 rounded-full to-gray-900-700 h-[35px] w-[35px] flex mx-3 justify-center items-center text-white">2</span>
               <span className="bg-gradient-to-r from-gray-700 rounded-full to-gray-900-700 h-[35px] w-[35px] flex mx-3 justify-center items-center text-white">3</span>
           </div>

       </>
    );
}

export default HowTo;