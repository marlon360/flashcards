import React, { useState } from 'react';
import CirclePercentage from './circle-percentage/circle-percentage.component.js';
import Play from './../icons/play.svg';
import Pencil from './../icons/pencil.svg';
import { Link } from 'react-router-dom';
function Lesson(props) {
    const [open, setOpen] = useState(false);

    return (
        <div className="bg-gradient-120-white p-6 rounded-xl shadow-md w-full max-w-lg mb-5">
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
                <Link className="w-full flex justify-center" to="/cards">
                <div className="bg-gradient-120-green-blue px-6 py-4 rounded-xl shadow-md w-full max-w-lg mt-5 flex">
                    <div className="w-12">
                        <img src={Play} alt="Start"></img>
                    </div>
                    Lernen
                </div>
                </Link>
                <div className="bg-gradient-120-purple-blue px-6 py-4 rounded-xl shadow-md w-full max-w-lg mt-5 flex">
                    <div className="w-12">
                        <img src={Pencil} alt="Bearbeiten"></img>
                    </div>
                    Karten bearbeiten
                </div>
            </div>
        </div>
    );
}

export default Lesson;