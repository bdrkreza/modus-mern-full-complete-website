import React from 'react';

import Image01 from '../../../assets/customer/user-36-01.jpg';
import Image02 from '../../../assets/customer/user-36-02.jpg';
import Image03 from '../../../assets/customer/user-36-04.jpg';
import Image04 from '../../../assets/customer/user-36-05.jpg';
import Image05 from '../../../assets/customer/user-36-06.jpg';

function Customers() {

    const customers = [
        {
            id: '0',
            image: Image01,
            name: 'Alex Shatov',
            email: 'alexshatov@gmail.com',
            location: '🇺🇸',
            spent: '$2,890.66',
        },
        {
            id: '1',
            image: Image02,
            name: 'Philip Harbach',
            email: 'philip.h@gmail.com',
            location: '🇩🇪',
            spent: '$2,767.04',
        },
        {
            id: '2',
            image: Image03,
            name: 'Mirko Fisuk',
            email: 'mirkofisuk@gmail.com',
            location: '🇫🇷',
            spent: '$2,996.00',
        },
        {
            id: '3',
            image: Image04,
            name: 'Olga Semklo',
            email: 'olga.s@cool.design',
            location: '🇮🇹',
            spent: '$1,220.66',
        },
        {
            id: '4',
            image: Image05,
            name: 'Burak Long',
            email: 'longburak@gmail.com',
            location: '🇬🇧',
            spent: '$1,890.66',
        },
    ];



    return (
        <div className="col-span-full xl:col-span-6 shadow-2xl rounded-xl border border-gray-700 backgroundColor text-gray-300" >
            <header className="px-5 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-2xl text-center text-gray-400">Customers</h2>
            </header>
            <div className="p-3">

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                        {/* Table header */}
                        <thead className="text-1xl font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Name</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Email</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Spent</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Country</div>
                                </th>
                            </tr>
                        </thead>
                        {/* Table body */}
                        <tbody className="text-sm divide-y divide-gray-100">
                            {
                                customers.map(customer => {
                                    return (
                                        <tr key={customer.id}>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                                        <img className="rounded-full" src={customer.image} width="40" height="40" alt={customer.name} />
                                                    </div>
                                                    <div className="font-medium text-gray-300">{customer.name}</div>
                                                </div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-left">{customer.email}</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-left font-medium text-green-500">{customer.spent}</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-lg text-center">{customer.location}</div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>

                </div>

            </div>
        </div>
    );
}

export default Customers;
