import React, { Component } from 'react';
import XmarkIcon from '../icons/xmark.icon';
import BoxIcon from '../icons/box.icon';
import Down from '../icons/down.svg';
import PencilIcon from '../icons/pencil.icon';

import { Link } from 'react-router-dom';

const SlideDirection = {
    LEFT: 1,
    RIGHT: 2,
};

class CardsPage extends Component {

    cards = [
        {
            front: "Was ist eine Kurve?",
            back: "Eine Kurve ist eine Funktion.",
            box: 1
        },
        {
            front: "Was ist eine Fläche?",
            back: "Eine Kurve ist eine Funktion.",
            box: 1
        },
        {
            front: "Was ist ein offenes Intervall?",
            back: "Eine Kurve ist eine Funktion.",
            box: 2
        },
        {
            front: "Was ist die Krümmung einer Kurve?",
            back: "Eine Kurve ist eine Funktion.",
            box: 3
        }
    ]

    constructor(props, context) {
        super(props, context);

        this.state = {
            slideDirection: SlideDirection.LEFT,
            slideCounter: 0,
            isFrontSideVisible: true,
            isPopoverVisible: false,
            cardIndices: [0, 1, 2, 3, 4],
            cards: this.filterCards(this.cards, 1),
            box: 1
        }

    }

    filterCards(cards, box) {
        return cards.filter((card) => {
            return card.box === box;
        })
    }

    mapMove(move) {
        return move % 5;
    }

    getClasses(move, moveDir) {
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

    getFlipClass(move, front) {
        return (move === 4 && !front ? 'transform-card-flipped' : '');
    }

    calculateCardIndices(move, cardIndices) {
        for (let index = 0; index < 5; index++) {
            // when card is not visible (position 1 is not visible)
            if (this.mapMove(move + 4 - index) === 1) {
                const newIndex = index + (Math.floor(((move + 4 - index) / 5)) * 5);
                if (newIndex !== cardIndices[index]) {
                    cardIndices[index] = newIndex;
                    this.setCardIndices(cardIndices);
                }
            }
        }
    }

    setCardIndices(indices) {
        this.setState({
            cardIndices: indices
        })
    }

    setPopoverVisibility(visible) {
        this.setState({
            isPopoverVisible: visible
        })
    }

    setFrontSideVisibility(visible) {
        this.setState({
            isFrontSideVisible: visible
        })
    }

    setSlideDirection(direction) {
        this.setState({
            slideDirection: direction
        })
    }

    setSlideCounter(count) {
        this.setState({
            slideCounter: count
        })
    }

    setBox(num) {
        this.setState({
            box: num,
            slideCounter: 0,
            isFrontSideVisible: true,
            cardIndices: [0, 1, 2, 3, 4],
            cards: this.filterCards(this.cards, num),
        });
    }

    onCorrect() {
        let card = this.state.cards[this.state.cardIndices[this.mapMove(this.state.slideCounter)]]
        card.box = Math.min(card.box + 1, 4);
        this.setSlideDirection(SlideDirection.RIGHT);
        this.setFrontSideVisibility(true);
        this.setSlideCounter(this.state.slideCounter + 1)
    }

    onFalse() {
        let card = this.state.cards[this.state.cardIndices[this.mapMove(this.state.slideCounter)]]
        card.box = Math.max(card.box - 1, 1);
        this.setSlideDirection(SlideDirection.LEFT);
        this.setFrontSideVisibility(true);
        this.setSlideCounter(this.state.slideCounter + 1)
    }

    render() {
        this.calculateCardIndices(this.state.slideCounter, this.state.cardIndices);
        const cardClasses = 'perspective-1500 transition-all transition-750 absolute inset-0 bg-transparent w-full text-gray-800 text-center text-3xl font-bold ';
        return (
            <div>
                <div className="relative h-screen">
                    <div onClick={() => this.setPopoverVisibility(!this.state.isPopoverVisible)} className={`absolute inset-0 overflow-hidden bg-overlay z-50 ${this.state.isPopoverVisible ? 'transition-fade-in opacity-100 max-h-full' : 'transition-fade-out opacity-0 max-h-0'}`}>

                        <div className="relative bg-white p-6 w-10/12 m-auto mt-22 rounded-xl">
                            <div className="absolute rounded top-0 left-1/2 -z-10 bg-white w-8 h-8 transform-popoverCorner">

                            </div>
                            {[1, 2, 3, 4].map((v, i) => {
                                return (
                                    <div onClick={() => this.setBox(v)} key={i.toString()} className={`bg-gray-200 cursor-pointer ${this.state.box === v ? 'bg-blue-100' : '' } hover:bg-blue-100 p-4 rounded-xl ${i !== 3 ? 'mb-4' : ''}`}>
                                        <div className="flex items-center">
                                            <BoxIcon className="mr-4 h-full w-8 text-gray-600" alt="box"></BoxIcon>
                                            <div className="text-gray-800">
                                                <div className="text-md font-light">Box {v}</div>
                                                <div className="text-xl font-bold -mt-1">{this.filterCards(this.cards, v).length} Karten</div>
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
                        <div onClick={() => this.setPopoverVisibility(true)} className="flex cursor-pointer justify-center items-center font-bold text-blue-500 text-xl">
                            <BoxIcon className="mr-1" alt="box"></BoxIcon>
                            <span>Box {this.state.box}</span>
                            <img className="ml-1 transition-all" src={Down} alt="down"></img>
                        </div>
                        <div className="w-6">
                            <PencilIcon className="text-gray-600" alt="edit"></PencilIcon>
                        </div>
                    </div>
                    <div className="px-4 h-6/10">
                        <div className="relative w-full max-w-xl m-auto h-8/10">
                            {[0, 1, 2, 3, 4].map((v, i) => {
                                return (this.state.cardIndices[i] < this.state.cards.length ?
                                    <div key={i.toString()} onClick={() => this.setFrontSideVisibility(!this.state.isFrontSideVisible)} className={cardClasses + this.getClasses(this.mapMove(this.state.slideCounter + 4 - i), this.state.slideDirection)}>
                                        <div className={`relative w-full h-full p-6 bg-transparent transition-all transition-1000 transform-preserve-3d ${this.getFlipClass(this.mapMove(this.state.slideCounter + 4 - i), this.state.isFrontSideVisible)}`}>
                                            <div className="bg-gradient-120-white border border-gray-300 shadow-lg rounded-xl absolute inset-0 backface-hidden">
                                                <div className="absolute inset-1 flex overflow-scroll backface-hidden leading-snug">
                                                    <span className="m-auto">{this.state.cards[this.state.cardIndices[i]].front}</span>
                                                </div>
                                            </div>
                                            <div className="bg-gradient-120-white border border-gray-300 shadow-lg rounded-xl absolute inset-0 rotate-y-180 backface-hidden flex justify-center items-center">
                                                {this.state.cards[this.state.cardIndices[i]].back}
                                            </div>
                                        </div>
                                    </div> : null)
                            })}
                            {(this.state.slideCounter >= this.state.cards.length ?
                                <div className="h-full p-12 flex flex-col justify-center items-center text-2xl text-gray-600 font-bold text-center">
                                    Du hast alle Karten dieser Box beantwortet!
                            </div>
                                : null)}
                        </div>
                    </div>
                    {(this.state.slideCounter < this.state.cards.length ?
                        <div>
                            <div className={`flex justify-between max-w-xl p-4 m-auto text-center ${this.state.isFrontSideVisible ? 'hidden' : ''}`}>
                                <div onClick={() => this.onFalse() } className="flex-1 rounded-xl mx-2 px-2 py-4 bg-red-200 border border-red-300 text-red-700 cursor-pointer">
                                    Falsch
                            </div>
                                <div onClick={() => this.onCorrect()} className="flex-1 rounded-xl mx-2 px-2 py-4 bg-green-200 text-green-700 border border-green-300 cursor-pointer">
                                    Richtig
                            </div>
                            </div>
                            <div className={`flex justify-between max-w-xl p-4 m-auto text-center ${!this.state.isFrontSideVisible ? 'hidden' : ''}`}>
                                <div onClick={() => { this.setFrontSideVisibility(false) }} className="flex-1 rounded-xl mx-2 px-2 py-4 bg-blue-200 text-blue-700 cursor-pointer">
                                    Umdrehen
                            </div>
                            </div>
                        </div>
                        :
                        <div className="flex flex-col justify-between max-w-xl p-4 m-auto text-center">
                            {(this.filterCards(this.cards, this.state.box).length > 0 ?
                            <div onClick={() => {this.setBox(this.state.box) }} className="mb-4 rounded-xl mx-2 px-2 py-4 bg-blue-200 text-blue-700 cursor-pointer">
                                Diese Box noch einmal lernen ({this.filterCards(this.cards, this.state.box).length} Karten)
                            </div>
                            :
                            null
                            )}
                            <div onClick={() => this.setPopoverVisibility(true)} className="rounded-xl mx-2 px-2 py-4 bg-blue-200 text-blue-700 cursor-pointer">
                                Eine andere Box lernen
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default CardsPage;