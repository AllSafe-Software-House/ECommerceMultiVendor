import React from 'react';
import { useTranslation } from 'react-i18next';
import MainButton from '../components/button';
import HeadBanner from '../components/HeadBanner/HeadBanner';
import { CiLocationOn, CiMail, CiPhone } from 'react-icons/ci';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function ContactUs() {
    const { t } = useTranslation('global');
    return <>
        <HeadBanner text={t('links.contact')} />
        <section className='py-16'>
            <div className="container">
                <div className="flex flex-wrap">
                    <div className='w-full lg:w-1/3'>
                        <h3 className='text-[22px] font-medium'>{t('custom-text.contactInfo')}</h3>
                        <div className='py-4'>
                            <div className='flex py-2 items-center'>
                                <CiLocationOn className='me-2' />
                                <p>123 West Street, Melbourne Victoria
                                    3000 Australia</p>
                            </div>
                            <div className='flex py-2 items-center'>
                                <CiPhone className='me-2' />
                                <p>+061012345678</p>
                            </div>
                            <div className='flex py-2 items-center'>
                                <CiMail className='me-2' />
                                <p>Support@domain.com</p>
                            </div>
                            <div className='flex py-2 items-center'>
                                <FaFacebookF className='me-2 hover:text-main duration-150' />
                                <FaTwitter className='mx-2 hover:text-main duration-150' />
                                <FaInstagram className='ms-2 hover:text-main duration-150' />
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-2/3 lg:ps-8'>
                        <form>
                            <div className="space-y-12">
                                <div className="pb-4">
                                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                        <div className="sm:col-span-2">
                                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                                {t('custom-text.first')}
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="text"
                                                    autoComplete="given-name"
                                                    className="block w-full px-4 rounded-md border  outline-none py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 focus:border-main sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                                {t('custom-text.email')}
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="email"
                                                    autoComplete="email"
                                                    className="block w-full px-4 rounded-md border  outline-none py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 focus:border-main sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                                {t('custom-text.subject')}
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="text"
                                                    className="block w-full px-4 rounded-md border  outline-none py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 focus:border-main sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-span-full">
                                            <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                                {t('custom-text.message')}
                                            </label>
                                            <div className="mt-2">
                                                <textarea
                                                    rows={5}
                                                    className="block w-full px-4 rounded-md border  outline-none py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 focus:border-main sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 flex items-center gap-x-6">
                                <MainButton type={'submit'} text={t('custom-text.send')} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <section className='py-16'>
            <div className="container">
                <iframe className='w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.3486038594783!2d31.358048876461943!3d30.055540518043287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583dafd66227f1%3A0xd0de03f9664f6750!2sAll%20Safe!5e0!3m2!1sen!2seg!4v1723640294248!5m2!1sen!2seg" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    </>
}
