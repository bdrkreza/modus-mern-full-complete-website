import React from 'react';

import Image01 from '../../../assets/customer/user-36-01.jpg';
import Image02 from '../../../assets/customer/user-36-02.jpg';
import Image03 from '../../../assets/customer/user-36-04.jpg';
import Image04 from '../../../assets/customer/user-36-05.jpg';
import Image05 from '../../../assets/customer/user-36-06.jpg';

const people = [
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

function Orders() {

    return (
        <div className="flex flex-col bg-gray-900">
            <h1 className="text-2xl text-center mt-5 uppercase text-gray-400">Customer Orders</h1>
            <div className="my-2 overflow-x-auto sm:-mx-6 lg:-mx-2 ">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6   lg:px-8">

                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">

                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        product
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Amount
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        issued/due
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Status
                                    </th>
                                    <th scope="col" className="relative px-6 py-3">
                                        <span className="">Action</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="backgroundColor text-gray-400 divide-y divide-gray-200">
                                {people.map((person) => (
                                    <tr key={person.email}>

                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10">
                                                    <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium">{person.name}</div>
                                                    <div className="text-sm text-gray-500">{person.email}</div>
                                                </div>
                                            </div>
                                        </td>

                                        {/* product */}
                                        <td class="px-5 py-5 border-b border-gray-200  text-sm">
                                            <div class="flex">
                                                <div class="flex-shrink-0 w-10 h-10">
                                                    <img
                                                        class="w-full h-full rounded-full"
                                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                        alt=""
                                                    />
                                                </div>
                                                <div class="ml-3">
                                                    <p class="whitespace-no-wrap">
                                                        Molly Sanders
                                                    </p>
                                                    <p class="text-gray-200 whitespace-no-wrap">000004</p>
                                                </div>
                                            </div>
                                        </td>

                                        {/* amount */}
                                        <td class="px-5 py-5 border-b border-gray-200 text-sm">
                                            <p class="whitespace-no-wrap">$214,000</p>
                                            <p class="text-gray-200 whitespace-no-wrap">USD</p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200  text-sm">
                                            <p class="whitespace-no-wrap">Sept 25, 2019</p>
                                            <p class="text-gray-600 whitespace-no-wrap">Due in 6 days</p>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                Active
                                            </span>
                                        </td>

                                        {/* action */}
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <div class="flex item-center justify-center">
                                                <div class="w-6 mr-3 text-green-200 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                    </svg>
                                                </div>
                                                <div class="w-6  transform  text-red-400 hover:text-purple-500 hover:scale-110 cursor-pointer">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Orders;
