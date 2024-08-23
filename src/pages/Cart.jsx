
import HeadBanner from '../components/HeadBanner/HeadBanner'
import { useTranslation } from 'react-i18next'
import { CustomTable } from '../components/Table/Table';
import CartCheckOut from '../components/CartCheckout/CartCheckOut';

export default function Cart() {
    const { t } = useTranslation('global');
    const columns = [
        { header: t('table.image'), accessor: 'image', isImage: true },
        { header: t('table.productName'), accessor: 'name' },
        { header: t('table.quantity'), accessor: 'quantity', isQuantity: true },
        { header: t('table.total'), accessor: 'total' },
        { header: t('table.remove'), isRemove: true } // Add this column for the Remove button
      ];

    const data = [
        { name: 'Le Parc Minotti Chair', image: 'https://template.hasthemes.com/furnish/furnish/img/product/1.jpg', quantity: 1, total: '$10' },
        { name: 'Le Parc Minotti Chair', image: 'https://template.hasthemes.com/furnish/furnish/img/product/1.jpg', quantity: 1, total: '$10' },
    ];
    return <>
        <HeadBanner text={t('links.cart')} />
        <section className='py-16'>
            <div className="container">
                <CustomTable columns={columns} data={data} />
            </div>
        </section>
        <CartCheckOut />
    </>
}
