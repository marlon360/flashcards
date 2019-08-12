import React, { useState } from 'react';
import NavigationHeader from '../components/navigation-header.component';
import Course from '../components/course.component';

import { Link } from 'react-router-dom';

const MoveDirection = {
    LEFT: 1,
    RIGHT: 2,
  };

function mapMove(move) {
    return move % 5;
}

function getClasses(move, moveDir) {
    const moveRightStyle = 'transform-card-2-right z-50 opacity-0';
    const moveLeftStyle = 'transform-card-2-left z-50 opacity-0';
    let moveDirection = moveRightStyle;
    if (moveDir === MoveDirection.LEFT) {
        moveDirection = moveLeftStyle;
    }
    let cardPositionClasses = [
        'transform-card-1 z-50 opacity-100',
        moveDirection,
        'transform-card-3 z-20 opacity-0',
        'transform-card-4 z-30 opacity-100',
        'transform-card-5 z-40 opacity-100',
    ];
    return cardPositionClasses[move];
}

function getFlipClasses(move, front) {
    let flipClasses = 'perspective-1000 transform-r relative w-full h-full p-6 bg-transparent transition-all transition-1000 transform-preserve-3d '
    let cardPositionClasses = [
        flipClasses + (!front ? 'transform-card-flipped' : ''),
        flipClasses,
        flipClasses,
        flipClasses,
        flipClasses,
    ];
    return cardPositionClasses[move];
}

function CardsPage(props) {
    
    const [moveDir, setMoveDir] = useState(MoveDirection.LEFT);
    const [move, setMove] = useState(0);
    const [front, setFront] = useState(true);
    
    const cardClasses = 'transition-all transition-750 absolute inset-0 bg-transparent w-full text-center text-3xl font-bold ';
    return (
        <div>
            <div className="bg-gray-100 h-screen scale-90">
                <div className="p-4 h-6/10 overflow-hidden mb-4">
                    <div className="relative w-full max-w-xl m-auto h-8/10">
                        <div onClick={() => setFront(!front)} className={cardClasses + getClasses(mapMove(move), moveDir)}>
                            <div className={`${getFlipClasses(mapMove(move), front)}`}>
                                <div className="bg-gradient-120-white border border-gray-300 shadow-lg rounded-xl absolute inset-0 backface-hidden flex justify-center items-center">
                                    Was ist eine Kurve?
                                </div>
                                <div className="bg-gradient-120-white border border-gray-300 shadow-lg rounded-xl absolute inset-0 rotate-y-180 backface-hidden flex justify-center items-center">
                                    Eine Kurve ist eine Kurve.
                                </div>
                            </div>
                        </div>
                        <div onClick={() => setFront(!front)} className={cardClasses + getClasses(mapMove(move + 1), moveDir)}>
                        <div className={`${getFlipClasses(mapMove(move + 1), front)}`}>
                                <div className="bg-gradient-120-white border border-gray-300 shadow-lg rounded-xl absolute inset-0 backface-hidden flex justify-center items-center">
                                    Was ist eine Kurve?
                                </div>
                                <div className="bg-gradient-120-white border border-gray-300 shadow-lg rounded-xl absolute inset-0 rotate-y-180 backface-hidden flex justify-center items-center">
                                    Eine Kurve ist eine Kurve.
                                </div>
                            </div>
                        </div>
                        <div onClick={() => setFront(!front)} className={cardClasses + getClasses(mapMove(move + 2), moveDir)}>
                        <div className={`${getFlipClasses(mapMove(move + 2), front)}`}>
                                <div className="bg-gradient-120-white border border-gray-300 shadow-lg rounded-xl absolute inset-0 backface-hidden flex justify-center items-center">
                                    Was ist eine Kurve?
                                </div>
                                <div className="bg-gradient-120-white border border-gray-300 shadow-lg rounded-xl absolute inset-0 rotate-y-180 backface-hidden flex justify-center items-center">
                                    Eine Kurve ist eine Kurve.
                                </div>
                            </div>
                    </div>
                        <div onClick={() => setFront(!front)} className={cardClasses + getClasses(mapMove(move + 3), moveDir)}>
                        <div className={`${getFlipClasses(mapMove(move + 3), front)}`}>
                                <div className="bg-gradient-120-white border border-gray-300 shadow-lg rounded-xl absolute inset-0 backface-hidden flex justify-center items-center">
                                    Was ist eine Kurve?
                                </div>
                                <div className="bg-gradient-120-white border border-gray-300 shadow-lg rounded-xl absolute inset-0 rotate-y-180 backface-hidden flex justify-center items-center">
                                    Eine Kurve ist eine Kurve.
                                </div>
                            </div>
                        </div>
                        <div onClick={() => setFront(!front)} className={cardClasses + getClasses(mapMove(move + 4), moveDir)}>
                        <div className={`${getFlipClasses(mapMove(move + 4), front)}`}>
                                <div className="bg-gradient-120-white border border-gray-300 shadow-md rounded-xl absolute inset-0 backface-hidden flex justify-center items-center">
                                    Was ist eine Kurve?
                                </div>
                                <div className="bg-gradient-120-white border border-gray-300 shadow-md rounded-xl absolute inset-0 rotate-y-180 backface-hidden flex justify-center items-center">
                                    Eine Kurve ist eine Kurve.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div className={`flex justify-between max-w-xl p-4 m-auto text-center ${front ? 'hidden' : ''}`}>
                <div onClick={() => { setMoveDir(MoveDirection.LEFT); setFront(true); setMove(move + 1)}} className="flex-1 rounded-xl mx-2 px-2 py-4 bg-red-200 text-red-700 cursor-pointer">
                    Falsch
                </div>
                <div onClick={() => { setMoveDir(MoveDirection.RIGHT); setFront(true); setMove(move + 1)}} className="flex-1 rounded-xl mx-2 px-2 py-4 bg-green-200 text-green-700 cursor-pointer">
                    Richtig
                </div>
            </div>
            <div className={`flex justify-between max-w-xl p-4 m-auto text-center ${!front ? 'hidden' : ''}`}>
                <div onClick={() => {setFront(false)}} className="flex-1 rounded-xl mx-2 px-2 py-4 bg-blue-200 text-blue-700 cursor-pointer">
                    Umdrehen
                </div>
            </div>
            </div>
        </div>
    );
}

export default CardsPage;