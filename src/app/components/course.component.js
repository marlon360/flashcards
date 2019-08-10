import React from 'react';

function Course() {
    return (
        <div className="w-full">
            <div className="bg-white p-6 rounded-lg">
                <h2>Mathematik</h2>
                <div>
                    75<span>%</span>
                </div>
            </div>
            <div className="bg-white p-6 rounded-lg">
                <div>
                    <div>7</div>
                    <div>Lektionen</div>
                </div>
                <div></div>
                <div>
                    <div>68</div>
                    <div>Karten</div>
                </div>
            </div>
        </div>
    );
}

export default Course;