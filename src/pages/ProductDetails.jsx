import React from 'react'
import HeadBanner from '../components/HeadBanner/HeadBanner'
import { useTranslation } from 'react-i18next'
import ProductOverView from '../components/ProductOverView/ProductOverView'
import { DetailsTaps } from '../components/DetailsTaps/DetailsTaps'
import RelatedProducts from '../components/RelatedProducts/RelatedProducts'

export default function ProductDetails() {
    const { t } = useTranslation('global')
    return <>
        <HeadBanner text={t('custom-text.product_details')} />
        <ProductOverView />
        <DetailsTaps />
        <RelatedProducts/>
    </>
}
