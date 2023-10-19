import Image from "next/image";
import React, { useState } from "react";
import Menu from "@/components/icon/menu.svg";
import Logo from "../../../public/WELaunch.png";
import ETH from "@/components/icon/eth.svg";
import ArrowDown from "@/components/icon/arrow-down.svg";
import RedirectIcon from "@/components/icon/redirect.svg";
function Header() {
  const [menuStatus, setMenuStatus] = useState<boolean>(false);
  return (
    <>
      {menuStatus && <MenuMobile />}

      <header className="bg-transparent fixed  left-0 w-full z-10 backdrop-blur h-[70px] text-xs p-2 border-black flex flex-wrap justify-between items-center">
        <div className="w-1/4 flex ps-3.5 md:w-1/12">
          <figure className="flex items-center">
            <Image alt="" src={Logo} width={20} height={20} />
          </figure>
          <figure
            className="md:hidden"
            onClick={() => menuStatus ? setMenuStatus(false) : setMenuStatus(true)}
          >
            <Image alt="" src={Menu} width={30} height={30} />
          </figure>
        </div>

        <div className="w-6/12 hidden md:block">
          <ul className="flex w-fit border-b">
            <li className="me-2 text-gray-500 hover:text-black">Dinance</li>
            <li className="mx-2 text-gray-500 hover:text-black">Project</li>
            <li className="mx-2 text-gray-500 hover:text-black">Marketplace</li>
            <li className="mx-2 text-gray-500 hover:text-black">Dappstore</li>
          </ul>
        </div>
        <div className="w-3/4 md:w-3/12 flex flex-row-reverse md:flex-row justify-start md:justify-between items-center">
          <button className="mx-1 bg-purple-600 p-2 rounded text-white">
            CREATE
          </button>
          <div className="flex flex-wrap justify-end md:justify-center items-stretch">
            <button className="md:mx-3 border p-2 hidden md:block">
              Ethereum
            </button>
            <button className="md:mx-3 border  md:hidden me-1">
              <Image alt="" src={ETH} width={25} height={25} />
            </button>
            <button className="md:mx-3 border p-2">0x8BaE...85cB</button>
          </div>
        </div>
      </header>
    </>
  );
}

const MenuMobile = () => {
  return (
    <aside className="w-full z-20 flex fixed min-h-screen top-[70px] left-0 backdrop-blur">
        <div className="min-h-screen w-2/3 flex flex-wrap bg-white">
            <ul className="flex w-full content-start flex-wrap py-2">
                <li className="text-gray-600 flex w-full p-3 hover:text-purple-700 justify-between items-center"> Project  <Image alt=''  width={15} height={15} src={ArrowDown} /> </li>  
                <li className="text-gray-600 flex w-full p-3 hover:text-purple-700 justify-between items-center"> Marketplace  <Image alt=''  width={15} height={15} src={ArrowDown} /> </li>  
                <li className="text-gray-600 flex w-full p-3 hover:text-purple-700 justify-between items-center"> Launchpad  <Image alt=''  width={15} height={15} src={ArrowDown} /> </li>  
                <li className="text-gray-600 flex w-full p-3 hover:text-purple-700 justify-between items-center"> Chart <Image alt=''  width={15} height={15} src={RedirectIcon} /></li>  
                <li className="text-gray-600 flex w-full p-3 hover:text-purple-700 justify-between items-center"> Trade <Image alt=''  width={15} height={15} src={RedirectIcon} /></li>  
            </ul>
        </div>
    </aside>
  );
};

export default Header;
