import SectionTitle from "../SectionTitle/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import img1 from '../../assets/home/slide1.jpg'
import img2 from '../../assets/home/slide2.jpg'
import img3 from '../../assets/home/slide3.jpg'
import img4 from '../../assets/home/slide4.jpg'
import img5 from '../../assets/home/slide5.jpg'

const OrderOnline = () => {
    return (
        <div className="my-10">
            <SectionTitle heading={"from 11am to 10pm"} subHeading={"Order Online"}></SectionTitle>

            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="imgagefood" />
          <h3 className="text-4xl -mt-28 ml-20">Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="imgagefood" />
          <h3 className="text-4xl -mt-28 ml-20">Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="imgagefood" />
          <h3 className="text-4xl -mt-28 ml-20">Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="imgagefood" />
          <h3 className="text-4xl -mt-28 ml-20">Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="imgagefood" />
          <h3 className="text-4xl -mt-28 ml-20">Salads</h3>
        </SwiperSlide>
        
      </Swiper>
        </div>
    );
};

export default OrderOnline;