import { faBlog, faShippingFast } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink, useLocation, } from 'react-router-dom';
import '../../../App.css'

const SideBarCard = ({ url }) => {

    const location = useLocation();
    const { pathname } = location;
    const page = pathname.split('/')[1];


    return (
        <>
            {/* Dashboard */}
            <div >
                <h3 className="text-lg uppercase text-yellow-500 font-bold pl-3">Menu</h3>
                <ul className="mt-3 " >
                    <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0
                    focus:outline-none hover:bg-gray-800   border-l-4 border-transparent hover:border-yellow-500 
                    ${page === '' && 'bg-gray-900'}`}>
                        <NavLink exact to='/home' className={`block text-gray-200  transition duration-150 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-yellow-600 focus:ring-opacity-50 py-1
                        ${page === '' && 'hover:text-red-500'}`}>
                            <div className="flex flex-grow">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                                <span className="text-sm font-medium">Home</span>
                            </div>
                        </NavLink>
                    </li>


                    <li className={`px-3 py-1 rounded-sm mb-0.5 last:mb-0 
                       
                    ${page === '' && 'bg-gray-900'}`}>
                        <NavLink exact to={`${url}/dashboard`} className={`block text-gray-200  transition duration-150  focus:outline-none focus:ring focus:ring-offset-2 focus:ring-yellow-600 focus:ring-opacity-50 
                        py-1  border-b-2 border-gray-800 hover:border-yellow-500
                   
                        ${page === '' && 'hover:text-gray-200'}`}>
                            <div className="flex flex-grow">
                                <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-6 w-6 mr-3" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                </svg>
                                <span className="text-sm font-medium  ">Overview</span>
                            </div>
                        </NavLink>
                    </li>


                    <li className={`px-3 py-1 rounded-xs mb-0.5 last:mb-0
                 
                    ${page === '' && 'bg-gray-900'}`}>
                        <NavLink exact to={`${url}/orders`} className={`block text-gray-200  transition duration-150 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-yellow-600 focus:ring-opacity-50
                        py-1  border-b-2 border-gray-800 hover:border-yellow-500
                        ${page === '' && 'hover:text-gray-200'}`}>
                            <div className="flex flex-grow">
                                <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-6 w-6 mr-3" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd" />
                                </svg>
                                <span className="text-sm font-medium">Orders</span>
                            </div>
                        </NavLink>
                    </li>

                    <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${page === '' && 'bg-gray-900'}`}>
                        <NavLink exact to={`${url}/stores`} className={`block text-gray-200 transition duration-150 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-yellow-600 focus:ring-opacity-50
                          py-1  border-b-2 border-gray-800 hover:border-yellow-500
                        ${page === '' && 'hover:text-gray-200'}`}>
                            <div className="flex flex-grow">
                                <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-6 w-6 mr-3" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                                    <path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd" />
                                </svg>
                                <span className="text-sm font-medium">Stores</span>
                            </div>
                        </NavLink>
                    </li>

                    <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${page === '' && 'bg-gray-900'}`}>
                        <NavLink exact to={`${url}/blogs`} className={`block text-gray-200  transition duration-150 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-yellow-600 focus:ring-opacity-50
                          py-1  border-b-2 border-gray-800 hover:border-yellow-500
                        ${page === '' && 'hover:text-gray-200'}`}>
                            <div className="flex flex-grow">
                                <FontAwesomeIcon class="h-6 w-6 mr-3" icon={faBlog} />
                                <span className="text-sm font-medium">Blogs</span>
                            </div>
                        </NavLink>
                    </li>

                    <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${page === '' && 'bg-gray-900'}`}>
                        <NavLink exact to={`${url}/settings`} className={`block text-gray-200  transition duration-150 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-yellow-600 focus:ring-opacity-50
                          py-1  border-b-2 border-gray-800 hover:border-yellow-500
                        ${page === '' && 'hover:text-gray-200'}`}>
                            <div className="flex flex-grow">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="text-sm font-medium">Settings</span>
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* Business */}
            <div>
                <h3 className="text-lg uppercase text-yellow-500 font-bold mt-3 pl-3">Business</h3>
                <ul className="mt-3">
                    <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${page === '' && 'bg-gray-900'}`}>
                        <NavLink exact to={`${url}/shipment`} className={`block text-gray-200 hover:text-yellow-100 transition duration-150 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-yellow-600 focus:ring-opacity-50
                          py-1  border-b-2 border-gray-800 hover:border-yellow-500
                        ${page === '' && 'hover:text-gray-200'}`}>
                            <div className="flex flex-grow">
                                <FontAwesomeIcon class="h-6 w-6 mr-3" icon={faShippingFast} />
                                <span className="text-sm font-medium">Shipment</span>
                            </div>
                        </NavLink>
                    </li>

                    <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${page === '' && 'bg-gray-900'}`}>
                        <NavLink exact to={`${url}/employee`} className={`block text-gray-200 hover:text-yellow-100 transition duration-150 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-yellow-600 focus:ring-opacity-50 
                          py-1  border-b-2 border-gray-800 hover:border-yellow-500
                        ${page === '' && 'hover:text-gray-200'}`}>
                            <div className="flex flex-grow">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                                </svg>
                                <span className="text-sm font-medium">Employee</span>
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default SideBarCard;