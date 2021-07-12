import { useState } from "react";
import GenderStep from "./GenderStep";
import ProfileStep from "./ProfileStep";
import RegistrationSuccess from "./RegistrationSuccess";


export default function App() {
    const [page, setPage] = useState(1);
    const [data, setData] = useState({
        user: {},
        profile: {},
        settings: {}
    });

    function goNextPage() {
        if (page === 4) return;
        setPage((page) => page + 1);
    }

    function updateData(type, newData) {
        setData((data) => {
            return { ...data, [type]: newData };
        });
    }

    function submit() {
        fetch("/api/form", { method: "POST", body: JSON.stringify(data) });
    }

    return (
        <div className="App">
            {/* the progress bar goes here */}
            <div>
                <progress max="3" value={page} />
            </div>

            {/* the content goes here */}
            <div>
                {page === 1 && <OnboardingOne data={data.user} update={updateData} />}
                {page === 2 && (
                    <OnboardingTwo data={data.profile} update={updateData} />
                )}
                {page === 3 && (
                    <OnboardingThree data={data.settings} update={updateData} />
                )}
            </div>

            {page !== 2 && <button onClick={goNextPage}>Go Next</button>}
            {page === 2 && (
                <button type="submit" onClick={submit}>
                    Submit
                </button>
            )}
        </div>
    );
}

function OnboardingOne({ data, update }) {
    const newData = {};

    return (
        <div>
            <ProfileStep />
            <button onClick={() => update("user", newData)}></button>
        </div>
    );
}

function OnboardingTwo({ data, update }) {
    return <GenderStep />;
}

function OnboardingThree({ data, update }) {
    return <RegistrationSuccess />;
}
