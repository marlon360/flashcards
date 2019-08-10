import React from 'react';

function CirclePercentage(props) {
    return (
        <svg className={props.className} viewBox="0 0 36 36">
        <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fff" />
                <stop offset={`${props.percentage}%`} stopColor="#fff" />
            </linearGradient>
        </defs>
        <path fill="none" strokeLinecap="round"
            stroke="url(#gradient)"
            strokeWidth={`${props.strokeWidth}`}
            strokeDasharray={`${props.percentage}, 100`}
            d="M18 3.0845
            a 15 15 0 0 1 0 30
            a 15 15 0 0 1 0 -30"
        />
        <path fill="none" strokeLinecap="round"
            stroke="#ffffff" opacity="0.2"
            strokeWidth={`${props.strokeWidth}`}
            strokeDasharray="100, 100"
            d="M18 3.0845
            a 15 15 0 0 1 0 30
            a 15 15 0 0 1 0 -30"
        />
        <text x="18" y="20.35" fill="currentColor" fontWeight="bold" fontSize="0.5em" textAnchor="middle">{props.percentage}%</text>
        </svg>
    );
}

export default CirclePercentage;