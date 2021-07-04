import React from 'react';
import { Link } from 'react-router-dom';
import User01 from '../../../assets/images/image/tes1.jfif';
import User02 from '../../../assets/images/image/tes2.jfif';
import User03 from '../../../assets/images/image/tes3.jpg';
import User04 from '../../../assets/images/image/tes4.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faPlusCircle,
} from "@fortawesome/free-solid-svg-icons"

function DashboardAvatar({ url }) {
    return (
        <div className="flex mt-5">
            <div>
                <ul className="flex flex-wrap justify-center sm:justify-start mb-8 sm:mb-0 -space-x-3 -ml-px mt-5 px-5">
                    <li>
                        <Link className="block" to="#0">
                            <img className="w-9 h-9 rounded-full" src={User01} width="36" height="36" alt="User 01" />
                        </Link>
                    </li>
                    <li>
                        <Link className="block" to="#0">
                            <img className="w-9 h-9 rounded-full" src={User02} width="36" height="36" alt="User 02" />
                        </Link>
                    </li>
                    <li>
                        <Link className="block" to="#0">
                            <img className="w-9 h-9 rounded-full" src={User03} width="36" height="36" alt="User 03" />
                        </Link>
                    </li>
                    <li>
                        <Link className="block" to="#0">
                            <img className="w-9 h-9 rounded-full" src={User04} width="36" height="36" alt="User 04" />
                        </Link>
                    </li>
                    <li>
                        <button className="flex justify-center items-center w-9 h-9 rounded-full bg-white border border-gray-200 hover:border-gray-300 text-indigo-500 shadow-sm transition duration-150 ml-2">
                            <span className="sr-only">Add new Posts</span>
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16">
                                <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                            </svg>
                        </button>
                    </li>
                </ul>
            </div>
            <div className="ml-auto mr-5 mt-5">
                <Link to={`${url}/addStoreItem`}>
                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                        <FontAwesomeIcon icon={faPlusCircle} className="mr-4" />
                        Create Posts
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default DashboardAvatar;
