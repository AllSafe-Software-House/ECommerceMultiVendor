import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import MainButton from '../button';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';

export const CustomTable = ({ columns, data, imageWidth = '150px', imageHeight = '100px' }) => {
    const {t} = useTranslation('global')
    return (
        <div className="w-full overflow-x-auto">
            <table className="min-w-[1340px] table-auto bg-white border border-gray-200">
                <thead>
                    <tr>
                        {columns.map((col, index) => (
                            <th
                                key={index}
                                className="py-2 px-4 border border-gray-300 text-center text-sm font-medium text-gray-700 whitespace-nowrap"
                            >
                                {col.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex} className="bg-white">
                            {columns.map((col, colIndex) => (
                                <td
                                    key={colIndex}
                                    className="py-2 px-4 text-center border border-gray-300 text-sm text-gray-700 whitespace-nowrap max-w-0"
                                >
                                    {col.isImage ? (
                                        <img
                                            src={row[col.accessor]}
                                            alt={col.header}
                                            className="mx-auto"
                                        />
                                    ) : col.isQuantity ? (
                                        <div className='border-[#ddd] flex items-center justify-between me-7 px-1 py-2 border'>
                                            <IoIosArrowBack className='mx-5' />
                                            1 {/* Static number for quantity */}
                                            <IoIosArrowForward className='mx-5' />
                                        </div>
                                    ) : col.isRemove ? (
                                        <button className="text-red-500 hover:text-red-700">
                                            Remove
                                        </button>
                                    ) : col.addToCart ? (
                                        <MainButton text={t('custom-text.addCart')}/>
                                    ) : (
                                        row[col.accessor]
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
