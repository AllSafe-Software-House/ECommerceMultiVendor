
import MainTitle from '../mainTitle'
import { useTranslation } from 'react-i18next';
import CardElement from '../card';

export default function BlogSection() {
    const { t } = useTranslation('global');
    return <>
        <section className="py-20">
            <div className="container">
                <MainTitle text={t('blogSection.text')} title={t('blogSection.title')} />
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-4'>
                    <CardElement blog={true} img={'https://template.hasthemes.com/furnish/furnish/img/blog/1.jpg'}/>
                    <CardElement blog={true} img={'https://template.hasthemes.com/furnish/furnish/img/blog/1.jpg'}/>
                    <CardElement blog={true} img={'https://template.hasthemes.com/furnish/furnish/img/blog/1.jpg'}/>
                </div>
            </div>
        </section>
    </>
}
