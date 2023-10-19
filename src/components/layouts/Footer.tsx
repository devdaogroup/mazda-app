import React from "react";

function Footer() {
  return (
    <footer className="min-h-[200px] w-full flex flex-wrap">
      <div className="w-full md:w-1/3  h-[200px]  flex items-center justify-center  ">
        <figure className="w-[20px] h-[20px] border "></figure>
        <a href="" className="text-gray-500 font-bold">
          ABOUT US
        </a>
      </div>
      <div className="w-full md:w-1/3 h-[200px]  flex-wrap py-8 px-16 flex">
        <div className="w-full font-bold text-gray-700 text-lg pb-5">Connect with us</div>
        <a href="/" className="text-gray-700 hover:text-black py-1 flex w-full">Docs</a>
        <a href="/" className="text-gray-700 hover:text-black py-1 flex w-full">Twitter</a>
        <a href="/" className="text-gray-700 hover:text-black py-1 flex w-full">Discord</a>
      </div>
      <div className="w-full md:w-1/3 h-[200px]  flex-wrap py-8 px-16 flex">
        <div className="w-full font-bold text-gray-700 text-lg pb-5">Developers</div>
        <a href="/" className="text-gray-700 hover:text-black py-1 flex w-full">Github</a>
        <a href="/" className="text-gray-700 hover:text-black py-1 flex w-full">Taiga</a>
      </div>
    </footer>
  );
}

export default Footer;
