import React, { useState } from 'react';
import CirclePercentage from './circle-percentage/circle-percentage.component.js';
import Play from './../icons/play.svg';
import PencilIcon from './../icons/pencil.icon';

function Lesson(props) {
    const [open, setOpen] = useState(false);

    return (
        <div className="bg-gradient-120-white p-6 rounded-xl shadow-md w-full max-w-lg">
            <div onClick={() => setOpen(!open)} className="text-gray-800 flex justify-between cursor-pointer">
                <div>
                    <div className="-mb-1 text-sm">{props.cards} Karten</div>
                    <h4 className="font-sans text-2xl font-bold truncate">{props.name}</h4>
                </div>
                <div className="w-12">
                    <CirclePercentage background="#aaaaaa" startColor="#75DEA8" endColor="#B3FF9D" className="w-full max-w-xs text-gray-600 float-right" percentage={props.percentage} strokeWidth="5" />
                </div>
            </div>
            <div className={`${open ? 'h-44' : 'h-0'} transition-all transition-500 overflow-auto text-white font-bold text-xl`}>
                <div className="w-full flex justify-center" onClick={props.onLearn}>
                    <div className="bg-gradient-120-green-blue px-6 py-4 rounded-xl shadow-md w-full max-w-lg mt-5 flex">
                        <div className="w-12">
                            <img src={Play} alt="Start"></img>
                        </div>
                        Lernen
                </div>
                </div>
                <div className="w-full flex justify-center" onClick={props.onEdit}>
                    <div className="bg-gradient-120-purple-blue px-6 py-4 rounded-xl shadow-md w-full max-w-lg mt-5 flex">
                        <div className="w-12">
                            <PencilIcon className="w-8" alt="Bearbeiten"></PencilIcon>
                        </div>
                        Karten bearbeiten
                </div>
                </div>
            </div>
        </div>
    );
}

export default Lesson;