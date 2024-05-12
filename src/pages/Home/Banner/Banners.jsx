import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';

import "swiper/css";
import 'swiper/css/navigation';
import Banner from "./Banner";

const Banners = () => {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/banners").then((res) => {
      console.log("banner", res.data);
      setBanners(res.data);
    });
  }, []);
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
            banners.map((banner, index)=><SwiperSlide key={index}><Banner banner={banner} /></SwiperSlide>)
        }
      </Swiper>
    </div>
  );
};

export default Banners;
