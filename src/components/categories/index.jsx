import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import CardElement, { CategoryCard } from "../card";
import MainTitle from "../mainTitle";
export default function Categories() {
  return (
    <section className="py-20">
      <div className="bg-[#f5f5f5] pb-7 pt-8">
        <div className="container">
          <h2 className="title text-center text-2xl font-bold mb-7">Top Categories Of Month</h2>
          <Swiper
            loop={true}
            spaceBetween={30}
            slidesPerView={6}
            autoplay={true}
            className="mySwiper bg-[#f5f5f5]"
          >
            <SwiperSlide>
              <CategoryCard />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryCard />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryCard />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryCard />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryCard />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryCard />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryCard />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryCard />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
