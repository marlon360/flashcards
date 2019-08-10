import React from 'react';

function Course() {
    return (
        <div className="w-full relative max-w-lg">
            <div className="bg-gradient-140-orange p-6 rounded-xl text-white shadow-xl">
                <h2 className="text-3xl font-bold">Mathematik</h2>
                <div>
                    75<span>%</span>
                </div>
            </div>
            <div className="absolute right-0 mr-6 bg-white text-gray-700 px-4 py-3 w-9/12 max-w-xs -mt-10 rounded-xl flex justify-between text-center shadow-2xl">
                <div className="w-5/12">
                    <div className="font-bold text-xl">7</div>
                    <div className="text-sm -mt-1">Lektionen</div>
                </div>
                <div className="w-2/12 flex justify-center">
                    <div className="bg-gray-400 w-px h-full"></div>
                </div>
                <div className="w-5/12">
                    <div className="font-bold text-xl">68</div>
                    <div className="text-sm -mt-1">Karten</div>
                </div>
            </div>
        </div>
    );
}

export default Course;