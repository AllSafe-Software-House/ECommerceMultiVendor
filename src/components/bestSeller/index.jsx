    import MainTitle from "../mainTitle";
    import { Swiper, SwiperSlide } from "swiper/react";
    import "swiper/css";
    import CardElement from "../card";
    export default function BestSeller() {
    return (
        <section className="py-20">
        <div className="container">
            <MainTitle title={"Best Seller"} text={"Our Best Seller"} />
            <Swiper
            loop={true}
            spaceBetween={30}
            slidesPerView={4}
            autoplay={true}
            className="mySwiper"
            >
            <SwiperSlide>
                <CardElement img="/src/assets/images/3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <CardElement img="/src/assets/images/3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <CardElement img="/src/assets/images/3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <CardElement img="/src/assets/images/3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <CardElement img="/src/assets/images/3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <CardElement img="/src/assets/images/3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <CardElement img="/src/assets/images/3.jpg" />
            </SwiperSlide>
            </Swiper>
        </div>
        </section>
    );
    }
