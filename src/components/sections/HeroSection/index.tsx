import CameraIcon from "@/components/icons/CameraIcon";
import ChatIcon from "@/components/icons/ChatIcon";
import CreditIcon from "@/components/icons/CreditIcon";
import HeartIcon from "@/components/icons/HeartIcon";
import MiddleIcon from "@/components/icons/MiddleIcon";
import NotifyIcon from "@/components/icons/NotifyIcon";
import PlayerIcon from "@/components/icons/PlayerIcon";
import SolidCameraIcon from "@/components/icons/SolidCameraIcon";
import TurbinIcon from "@/components/icons/TurbinIcon";
import Image from "next/image";
import styles from "./styles.module.css";
const HeroSection = () => {
  return (
    <div className={`z-0 pt-16 pb-16 ${styles.bg}`}>
      <div className="relative pb-16 pt-0">
        {/* top icons */}
        <div className="flex flex-row justify-between">
          <div>
            <div className="absolute top-[60px] left-[75px] rotate-12">
              <CreditIcon />
            </div>
          </div>
          <div>
            <div className="absolute top-[0px] rotate-[3deg]">
              <NotifyIcon />
            </div>
          </div>
          <div>
            <div className="absolute top-[40px] left-[270px] rotate-[0deg]">
              <PlayerIcon />
            </div>
          </div>
          <div>
            <div className="absolute top-[20px] left-[470px] rotate-[-7deg]">
              <CameraIcon />
            </div>
          </div>

          {/* MINT NFT */}
          <div className="absolute top-[80px] left-1/2 transform -translate-x-1/2 text-center">
            <h3 className={styles.mint_nft}>MINT ALL THE</h3>
            <h1 className={styles.nft_header}>NFT’S</h1>
          </div>

          <div>
            <div className="absolute top-[0px] rotate-[7deg]">
              <MiddleIcon />
            </div>
          </div>
          <div>
            <div className="absolute top-[80px] rotate-[5deg]">
              <SolidCameraIcon />
            </div>
          </div>
          <div>
            <div className="absolute top-[0px] right-[150px] rotate-12">
              <HeartIcon />
            </div>
          </div>
          <div>
            <div className="absolute top-[0px] right-[17px] rotate-12">
              <ChatIcon />
            </div>
          </div>
        </div>

        {/* turbine svg */}
        <div className="z-[2] flex flex-row container mx-auto w-screen">
          <TurbinIcon />
        </div>

        {/* mazda image */}
        <div className="z-2">
          <Image
            src={"/img/mazda-mx-5-rf-side-view 1.png"}
            alt="mazda car"
            layout="fill" // required
            objectFit="cover" // change to suit your needs
          />

          {/* car detail */}
          <div className="absolute bottom-[-45px] left-1/2 transform -translate-x-1/2 text-center">
            <p className={styles.car_details}>MAZDA MX-5 RF</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
