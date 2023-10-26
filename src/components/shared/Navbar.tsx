import React from 'react';
import Image from "next/image";
import Logo  from "./../../assets/img/logo.svg"
import Profile  from "./../../assets/img/profile.svg"
import Search  from "./../../assets/img/search.svg"
const Navbar = () => {
    return (
        <header className="w-full container mx-auto flex bg-[#212121] shadow shadow-gray-600  h-[105px]">
            <div className="w-1/6 flex justify-center items-center">
                <Image height={50} width={54} src={Logo} alt={"mazda"}/>
            </div>
            <div className="w-4/6 flex items-center justify-center">
                <nav className="w-full flex justify-center items-center ">
                    <ul className="w-fit text-white flex ">
                        <li className="px-4 py-2 duration-100 hover:border-b text-[24px]">BOARDS</li>
                        <li className="px-4 py-2 duration-100 hover:border-b text-[24px]">HOME</li>
                        <li className="px-4 py-2 duration-100 hover:border-b text-[24px]">REELS</li>
                    </ul>
                </nav>
            </div>
            <div className="w-1/6 flex flex-wrap items-center justify-center">
                <button className="border-0 p-3 outline-0"><Image height={21} width={21} src={Profile} alt={"profile"}/></button>
                <button className="border-0 p-3 outline-0"><Image height={21} width={21} src={Search} alt={"profile"}/></button>
            </div>
        </header>
    );
};

export default Navbar;