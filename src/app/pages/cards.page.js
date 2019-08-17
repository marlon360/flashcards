import React, { useState } from 'react';
import XmarkIcon from '../icons/xamrk.icon';
import BoxIcon from '../icons/box.icon';
import Down from '../icons/down.svg';
import PencilIcon from '../icons/pencil.icon';

import { Link } from 'react-router-dom';

const SlideDirection = {
    LEFT: 1,
    RIGHT: 2,
};

function mapMove(move) {
    return move % 5;
}

function getClasses(move, moveDir) {
    const moveRightStyle = 'transform-card-1-right z-40 opacity-0';
    const moveLeftStyle = 'transform-card-1-left z-40 opacity-0';
    let moveDirection = moveRightStyle;
    if (moveDir === SlideDirection.LEFT) {
        moveDirection = moveLeftStyle;
    }
    let cardPositionClasses = [
        moveDirection,
        'transform-card-2 z-10 opacity-0',
        'transform-card-3 z-20 opacity-100',
        'transform-card-4 z-30 opacity-100',
        'transform-card-5 z-40 opacity-100',
    ];
    return cardPositionClasses[move];
}

function getFlipClass(move, front) {
    return (move === 4 && !front ? 'transform-card-flipped' : '');
}

function calculateCardIndices(move, cardIndices, setCardIndices) {
    for (let index = 0; index < 5; index++) {
        // when card is not visible (position 1 is not visible)
        if (mapMove(move + 4 - index) === 1) {
            const newIndex = index + (Math.floor(((move + 4 - index) / 5)) * 5);
            if (newIndex !== cardIndices[index]) {
                cardIndices[index] = newIndex;
                setCardIndices(cardIndices);
            }
        }      
    }
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

    // in wich direction should the top card slide
    const [slideDirection, setSlideDirection] = useState(SlideDirection.LEFT);
    // how many cards have been slide
    const [slideCounter, setSlideCounter] = useState(0);
    // is the front side of the card shown
    const [isFrontSideVisible, setFrontSideVisibility] = useState(true);
    // is the box popover visible
    const [isPopoverVisible, setPopoverVisibility] = useState(false);
    // current rendered card data (indices of array)
    const [cardIndices, setCardIndices] = useState([0, 1, 2, 3, 4]);

    calculateCardIndices(slideCounter, cardIndices, setCardIndices);

    const cardClasses = 'transition-all transition-750 absolute inset-0 bg-transparent w-full text-gray-800 text-center text-3xl font-bold ';
    return (
        <div>
            <div className="relative h-screen">
                <div onClick={() => setPopoverVisibility(!isPopoverVisible)} className={`absolute inset-0 bg-overlay z-50 transition-all ${isPopoverVisible ? 'opacity-100 block' : 'opacity-0 hidden'}`}>

                    <div className="relative bg-white p-6 w-10/12 m-auto mt-22 rounded-xl">
                        <div className="absolute rounded top-0 left-1/2 -z-10 bg-white w-8 h-8 transform-popoverCorner">

                        </div>
                        {[1, 2, 3, 4].map((v, i) => {
                            return (
                                <div key={i.toString()} className={`bg-gray-200 hover:bg-blue-100 p-4 rounded-xl ${i !== 3 ? 'mb-4' : ''}`}>
                                    <div className="flex items-center">
                                        <BoxIcon className="mr-4 h-full w-8 text-gray-600" alt="box"></BoxIcon>
                                        <div className="text-gray-800">
                                            <div className="text-md font-light">Box {v}</div>
                                            <div className="text-xl font-bold -mt-1">18 Karten</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
                <div className="px-6 pb-4 pt-8 w-full flex justify-between">
                    <div>
                        <Link to="/course/Mathematik">
                            <XmarkIcon className="text-gray-600" alt="close"></XmarkIcon>
                        </Link>
                    </div>
                    <div onClick={() => setPopoverVisibility(true)} className="flex cursor-pointer justify-center items-center font-bold text-blue-500 text-xl">
                        <BoxIcon className="mr-1" alt="box"></BoxIcon>
                        <span>Box 1</span>
                        <img className="ml-1 transition-all" src={Down} alt="down"></img>
                    </div>
                    <div className="w-6">
                        <PencilIcon className="text-gray-600" alt="edit"></PencilIcon>
                    </div>
                </div>
                <div className="px-4 h-6/10 overflow-hidden">
                    <div className="relative w-full max-w-xl m-auto h-8/10">
                        {[0, 1, 2, 3, 4].map((v, i) => {
                            return (cardIndices[i] < cards.length ?
                                <div key={i.toString()} onClick={() => setFrontSideVisibility(!isFrontSideVisible)} className={cardClasses + getClasses(mapMove(slideCounter + 4 - i), slideDirection)}>
                                    <div className={`perspective-1000 transform-r relative w-full h-full p-6 bg-transparent transition-all transition-1000 transform-preserve-3d ${getFlipClass(mapMove(slideCounter + 4 - i), isFrontSideVisible)}`}>
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
                        {(slideCounter >= cards.length ?
                            <div className="h-full p-12 flex flex-col justify-center items-center text-2xl text-gray-600 font-bold text-center">
                                Du hast alle Karten dieser Box korrekt beantwortet!
                            </div>
                            : null)}
                    </div>
                </div>
                {(slideCounter < cards.length ?
                    <div>
                        <div className={`flex justify-between max-w-xl p-4 m-auto text-center ${isFrontSideVisible ? 'hidden' : ''}`}>
                            <div onClick={() => { setSlideDirection(SlideDirection.LEFT); setFrontSideVisibility(true); setSlideCounter(slideCounter + 1) }} className="flex-1 rounded-xl mx-2 px-2 py-4 bg-red-200 border border-red-300 text-red-700 cursor-pointer">
                                Falsch
                            </div>
                            <div onClick={() => { setSlideDirection(SlideDirection.RIGHT); setFrontSideVisibility(true); setSlideCounter(slideCounter + 1) }} className="flex-1 rounded-xl mx-2 px-2 py-4 bg-green-200 text-green-700 border border-green-300 cursor-pointer">
                                Richtig
                            </div>
                        </div>
                        <div className={`flex justify-between max-w-xl p-4 m-auto text-center ${!isFrontSideVisible ? 'hidden' : ''}`}>
                            <div onClick={() => { setFrontSideVisibility(false) }} className="flex-1 rounded-xl mx-2 px-2 py-4 bg-blue-200 text-blue-700 cursor-pointer">
                                Umdrehen
                            </div>
                        </div>
                    </div>
                    :
                    <div className="flex justify-between max-w-xl p-4 m-auto text-center">
                        <div onClick={() => { }} className="flex-1 rounded-xl mx-2 px-2 py-4 bg-blue-200 text-blue-700 cursor-pointer">
                            Nächste Box lernen
                            </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CardsPage;