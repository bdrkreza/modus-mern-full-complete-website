import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';
import { useAuth } from '../../lib/Auth';

const UserProfile = () => {

    const { user } = useAuth();
    return (
        <div>
            <body class="bg-grey-lighter mt-8">
                <div class="container mx-auto">
                    <div class="flex">
                        <div class="flex-1">
                            <div class="bg-white shadow mr-8">
                                <div class="px-6 py-6 pb-0 border-t-4 border-green">
                                    <div class="flex mb-4 md:mb-0 justify-between items-center">
                                        <span class="bg-green px-4 py-3 text-gray-700 text-sm rounded-full font-semibold">Online</span>
                                        <span class="bg-grey-lighter px-4 py-2 text-grey-darkest text-xs rounded-full font-semibold"><span class="-mt-1"></span><span class="text-lg text-black">80</span>hr</span>
                                    </div>
                                    {
                                        user ? <img src={user?.photoUrl} height="200" class="rounded-full mx-auto block mb-3 -mt-6 shadow-md" alt="img" /> : <FontAwesomeIcon class="rounded-full mx-auto block mb-3 -mt-6 h-16 shadow-md" icon={faUser} />
                                    }
                                    <div class="text-center text-xl mb-2">{user?.name}</div>
                                    <div class="text-center text-grey-dark mb-6">21 <span class="text-grey-light px-1">&bullet;</span> Whittier, California</div>
                                    <div class="text-center mb-6 flex flex-wrap justify-center">
                                        <span class="border-2 border-grey-light px-4 py-2 rounded-full text-sm text-grey-darker mr-1 mb-1">3 miles away</span>
                                        <span class="border-2 border-grey-light px-4 py-2 rounded-full text-sm text-grey-darker mr-1 mb-1">5* reviews</span>
                                    </div>
                                    <div class="border-1 border-grey-light mb-4 mx-8">

                                    </div>
                                    <div class="text-grey-darker mb-4">
                                        Happy February everyone!:D Im a pretty simple lady. I enjoy meeting with well respected people who give off good vibes.
                                    </div>
                                </div>
                                <a href="#" class="text-center block font-semibold uppercase hover:bg-green hover:text-white no-underline text-grey-darkest py-4">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </div>
    );
};

export default UserProfile