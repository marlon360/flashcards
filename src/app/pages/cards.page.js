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
            front: '1. Was ist eine Kurve?',
            back: 'Eine Kurve ist eine Funktion.'
        },
        {
            front: '2. Was ist eine Fläche?',
            back: 'Eine Kurve ist eine Funktion.'
        },
        {
            front: '3. Was ist ein offenes Intervall?',
            back: 'Eine Kurve ist eine Funktion.'
        },
        {
            front: '4. Was ist eine parametrisierte Kurve?',
            back: 'Eine Kurve ist eine Funktion.'
        },
        {
            front: '5. Was ist die Krümmung einer Kurve?',
            back: 'Eine Kurve ist eine Funktion.'
        },
        {
            front: '6. Frage?',
            back: 'Eine Kurve ist eine Funktion.'
        },
    ]

    const [moveDir, setMoveDir] = useState(MoveDirection.LEFT);
    const [move, setMove] = useState(0);
    const [front, setFront] = useState(true);
    const [cardIndices, setCardIndices] = useState([0,1,2,3,4]);

    if (mapMove(move + 4) === 1) {
        const newIndex = 0 + (Math.floor(((move+4)/5)) * 5);
        if (newIndex !== cardIndices[0]) {
            cardIndices[0] = newIndex;
            setCardIndices(cardIndices);
        }
    }
    if (mapMove(move + 3) === 1) {
        const newIndex = 1 + (Math.floor(((move+3)/5)) * 5);
        if (newIndex !== cardIndices[1]) {
            cardIndices[1] = newIndex;
            setCardIndices(cardIndices);
        }
    }
    if (mapMove(move + 2) === 1) {
        const newIndex = 2 + (Math.floor(((move+2)/5)) * 5);
        if (newIndex !== cardIndices[2]) {
            cardIndices[2] = newIndex;
            setCardIndices(cardIndices);
        }
    }
    if (mapMove(move + 1) === 1) {
        const newIndex = 3 + (Math.floor(((move+1)/5)) * 5);
        if (newIndex !== cardIndices[3]) {
            cardIndices[3] = newIndex;
            setCardIndices(cardIndices);
        }
    }
    if (mapMove(move + 0) === 1) {
        const newIndex = 4 + (Math.floor(((move+0)/5)) * 5);
        if (newIndex !== cardIndices[4]) {
            cardIndices[4] = newIndex;
            setCardIndices(cardIndices);
        }
    }

    const cardClasses = 'transition-all transition-750 absolute inset-0 bg-transparent w-full text-center text-3xl font-bold ';
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
                        {(cardIndices[0] < cards.length ? <div onClick={() => setFront(!front)} className={cardClasses + getClasses(mapMove(move + 4), moveDir)}>
                            <div className={`${getFlipClasses(mapMove(move + 4), front)}`}>
                                <div className="bg-gradient-120-white border border-gray-300 shadow-lg rounded-xl absolute inset-0 backface-hidden flex justify-center items-center">
                                    {cards[cardIndices[0]].front}
                                </div>
                                <div className="bg-gradient-120-white border border-gray-300 shadow-lg rounded-xl absolute inset-0 rotate-y-180 backface-hidden flex justify-center items-center">
                                    {cards[cardIndices[0]].back}
                                </div>
                            </div>
                        </div> : null)}
                        {(cardIndices[1] < cards.length ? <div onClick={() => setFront(!front)} className={cardClasses + getClasses(mapMove(move + 3), moveDir)}>
                            <div className={`${getFlipClasses(mapMove(move + 3), front)}`}>
                                <div className="bg-gradient-120-white border border-gray-300 shadow-lg rounded-xl absolute inset-0 backface-hidden flex justify-center items-center">
                                    {cards[cardIndices[1]].front}
                                </div>
                                <div className="bg-gradient-120-white border border-gray-300 shadow-lg rounded-xl absolute inset-0 rotate-y-180 backface-hidden flex justify-center items-center">
                                    {cards[cardIndices[1]].back}
                                </div>
                            </div>
                        </div> : null)}
                        {(cardIndices[2] < cards.length ? <div onClick={() => setFront(!front)} className={cardClasses + getClasses(mapMove(move + 2), moveDir)}>
                            <div className={`${getFlipClasses(mapMove(move + 2), front)}`}>
                                <div className="bg-gradient-120-white border border-gray-300 shadow-lg rounded-xl absolute inset-0 backface-hidden flex justify-center items-center">
                                    {cards[cardIndices[2]].front}
                                </div>
                                <div className="bg-gradient-120-white border border-gray-300 shadow-lg rounded-xl absolute inset-0 rotate-y-180 backface-hidden flex justify-center items-center">
                                    {cards[cardIndices[2]].back}
                                </div>
                            </div>
                        </div> : null)}
                        {(cardIndices[3] < cards.length ? <div onClick={() => setFront(!front)} className={cardClasses + getClasses(mapMove(move + 1), moveDir)}>
                            <div className={`${getFlipClasses(mapMove(move + 1), front)}`}>
                                <div className="bg-gradient-120-white border border-gray-300 shadow-lg rounded-xl absolute inset-0 backface-hidden flex justify-center items-center">
                                    {cards[cardIndices[3]].front}
                                </div>
                                <div className="bg-gradient-120-white border border-gray-300 shadow-lg rounded-xl absolute inset-0 rotate-y-180 backface-hidden flex justify-center items-center">
                                    {cards[cardIndices[3]].back}
                                </div>
                            </div>
                        </div> : null)}
                        {(cardIndices[4] < cards.length ? <div onClick={() => setFront(!front)} className={cardClasses + getClasses(mapMove(move), moveDir)}>
                            <div className={`${getFlipClasses(mapMove(move), front)}`}>
                                <div className="bg-gradient-120-white border border-gray-300 shadow-md rounded-xl absolute inset-0 backface-hidden flex justify-center items-center">
                                    {cards[cardIndices[4]].front}
                                </div>
                                <div className="bg-gradient-120-white border border-gray-300 shadow-md rounded-xl absolute inset-0 rotate-y-180 backface-hidden flex justify-center items-center">
                                    {cards[cardIndices[4]].back}
                                </div>
                            </div>
                        </div> : null)}
                    </div>
                </div>
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
        </div>
    );
}

export default CardsPage;