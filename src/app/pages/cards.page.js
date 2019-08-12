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
        'transform-card-4 z-30 opacity-50',
        'transform-card-5 z-40 opacity-100',
    ];
    return cardPositionClasses[move];
}

function CardsPage(props) {
    
    const [moveDir, setMoveDir] = useState(MoveDirection.LEFT);
    const [move, setMove] = useState(0);
    
    const cardClasses = 'transition-all transition-750 absolute inset-0 bg-gradient-120-white p-6 rounded-xl shadow-md w-full text-center text-3xl font-bold flex justify-center items-center ';
    return (
        <div>
            <div className="bg-gray-100 h-screen scale-90">
                <div className="p-4 h-6/10 overflow-hidden mb-4">
                    <div className="relative w-full max-w-xl m-auto h-11/12 cards">
                        <div onClick={() => setMove(move + 1)} className={cardClasses + getClasses(mapMove(move), moveDir)}>
                            Was ist eine Kurve?
                        </div>
                        <div onClick={() => setMove(move + 1)} className={cardClasses + getClasses(mapMove(move + 1), moveDir)}>
                            Was ist eine Fläche?
                        </div>
                        <div onClick={() => setMove(move + 1)} className={cardClasses + getClasses(mapMove(move + 2), moveDir)}>
                            Was ist ein offenes Intervall?
                    </div>
                        <div onClick={() => setMove(move + 1)} className={cardClasses + getClasses(mapMove(move + 3), moveDir)}>
                            Was ist die Krümmung einer Kurve?
                        </div>
                        <div onClick={() => setMove(move + 1)} className={cardClasses + getClasses(mapMove(move + 4), moveDir)}>
                            Was ist die Durchlaufzahl?
                        </div>
                    </div>
                </div>
            <div className="flex justify-between max-w-xl p-4 m-auto text-center">
                <div onClick={() => { setMoveDir(MoveDirection.LEFT); setMove(move + 1)}} className="flex-1 rounded-xl mx-2 px-2 py-4 bg-red-200 text-red-700 cursor-pointer">
                    Falsch
                </div>
                <div onClick={() => { setMoveDir(MoveDirection.RIGHT); setMove(move + 1)}} className="flex-1 rounded-xl mx-2 px-2 py-4 bg-green-200 text-green-700 cursor-pointer">
                    Richtig
                </div>
            </div>
            </div>
        </div>
    );
}

export default CardsPage;