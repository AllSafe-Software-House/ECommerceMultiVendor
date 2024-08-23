
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { useTranslation } from 'react-i18next'
import MainButton from '../button'
export default function CheckOutFrom() {
    const {t} = useTranslation('global')
    return <>
        <form>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-[25px] font-semibold leading-7 text-gray-900 border-b pb-4">{t('custom-text.billingDetails')}</h2>
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
                        <div className="sm:col-span-full">
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            {t('custom-text.phone')}
                            </label>
                            <div className="mt-2">
                                <input
                                    type="number"
                                    autoComplete="phone-number"
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
                                    placeholder={t('custom-text.address')}
                                    autoComplete="street-address"
                                    className="block w-full px-4 rounded-md border  outline-none py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 focus:border-main sm:text-sm sm:leading-6"
                                />
                                <input
                                    type="text"
                                    placeholder={t('custom-text.apartment')}
                                    className="block mt-5 w-full px-4 rounded-md border  outline-none py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 focus:border-main sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2 sm:col-start-1">
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

                        <div className="sm:col-span-2">
                            <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                            {t('custom-text.state')}
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    autoComplete="address-level1"
                                    className="block w-full px-4 rounded-md border  outline-none py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 focus:border-main sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                            {t('custom-text.postal')}
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    autoComplete="postal-code"
                                    className="block w-full px-4 rounded-md border  outline-none py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 focus:border-main sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <MainButton type={'submet'} text={t('custom-text.order')}/>
            </div>
        </form>
    </>
}
