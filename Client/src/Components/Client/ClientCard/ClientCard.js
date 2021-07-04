import React from 'react';

const ClientCard = ({ data }) => {
    return (
        <div>
            <section class="mx-auto ">
                <div class="container px-5 mx-auto lg:px-24 ">
                    <div class=" text-center">
                        <div class="flex items-center justify-center ">
                            <img src={data.img} alt="Todoist Logo" class="block " />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ClientCard;