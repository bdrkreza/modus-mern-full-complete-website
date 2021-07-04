import React from 'react';
import Notification from './Notifications'
import Help from './Help'
import UserMenu from './UserMenu'
import SearchModal from './SearchModal';

const DashHeader = ({ sidebarOpen, setSidebarOpen }) => {
    return (
        <>
            <header className="sticky top-0 bg-gray-800 border-b border-gray-200 z-30">
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 -mb-px">

                        {/* Header: Left side */}
                        <div className="flex">

                            {/* Hamburger button */}
                            <button
                                className="text-gray-500 hover:text-gray-600 lg:hidden"
                                aria-controls="sidebar"
                                aria-expanded={sidebarOpen}
                                onClick={() => setSidebarOpen(!sidebarOpen)}
                            >
                                <span className="sr-only">Open sidebar</span>
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="4" y="5" width="16" height="2" />
                                    <rect x="4" y="11" width="16" height="2" />
                                    <rect x="4" y="17" width="16" height="2" />
                                </svg>

                            </button>

                        </div>

                        {/* Header: Right side */}
                        <div className="flex items-center">
                            <SearchModal />
                            <Notification />
                            <Help />

                            {/*  Divider */}
                            <hr className="w-px h-6 bg-gray-200 mx-3" />

                            <UserMenu />
                        </div>

                    </div>
                </div>
            </header>
        </>
    );
};

export default DashHeader;