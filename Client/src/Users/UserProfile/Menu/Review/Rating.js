import React from 'react';
export const StarRating = ({
    count,
    value,
    inactiveColor,
    size,
    activeColor }) => {
    // short trick 
    const stars = Array.from({ length: count }, () => '🟊')

    return (
        <div>
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
        </div>
    )
}

