
import { useTranslation } from 'react-i18next'
import MainButton from '../button'

export default function CheckOutSummary() {
    const { t } = useTranslation('global')
    return <>
        <div>
            <div className='border border-[#ddd] p-5'>
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
            <div className='border mt-10 border-[#ddd] p-5'>
                <h2 className="text-[25px] font-semibold leading-7 text-gray-900 border-b pb-3">{t('custom-text.urOrder')}</h2>
                <div className='flex items-center justify-between my-3 pb-1 border-b border-[#ddd]'>
                    <h4 className='text-[20px] font-semibold'>{t('custom-text.product')}</h4>
                    <h4 className='text-[20px] font-semibold'>{t('custom-text.total')}</h4>
                </div>
                <div className='flex items-center justify-between my-3 pb-1 border-b border-[#ddd]'>
                    <p>Vestibulum suscipit × 1</p>
                    <p>$165.00</p>
                </div>
                <div className='flex items-center justify-between my-3 pb-1 border-b border-[#ddd]'>
                    <p>Vestibulum suscipit × 1</p>
                    <p>$165.00</p>
                </div>
                <div className='flex items-center justify-between my-3 pb-1 border-b border-[#ddd]'>
                    <p>Vestibulum suscipit × 1</p>
                    <p>$165.00</p>
                </div>
                <div className='flex items-center justify-between my-3 pb-1 border-b border-[#ddd]'>
                    <h4 className='text-[20px] font-semibold'>{t('custom-text.cartTotal')}</h4>
                    <h4 className='text-[20px]'>$215.00</h4>
                </div>
                <div className='flex items-center justify-between mt-5 pb-1 border-b border-[#ddd]'>
                    <h4 className='text-[20px] font-semibold'>{t('custom-text.oTotal')}</h4>
                    <h4 className='text-[20px] font-semibold'>$215.00</h4>
                </div>
            </div>
        </div>
    </>
}
