import React from 'react';
import CirclePercentage from './circle-percentage/circle-percentage.component.js';
function Lesson(props) {
    return (
        <div className="w-full relative max-w-lg mb-5">
            <div className="bg-gradient-120-white p-6 rounded-xl text-gray-800 shadow-lg flex justify-between">
                <div>
                    <div className="-mb-1 text-sm">{props.cards} Karten</div>
                    <h4 className="text-2xl font-bold truncate">{props.name}</h4>
                </div>
                <div className="w-12">
                    <CirclePercentage background="#aaaaaa" startColor="#75DEA8" endColor="#B3FF9D" className="w-full max-w-xs text-gray-600 float-right" percentage={props.percentage} strokeWidth="5" />
                </div>
            </div>
        </div>
    );
}

export default Lesson;