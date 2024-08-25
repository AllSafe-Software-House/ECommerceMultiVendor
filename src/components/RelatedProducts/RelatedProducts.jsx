
import MainTitle from '../mainTitle'
import { useTranslation } from 'react-i18next'
import { Swiper, SwiperSlide } from 'swiper/react'
import CardElement from '../card'

export default function RelatedProducts() {
    const { t } = useTranslation('global')
    return <>
        <section className='py-10'>
            <div className="container">
                <MainTitle title={t('custom-text.related')} />
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    breakpoints={{
                        586: {
                            slidesPerView: 2,
                            spaceBetween: 1,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 1,
                        },
                        1279: {
                            slidesPerView: 4,
                            spaceBetween: 1,
                        },
                    }}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <CardElement img={'https://template.hasthemes.com/furnish/furnish/img/product/1.jpg'}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardElement img={'https://template.hasthemes.com/furnish/furnish/img/product/1.jpg'}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardElement img={'https://template.hasthemes.com/furnish/furnish/img/product/1.jpg'}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardElement img={'https://template.hasthemes.com/furnish/furnish/img/product/1.jpg'}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardElement img={'https://template.hasthemes.com/furnish/furnish/img/product/1.jpg'}/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    </>
}
