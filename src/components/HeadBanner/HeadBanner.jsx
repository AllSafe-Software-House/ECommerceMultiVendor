import React from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'

export default function HeadBanner({link}) {
    const {t} = useTranslation('global')
    const location = useLocation();
    const pathAfterHost = location.pathname;
  return <>
    <div className='pt-8 pb-6 md:pt-16 md:pb-8 lg:pt-40 lg:pb-10 bg-cover' style={{backgroundImage:"url('https://template.hasthemes.com/furnish/furnish/img/bg/2.jpg')"}}>
        <div className="container">
            <h3 className='text-[30px] mt-5 font-semibold'>{t('custom-text.shop')}</h3>
            <p className='pt-5'>{t('links.home')} / <span className='uppercase text-main'>{link}</span></p>
        </div>
    </div>
  </>
}
