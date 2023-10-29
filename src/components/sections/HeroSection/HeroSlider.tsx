// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import Image from "next/image";
import { Navigation } from "swiper/modules";
import styles from "./styles.module.css";

const HeroSlider = () => {
  return (
    <div>
      <Swiper navigation={false} modules={[Navigation]} className="heroSlider">
        <SwiperSlide>
          <div style={{ width: "auto", height: "100vh", position: "relative" }}>
            <Image
              src={"/img/mazda-mx-5-rf-side-view 1.png"}
              alt="mazda car"
              style={{ objectFit: "contain" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
              fill
            />
          </div>
          <p className={styles.car_details}>MAZDA MX-5 RF</p>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ width: "auto", height: "100vh", position: "relative" }}>
            <Image
              src={"/img/mazda-mx-5-rf-side-view 1.png"}
              alt="mazda car"
              style={{ objectFit: "contain" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
              fill
            />
          </div>
          <p className={styles.car_details}>MAZDA MX-5 RF</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
