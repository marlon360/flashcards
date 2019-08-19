import React from 'react';
import XmarkIcon from '../icons/xmark.icon';

import { Link } from 'react-router-dom';

function newCoursePage() {
    return (
        <div className="flex flex-col h-screen">
            <div className="px-6 pb-4 pt-8 w-full flex justify-between">
                <div>
                    <Link to="/courses">
                        <XmarkIcon className="text-gray-600" alt="close"></XmarkIcon>
                    </Link>
                </div>
            </div>
            <div className="flex-1 px-4 ">
                <div className="flex flex-col items-center py-8 px-4">
                    <h1 className="text-3xl text-gray-800 font-bold mb-4">Neuen Kurs anlegen!</h1>
                    <h2 className="text-xl text-gray-600 mb-12">Gib hier den Namen deines neuen Kurses ein.</h2>
                    <input className="p-4 text-xl w-full text-gray-800 max-w-sm rounded mb-8 outline-none focus:shadow-outline" placeholder="Kursname"></input>
                    <button className="text-xl bg-blue-500 text-white px-8 py-4 rounded-lg shadow-lg outline-none">Kurs anlegen</button>
                </div>
            </div>
        </div>
    );
}

export default newCoursePage;