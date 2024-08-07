import React, { useTransition } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import img1 from '../../assets/images/grey-comfortable-armchair-isolated-white-background.webp';
import img2 from '../../assets/images/vecteezy_fabric-armchair-soft-cushion-with-metal-leg-3d-rendering_11794199-min.webp';
import MainButton from '../button';
import { useTranslation } from 'react-i18next';
export default function Hero() {
  const { t } = useTranslation('global')
  return (
    <section className='min-h-[100vh] flex items-center justify-center bg-[#ece8e5]'>
      <div className="container h-full">
        <div className='flex h-full items-center justify-center'>
          <Swiper
            spaceBetween={30}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className='flex flex-wrap items-center'>
                <div className='w-full sm:w-1/2 lg:w-1/3'>
                  <img src={img1} alt="chair" className='w-full' />
                </div>
                <div className='w-full sm:w-1/2 lg:w-2/3'>
                  <h4 className='text-[#282828] mb-4 text-[18px] font-medium'>WELCOME TO OUR</h4>
                  <h1 className='text-[#282828] font-bold text-[40px] md:text-[45px] lg:text-[50px]'>FURNITURE GALLERY</h1>
                  <p className='text-[#282828] lg:w-2/3'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                  <div className='mt-7'>
                    <MainButton text={t('links.buyNow')} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex flex-wrap items-center'>
                <div className='w-full sm:w-1/2 lg:w-1/3'>
                  <img src={img1} alt="chair" className='w-full' />
                </div>
                <div className='w-full sm:w-1/2 lg:w-2/3'>
                  <h4 className='text-[#282828] mb-4 text-[18px] font-medium'>WELCOME TO OUR</h4>
                  <h1 className='text-[#282828] font-bold text-[40px] md:text-[45px] lg:text-[50px]'>FURNITURE GALLERY</h1>
                  <p className='text-[#282828] lg:w-2/3'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                  <div className='mt-7'>
                    <MainButton text={t('links.buyNow')} />
                  </div>
                </div>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>
      </div>
    </section>
  )
}
