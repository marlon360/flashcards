import React, { useState } from 'react';
import NavigationHeader from '../components/navigation-header.component';
import Course from '../components/course.component';
import Xmark from '../icons/x.svg';

import { Link } from 'react-router-dom';

const MoveDirection = {
    LEFT: 1,
    RIGHT: 2,
};

function mapMove(move) {
    return move % 5;
}

function getClasses(move, moveDir) {
    const moveRightStyle = 'transform-card-1-right z-50 opacity-0';
    const moveLeftStyle = 'transform-card-1-left z-50 opacity-0';
    let moveDirection = moveRightStyle;
    if (moveDir === MoveDirection.LEFT) {
        moveDirection = moveLeftStyle;
    }
    let cardPositionClasses = [
        moveDirection,
        'transform-card-2 z-20 opacity-0',
        'transform-card-3 z-30 opacity-100',
        'transform-card-4 z-40 opacity-100',
        'transform-card-5 z-50 opacity-100',
    ];
    return cardPositionClasses[move];
}

function getFlipClasses(move, front) {
    let flipClasses = 'perspective-1000 transform-r relative w-full h-full p-6 bg-transparent transition-all transition-1000 transform-preserve-3d '
    let cardPositionClasses = [
        flipClasses,
        flipClasses,
        flipClasses,
        flipClasses,
        flipClasses + (!front ? 'transform-card-flipped' : '')
    ];
    return cardPositionClasses[move];
}

function CardsPage(props) {

    const cards = [
        {
            front: "Was ist eine Kurve?",
            back: "Eine Kurve ist eine Funktion."
        },
        {
            front: "Was ist eine Fläche?",
            back: "Eine Kurve ist eine Funktion."
        },
        {
            front: "Was ist ein offenes Intervall?",
            back: "Eine Kurve ist eine Funktion."
        },
        {
            front: "Was ist die Krümmung einer Kurve?",
            back: "Eine Kurve ist eine Funktion."
        }
    ]

    const [moveDir, setMoveDir] = useState(MoveDirection.LEFT);
    const [move, setMove] = useState(0);
    const [front, setFront] = useState(true);
    const [cardIndices, setCardIndices] = useState([0, 1, 2, 3, 4]);

    if (mapMove(move + 4) === 1) {
        const newIndex = 0 + (Math.floor(((move + 4) / 5)) * 5);
        if (newIndex !== cardIndices[0]) {
            cardIndices[0] = newIndex;
            setCardIndices(cardIndices);
        }
    }
    if (mapMove(move + 3) === 1) {
        const newIndex = 1 + (Math.floor(((move + 3) / 5)) * 5);
        if (newIndex !== cardIndices[1]) {
            cardIndices[1] = newIndex;
            setCardIndices(cardIndices);
        }
    }
    if (mapMove(move + 2) === 1) {
        const newIndex = 2 + (Math.floor(((move + 2) / 5)) * 5);
        if (newIndex !== cardIndices[2]) {
            cardIndices[2] = newIndex;
            setCardIndices(cardIndices);
        }
    }
    if (mapMove(move + 1) === 1) {
        const newIndex = 3 + (Math.floor(((move + 1) / 5)) * 5);
        if (newIndex !== cardIndices[3]) {
            cardIndices[3] = newIndex;
            setCardIndices(cardIndices);
        }
    }
    if (mapMove(move + 0) === 1) {
        const newIndex = 4 + (Math.floor(((move + 0) / 5)) * 5);
        if (newIndex !== cardIndices[4]) {
            cardIndices[4] = newIndex;
            setCardIndices(cardIndices);
        }
    }

    const cardClasses = 'transition-all transition-750 absolute inset-0 bg-transparent w-full text-gray-800 text-center text-3xl font-bold ';
    return (
        <div>
            <div className="h-screen">
                <div className="px-6 py-4 w-full my-4">
                    <Link to="/course/Mathematik">
                        <img src={Xmark} alt="close"></img>
                    </Link>
                </div>
                <div className="px-4 h-6/10 overflow-hidden">
                    <div className="relative w-full max-w-xl m-auto h-8/10">
                        {[0, 1, 2, 3, 4].map((v, i) => {
                            return (cardIndices[i] < cards.length ?
                            <div key={i.toString()} onClick={() => setFront(!front)} className={cardClasses + getClasses(mapMove(move + 4 - i), moveDir)}>
                                <div className={`${getFlipClasses(mapMove(move + 4 - i), front)}`}>
                                    <div className="bg-gradient-120-white border border-gray-300 shadow-lg rounded-xl absolute inset-0 backface-hidden">
                                        <div className="absolute inset-1 flex overflow-scroll backface-hidden leading-snug">
                                            <span className="m-auto">{cards[cardIndices[i]].front}</span>
                                        </div>
                                        
                                    </div>
                                    <div className="bg-gradient-120-white border border-gray-300 shadow-lg rounded-xl absolute inset-0 rotate-y-180 backface-hidden flex justify-center items-center">
                                        {cards[cardIndices[i]].back}
                                    </div>
                                </div>
                            </div> : null)
                        })}
                        {(move >= cards.length ?
                            <div className="h-full p-12 flex flex-col justify-center items-center text-2xl text-gray-600 font-bold text-center">
                                Du hast alle Karten dieser Box korrekt beantwortet!
                            </div>
                            : null)}
                    </div>
                </div>
                {(move < cards.length ?
                    <div>
                        <div className={`flex justify-between max-w-xl p-4 m-auto text-center ${front ? 'hidden' : ''}`}>
                            <div onClick={() => { setMoveDir(MoveDirection.LEFT); setFront(true); setMove(move + 1) }} className="flex-1 rounded-xl mx-2 px-2 py-4 bg-red-200 border border-red-300 text-red-700 cursor-pointer">
                                Falsch
                            </div>
                            <div onClick={() => { setMoveDir(MoveDirection.RIGHT); setFront(true); setMove(move + 1) }} className="flex-1 rounded-xl mx-2 px-2 py-4 bg-green-200 text-green-700 border border-green-300 cursor-pointer">
                                Richtig
                            </div>
                        </div>
                        <div className={`flex justify-between max-w-xl p-4 m-auto text-center ${!front ? 'hidden' : ''}`}>
                            <div onClick={() => { setFront(false) }} className="flex-1 rounded-xl mx-2 px-2 py-4 bg-blue-200 text-blue-700 cursor-pointer">
                                Umdrehen
                            </div>
                        </div>
                    </div>
                    : 
                    <div className="flex justify-between max-w-xl p-4 m-auto text-center">
                            <div onClick={() => {}} className="flex-1 rounded-xl mx-2 px-2 py-4 bg-blue-200 text-blue-700 cursor-pointer">
                                Nächste Box lernen
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
}

export default CardsPage;