import React from 'react';

const TeamStarRating = ({
    count,
    value,
    inactiveColor,
    size,
    activeColor }) => {
    const stars = Array.from({ length: count }, () => '🟊')
    return (
        <>
            {stars.map((s, index) => {
                let style = inactiveColor;
                if (index < value) {
                    style = activeColor;
                }
                return (
                    <span className={"star"}
                        key={index}
                        style={{ color: style, width: size, height: size, fontSize: size }}
                    >
                        {s}
                    </span>
                )
            })}
        </>
    );
};

export default TeamStarRating;