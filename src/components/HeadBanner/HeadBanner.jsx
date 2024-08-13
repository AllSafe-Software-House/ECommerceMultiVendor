import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'

export default function HeadBanner({ text }) {
  const { t } = useTranslation('global')
  const location = useLocation();
  const pathAfterHost = location.pathname;
  return <>
    <div className='pt-8 pb-6 md:pt-16 md:pb-8 lg:pt-40 lg:pb-10 bg-cover' style={{ backgroundImage: "url('https://template.hasthemes.com/furnish/furnish/img/bg/2.jpg')" }}>
      <div className="container">
        <h3 className='text-[30px] mt-5 font-semibold'>{text}</h3>
        <Link to={'/'}><span className='pt-3 hover:text-main duration-150'>{t('links.home')}</span></Link> / <span className='uppercase text-main'>{text}</span>
      </div>
    </div>
  </>
}
