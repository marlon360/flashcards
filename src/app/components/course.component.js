import React from 'react';
import CirclePercentage from './circle-percentage/circle-percentage.component.js';
function Course(props) {
    const gradient = props.gradient || 'orange';
    return (
        <div className="w-full relative max-w-lg mb-12">
            <div className={`bg-gradient-140-${gradient} p-6 pb-16 rounded-xl text-white shadow-xl flex justify-center`}>
                <h2 className="flex-1 text-3xl font-bold truncate">{props.name}</h2>
                <div className="w-14 pl-2">
                    <CirclePercentage className="w-full max-w-xs text-white float-right" percentage={props.percentage} strokeWidth="5" />
                </div>
            </div>
            <div className="float-right mr-6 bg-white text-gray-700 px-4 py-3 w-9/12 max-w-xs -mt-10 rounded-xl flex justify-between text-center shadow-2xl">
                <div className="w-5/12">
                    <div className="font-bold text-xl">{props.lessons}</div>
                    <div className="text-sm -mt-1">Lektionen</div>
                </div>
                <div className="w-2/12 flex justify-center">
                    <div className="bg-gray-400 w-px h-full"></div>
                </div>
                <div className="w-5/12">
                    <div className="font-bold text-xl">{props.cards}</div>
                    <div className="text-sm -mt-1">Karten</div>
                </div>
            </div>
        </div>
    );
}

export default Course;