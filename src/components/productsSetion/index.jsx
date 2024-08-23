
import MainTitle from '../mainTitle'
import { useTranslation } from 'react-i18next'
import CardElement from '../card'

export default function ProductsSection() {
    const { t } = useTranslation('global')
    return <>
        <section className="py-20">
            <div className="container">
                <MainTitle text={t('custom-text.ourProduct')} title={t('custom-text.newArrival')} />
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
                    <CardElement img={"https://template.hasthemes.com/furnish/furnish/img/product/1.jpg"} />
                    <CardElement img={"https://template.hasthemes.com/furnish/furnish/img/product/1.jpg"} />
                    <CardElement img={"https://template.hasthemes.com/furnish/furnish/img/product/1.jpg"} />
                    <CardElement img={"https://template.hasthemes.com/furnish/furnish/img/product/1.jpg"} />
                    <CardElement img={"https://template.hasthemes.com/furnish/furnish/img/product/1.jpg"} />
                    <CardElement img={"https://template.hasthemes.com/furnish/furnish/img/product/1.jpg"} />
                    <CardElement img={"https://template.hasthemes.com/furnish/furnish/img/product/1.jpg"} />
                    <CardElement img={"https://template.hasthemes.com/furnish/furnish/img/product/1.jpg"} />
                </div>
            </div>
        </section>
    </>
}
