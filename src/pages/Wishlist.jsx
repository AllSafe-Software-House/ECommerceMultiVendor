
import HeadBanner from '../components/HeadBanner/HeadBanner'
import { useTranslation } from 'react-i18next'
import { CustomTable } from '../components/Table/Table'

export default function Wishlist() {
    const { t } = useTranslation('global')
    const columns = [
        { header: t('table.remove'), isRemove: true }, // Add this column for the Remove button
        { header: t('table.image'), accessor: 'image', isImage: true },
        { header: t('table.productName'), accessor: 'name' },
        { header: t('table.total'), accessor: 'total' },
        { header: t('table.quantity'), accessor: 'addToCart', addToCart: true },
    ];

    const data = [
        { name: 'Le Parc Minotti Chair', image: 'https://template.hasthemes.com/furnish/furnish/img/product/1.jpg', quantity: 1, total: '$10' },
        { name: 'Le Parc Minotti Chair', image: 'https://template.hasthemes.com/furnish/furnish/img/product/1.jpg', quantity: 1, total: '$10' },
    ];
    return <>
        <HeadBanner text={t('links.wishlist')} />
        <section className='py-16'>
            <div className="container">
                <CustomTable columns={columns} data={data} />
            </div>
        </section>
    </>
}
