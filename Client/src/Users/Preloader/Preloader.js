import React from 'react';
import '../../../src/App.css'
const Preloader = () => {
    return (
        <div className="bg-gradient-to-r from-blue-300 via-blue-100 to-yellow-200 preloader">
            <div id="building">
                <div id="blocks">
                    <div class="b" id="b1"></div>
                    <div class="b" id="b2"></div>
                    <div class="b" id="b3"></div>
                    <div class="b" id="b4"></div>
                </div>
                <div id="caption">
                    Your product is almost ready...
                </div>
            </div>
        </div>
    );
};

export default Preloader;