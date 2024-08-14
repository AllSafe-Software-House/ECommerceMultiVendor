import React from 'react'
import { useTranslation } from 'react-i18next'
import HeadBanner from '../components/HeadBanner/HeadBanner';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import MainButton from '../components/button';
export default function Register() {
    const { t } = useTranslation('global');
    return <>
        <HeadBanner text={t('links.register')} />
        <section className='py-16'>
            <div className="container">
                <div className='w-full mx-auto md:w-2/3 border-[#ddd] p-5 border'>
                    <form>
                        <div className="space-y-12">
                            <div className="pb-4">
                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-3">
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

                                    <div className="sm:col-span-3">
                                        <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                            {t('custom-text.last')}
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                autoComplete="family-name"
                                                className="block w-full px-4 rounded-md border  outline-none py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 focus:border-main sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-full">
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
                                    <div className="col-span-full">
                                        <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                        {t('custom-text.address')}
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                autoComplete="street-address"
                                                className="block w-full px-4 rounded-md border  outline-none py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 focus:border-main sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-full sm:col-start-1">
                                        <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                                        {t('custom-text.city')}
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                autoComplete="address-level2"
                                                className="block w-full px-4 rounded-md border  outline-none py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 focus:border-main sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-full sm:col-start-1">
                                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                        {t('custom-text.pass')}
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="password"
                                                autoComplete="address-level2"
                                                className="block w-full px-4 rounded-md border  outline-none py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 focus:border-main sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-full sm:col-start-1">
                                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                        {t('custom-text.passConfirm')}
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="password"
                                                autoComplete="address-level2"
                                                className="block w-full px-4 rounded-md border  outline-none py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 focus:border-main sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 flex items-center gap-x-6">
                            <MainButton text={t('links.register')} />
                        </div>
                        <p className='py-4'>Already have an account? <Link to={'/login'} className="text-main" >Sign in</Link></p>
                    </form>
                </div>
            </div>
        </section>
    </>
}
