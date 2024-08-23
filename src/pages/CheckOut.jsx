
import HeadBanner from '../components/HeadBanner/HeadBanner'
import { useTranslation } from 'react-i18next'
import CheckOutFrom from '../components/CheckOutForm/CheckOutFrom'
import CheckOutSummary from '../components/CheckoutSummary/CheckOutSummary'

export default function CheckOut() {
    const { t } = useTranslation('global')
    return <>
        <HeadBanner text={t('links.checkout')} />
        <section className='py-16'>
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full my-5 lg:pe-5 lg:w-1/2">
                        <CheckOutFrom />
                    </div>
                    <div className="w-full my-5 lg:ps-5 lg:w-1/2">
                        <CheckOutSummary />
                    </div>
                </div>
            </div>
        </section>
    </>
}
