import React from 'react'
import MainTitle from '../mainTitle'
import { useTranslation } from 'react-i18next';
import CardElement from '../card';

export default function BlogSection() {
    const { t } = useTranslation('global');
    return <>
        <section className='py-32'>
            <div className="container">
                <MainTitle text={t('blogSection.text')} title={t('blogSection.title')} />
                <div className="flex flex-wrap items-center">
                    <div className="w-full md:w-1/2 px-3 my-3 lg:w-1/3">
                        <CardElement blog={true} img={'https://template.hasthemes.com/furnish/furnish/img/blog/1.jpg'}/>
                    </div>
                    <div className="w-full md:w-1/2 px-3 my-3 lg:w-1/3">
                        <CardElement blog={true} img={'https://template.hasthemes.com/furnish/furnish/img/blog/1.jpg'}/>
                    </div>
                    <div className="w-full md:w-1/2 px-3 my-3 lg:w-1/3">
                        <CardElement blog={true} img={'https://template.hasthemes.com/furnish/furnish/img/blog/1.jpg'}/>
                    </div>
                </div>
            </div>
        </section>
    </>
}
