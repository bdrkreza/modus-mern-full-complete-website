import React from 'react';
import { Link } from 'react-router-dom';
import { ourteam } from '../../assets/Data/ourTeam';
import imageUrl from '../../assets/images/slider/slider1.png'
import TeamStarRating from './TeamStarRating';
const OurTeam = () => {
    return (
        <>
            <section>
                <div class="container mx-auto px-0 text-center py-10 text-gray-700">
                    <h2 class="mb-6 text-4xl font-bold text-center uppercase">meet our team</h2>
                    <h3 class="text-md px-64">We'll never get it out now. So certain are you. Always with you it cannot be done. Hear you nothing that I say? Master, moving stones around is one thing. This is totally different. No! No different!</h3>
                </div>
                <div className="flex flex-wrap">
                    {
                        ourteam.map((data) => (
                            <div class="p-4 md:w-1/3 md:mb-0 mb-1 flex flex-col justify-center items-center max-w-sm mx-auto" >
                                <div>
                                    <img src={data.img} alt=" random imgee" class="w-full h-52 w-16 object-cover object-center rounded-lg shadow-md" />
                                    <div class="relative px-4 -mt-16  ">
                                        <div class="bg-white p-6 rounded-lg shadow-lg">
                                            <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">{data.name}</h4>

                                            <div class="mt-1">
                                                {data.designation}
                                            </div>
                                            <div class="mt-4">
                                                <span class="text-teal-600 text-md font-semibold">
                                                    <TeamStarRating
                                                        count={5}
                                                        size={40}
                                                        value={data.rating}
                                                        activeColor={'#FFBF00'}
                                                        inactiveColor={'#ddd'} />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
                <Link to="/contact" className=" flex items-center justify-center">
                    <button class="bg-gray-500 font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider hover:border-red hover:text-white hover:bg-yellow-600">Contact</button>
                </Link>

            </section>

        </>
    );
};

export default OurTeam;