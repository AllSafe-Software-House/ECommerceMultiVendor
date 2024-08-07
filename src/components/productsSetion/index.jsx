import React from 'react'
import MainTitle from '../mainTitle'
import { useTranslation } from 'react-i18next'
import CardElement from '../card'

export default function ProductsSection() {
    const {t} = useTranslation('global')
    return <>
        <section className='py-36'>
            <div className="container">
                <MainTitle text={t('custom-text.ourProduct')} title={t('custom-text.newArrival')}/>
                <div className="flex items-center flex-wrap">
                    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                        <CardElement/>
                    </div>
                    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                        <CardElement/>
                    </div>
                    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                        <CardElement/>
                    </div>
                    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                        <CardElement/>
                    </div>
                </div>
            </div>
        </section>
    </>
}
