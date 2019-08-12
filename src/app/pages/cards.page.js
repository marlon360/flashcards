import React, { useState } from 'react';
import NavigationHeader from '../components/navigation-header.component';
import Course from '../components/course.component';

import { Link } from 'react-router-dom';

function mapMove(move) {
    return move % 5;
}

function CardsPage(props) {
    const [move, setMove] = useState(0);
    return (
        <div>
            <div className="bg-gray-100 h-screen">
                <div className="p-4 h-8/10 overflow-hidden">
                    <div className="relative w-full max-w-xl m-auto h-8/10 cards">
                        <div onClick={() => setMove(move + 1)} className={`transition-all transition-750 absolute inset-0 bg-gradient-120-white p-6 rounded-xl shadow-md w-full move-${mapMove(move)}`}>
                            0.
                        </div>
                        <div onClick={() => setMove(move + 1)} className={`transition-all transition-750 absolute inset-0 bg-gradient-120-white p-6 rounded-xl shadow-md w-full move-${mapMove(move + 1)}`}>
                            1.
                        </div>
                        <div onClick={() => setMove(move + 1)} className={`transition-all transition-750 absolute inset-0 bg-gradient-120-white p-6 rounded-xl shadow-md w-full move-${mapMove(move + 2)}`}>
                            2.
                    </div>
                        <div onClick={() => setMove(move + 1)} className={`transition-all transition-750 absolute inset-0 bg-gradient-120-white p-6 rounded-xl shadow-md w-full move-${mapMove(move + 3)}`}>
                            3.
                        </div>
                        <div onClick={() => setMove(move + 1)} className={`transition-all transition-750 absolute inset-0 bg-gradient-120-white p-6 rounded-xl shadow-md w-full move-${mapMove(move + 4)}`}>
                            4.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardsPage;