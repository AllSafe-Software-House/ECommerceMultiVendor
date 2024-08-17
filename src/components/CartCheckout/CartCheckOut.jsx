import React from 'react'
import { useTranslation } from 'react-i18next'
import MainButton from '../button';
import { Link } from 'react-router-dom';

export default function CartCheckOut() {
    const { t } = useTranslation('global');
    return <>
        <section className='py-10'>
            <div className="container">
                <div className="flex items-center flex-wrap">
                    <div className='w-full lg:w-1/2'>
                        <MainButton text={'Continue Shopping'} />
                        <div className='lg:pe-44 mt-5'>
                            <h2 className="text-[25px] font-semibold leading-7 text-gray-900 border-b pb-3">{t('custom-text.coupon')}</h2>
                            <p className='py-5 text-[#999999]'>{t('custom-text.couponT')}</p>
                            <div className='flex items-center'>
                                <input
                                    type="text"
                                    autoComplete="given-name"
                                    placeholder={t('custom-text.coupon')}
                                    className="block px-4 border w-full outline-none py-2 text-gray-900 shadow-sm  placeholder:text-gray-400 focus:border-main sm:text-sm sm:leading-6"
                                />
                                <MainButton text={t('custom-text.apply')} />
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2'>
                        <div className='lg:ps-44 text-right mt-5'>
                            <h2 className="text-[25px] font-semibold leading-7 text-gray-900 border-b pb-3">{t('custom-text.cartTotal')}</h2>
                            <div className='flex justify-end mt-10 items-center'>
                                <p className='text-[25px] font-medium'>Total</p>
                                <p className='text-[25px] ms-10 font-medium text-main'>$306.00</p>
                            </div>
                            <div className='mt-5'>
                            <Link to={'/checkout'}>
                                <MainButton text={'PROCEED TO CHECKOUT'} />
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}
