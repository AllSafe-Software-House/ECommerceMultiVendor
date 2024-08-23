
import HeadBanner from '../components/HeadBanner/HeadBanner'
import Products from '../components/Products/Products'
import { useTranslation } from 'react-i18next'

export default function Shop() {
  const {t} = useTranslation('global')
  return <>
    <HeadBanner  text={t('custom-text.shop')}/>
    <Products />
  </>
}
