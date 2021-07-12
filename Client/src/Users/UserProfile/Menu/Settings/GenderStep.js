import React from 'react';

const GenderStep = () => {
    return (
        <div>
            <div>
                <div class="mb-5">
                    <label for="email" class="font-bold mb-1 text-gray-700 block">Gender</label>

                    <div class="flex">
                        <label
                            class="flex justify-start items-center text-truncate rounded-lg bg-white pl-4 pr-6 py-3 shadow-sm mr-4">
                            <div class="text-teal-600 mr-3">
                                <input type="radio" x-model="gender" value="Male" class="form-radio focus:outline-none focus:shadow-outline" />
                            </div>
                            <div class="select-none text-gray-700">Male</div>
                        </label>

                        <label
                            class="flex justify-start items-center text-truncate rounded-lg bg-white pl-4 pr-6 py-3 shadow-sm">
                            <div class="text-teal-600 mr-3">
                                <input type="radio" x-model="gender" value="Female" class="form-radio focus:outline-none focus:shadow-outline" />
                            </div>
                            <div class="select-none text-gray-700">Female</div>
                        </label>
                    </div>
                </div>

                <div class="mb-5">
                    <label for="profession" class="font-bold mb-1 text-gray-700 block">Profession</label>
                    <input type="profession"
                        class="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                        placeholder="eg. Web Developer" />
                </div>
            </div>
        </div>
    );
};

export default GenderStep;