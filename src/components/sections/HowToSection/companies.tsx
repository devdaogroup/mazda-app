import React from 'react';
import Image from "next/image";
import ArrowTopRight from "@/assets/img/arrowTopRight.svg";

function Companies() {
    return (
        <div className="flex overflow-hidden my-10  w-full p-2 border-y">
            <div className="p-1 whitespace-nowrap mx-1 px-3 border-r text-xs text-white w-auto flex">
                Fantom Company
                <Image src={ArrowTopRight} className="mx-2" alt={"companies"} width={12} height={12}/>
            </div>
            <div className="p-1 whitespace-nowrap mx-1 px-3 border-r text-xs text-white w-auto flex">
                A-Star Company
                <Image src={ArrowTopRight} className="mx-2" alt={"companies"} width={12} height={12}/>
            </div>
            <div className="p-1 whitespace-nowrap mx-1 px-3 border-r text-xs text-white w-auto flex">
                Key3 Eventos Tokyo
                <Image src={ArrowTopRight} className="mx-2" alt={"companies"} width={12} height={12}/>
            </div>
            <div className="p-1 whitespace-nowrap mx-1 px-3 border-r text-xs text-white w-auto flex">
                Nill Developers
                <Image src={ArrowTopRight} className="mx-2" alt={"companies"} width={12} height={12}/>
            </div>
            <div className="p-1 whitespace-nowrap mx-1 px-3 border-r text-xs text-white w-auto flex">
                Web3 Global Hackathon 2023
                <Image src={ArrowTopRight} className="mx-2" alt={"companies"} width={12} height={12}/>
            </div>
            <div className="p-1 whitespace-nowrap mx-1 px-3 border-r text-xs text-white w-auto flex">
                Bunzz Company
                <Image src={ArrowTopRight} className="mx-2" alt={"companies"} width={12} height={12}/>
            </div>
            <div className="p-1 whitespace-nowrap mx-1 px-3 border-r text-xs text-white w-auto flex">
                Mitsubishi Estate
                <Image src={ArrowTopRight} className="mx-2" alt={"companies"} width={12} height={12}/>
            </div>
            <div className="p-1 whitespace-nowrap mx-1 px-3 border-r text-xs text-white w-auto flex">
                Unchain
                <Image src={ArrowTopRight} className="mx-2" alt={"companies"} width={12} height={12}/>
            </div>
            <div className="p-1 whitespace-nowrap mx-1 px-3 border-r text-xs text-white w-auto flex">
                Heal-III
                <Image src={ArrowTopRight} className="mx-2" alt={"companies"} width={12} height={12}/>
            </div>
        </div>
    );
}

export default Companies;