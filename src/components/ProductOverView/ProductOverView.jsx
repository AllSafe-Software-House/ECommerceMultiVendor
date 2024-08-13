import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { CiHeart } from 'react-icons/ci';
import MainButton from '../button';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function ProductOverView() {
  const { t } = useTranslation('global');
  const [counter, setCounter] = useState(1);
  const [mainImg, setMainImg] = useState('https://template.hasthemes.com/furnish/furnish/img/product/1.jpg');
  const images = ['https://template.hasthemes.com/furnish/furnish/img/product/5.jpg',
    'https://template.hasthemes.com/furnish/furnish/img/product/4.jpg',
    'https://template.hasthemes.com/furnish/furnish/img/product/2.jpg',
    'https://template.hasthemes.com/furnish/furnish/img/product/1.jpg']
  function handelCount(count) {
    if (count !== 0) {
      setCounter(count)
    }

  }
  return <>
    <section className='pt-20'>
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full my-4 p-0 md:p-10 lg:p-0 lg:w-1/3">
            <div>
              <img src={mainImg} className='w-full' alt="chair" />
            </div>
            <Swiper
              slidesPerView={2}
              spaceBetween={1}
              breakpoints={{
                586: {
                  slidesPerView: 4,
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
              {images.map((image, i) => (

                <SwiperSlide key={i}>
                  <div onClick={() => setMainImg(image)} className={`mt-5 cursor-pointer ${image === mainImg ? 'opacity-100 ' : 'opacity-50'}`}>
                    <img src={image} className='w-full h-[150px]' />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="w-full my-4 md:ps-8 lg:w-2/3">
            <div className='flex h-full flex-col justify-center'>
              <div>
                <h2 className='font-semibold text-[30px]'>Le Parc Minotti Chair</h2>
                <p className='text-[20px] py-5'>137.00 EGP</p>
                <p className='text-[18px]'>Avalibale</p>
                <p className='mt-7 text-[16px] md:text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tem portul indunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
              <div>
                <div className='my-9'>
                  <span className='hover:text-main duration-150 cursor-pointer'><CiHeart className='text-inherit inline' fontSize={'30px'} /> {t('custom-text.wishlist')}</span>
                </div>
                <div className='flex items-center'>
                  <div className='border-[#ddd] flex items-center justify-between me-7 px-1 py-2 border'>
                    <IoIosArrowBack onClick={(e) => handelCount(counter - 1)} className='mx-5' />
                    {counter}
                    <IoIosArrowForward onClick={(e) => handelCount(counter + 1)} className='mx-5' />
                  </div>
                  <MainButton text={t('custom-text.addCart')} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
}
