import { useState } from "react";
import "../../../App.css";
import ArrivalProduct from "./ArrivalProduct/ArrivalProduct";
import FutureProduct from "./FutureProduct/FutureProduct";

function Tabs() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className="mt-5 ">
            <div className="bloc-tabs ">
                <button
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}
                >
                    ArrivalProduct
                </button>
                <button
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                >
                    FutureProduct
                </button>
            </div>

            <div className="">
                <div
                    className={toggleState === 1 ? "tabs_content  active-content" : "tabs_content"}
                >
                    <ArrivalProduct />
                </div>

                <div
                    className={toggleState === 2 ? "tabs_content active-content" : "tabs_content"}
                >
                    <FutureProduct />
                </div>
            </div>
        </div>
    );
}

export default Tabs;
