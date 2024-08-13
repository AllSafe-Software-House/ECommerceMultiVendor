import { Table } from 'flowbite-react';
import React, { useState } from 'react';
import { HiUserCircle } from "react-icons/hi";

export function DetailsTaps() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="py-10">
            <div className="container">
                <div className="flex space-x-4 border-b-2 border-gray-200">
                    <button
                        onClick={() => setActiveTab(0)}
                        className={`flex items-center space-x-2 px-4 py-2 focus:outline-none ${activeTab === 0
                            ? "text-black border-b-2 border-black"
                            : "text-gray-500 hover:text-gray-700"
                            }`}
                    >
                        <span className='font-semibold'>DATA SHEET</span>
                    </button>
                    <button
                        onClick={() => setActiveTab(1)}
                        className={`flex items-center space-x-2 px-4 py-2 focus:outline-none ${activeTab === 1
                            ? "text-black border-b-2 border-black"
                            : "text-gray-500 hover:text-gray-700"
                            }`}
                    >
                        <span className='font-semibold'>REVIEWS</span>
                    </button>
                    {/* Add more buttons for additional tabs as needed */}
                </div>
                <div className="mt-4">
                    {activeTab === 0 && (
                        <div className="overflow-x-auto">
                            <Table>
                                <Table.Body className="divide-y">
                                    <Table.Row className="bg-white ">
                                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
                                            <p className='font-medium'>Compositions</p>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <p>Cotton</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row className="bg-white ">
                                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
                                            Styles
                                        </Table.Cell>
                                        <Table.Cell>Casual</Table.Cell>
                                    </Table.Row>
                                    <Table.Row className="bg-white ">
                                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900">Properties</Table.Cell>
                                        <Table.Cell>Short Sleeve
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </div>
                    )}
                    {activeTab === 1 && (
                        <div>
                            {/* Settings Tab Content */}
                            <p className="font-medium text-gray-800">
                                This is Settings tab's associated content.
                            </p>
                            {/* Add more JSX content for the Settings tab */}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}