import React from 'react';

function CirclePercentage(props) {
    const background = props.background || "#ffffff";
    const startColor = props.startColor || "#ffffff";
    const endColor = props.endColor || "#ffffff";
    return (
        <svg className={props.className} viewBox="0 0 36 36">
        <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={`${startColor}`} />
                <stop offset={`${props.percentage}%`} stopColor={`${endColor}`} />
            </linearGradient>
        </defs>
        <path fill="none" strokeLinecap="round"
            stroke={`${background}`} opacity="0.2"
            strokeWidth={`${props.strokeWidth}`}
            strokeDasharray="100, 100"
            d="M18 3.0845
            a 15 15 0 0 1 0 30
            a 15 15 0 0 1 0 -30"
        />
        <path fill="none" strokeLinecap="round"
            stroke="url(#gradient)"
            strokeWidth={`${props.strokeWidth}`}
            strokeDasharray={`${props.percentage}, 100`}
            d="M18 3.0845
            a 15 15 0 0 1 0 30
            a 15 15 0 0 1 0 -30"
        />
        <text x="18" y="20.35" fill="currentColor" fontWeight="bold" fontSize="0.5em" textAnchor="middle">{props.percentage}%</text>
        </svg>
    );
}

export default CirclePercentage;