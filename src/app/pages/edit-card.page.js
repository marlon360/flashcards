import React, { useState } from 'react';
import { connect } from "react-redux";

import XmarkIcon from '../icons/xmark.icon';

import { cardSelector } from '../data/selectors';
import { updateCard, deleteCard } from '../data/actions';


const CardSide = {
    FRONT: 1,
    BACK: 2,
};

const mapStateToProps = (state, props) => {
    return {
        card: cardSelector(state, props.match.params.cardid)
    };
};

function mapDispatchToProps(dispatch) {
    return {
        updateCard: payload => dispatch(updateCard(payload)),
        deleteCard: payload => dispatch(deleteCard(payload))
    };
}

function EditCardPage(props) {

    const { courseid, lessonid } = props.match.params;

    const [cardSide, setCardSide] = useState(CardSide.FRONT);

    const [frontContent, setFrontContent] = useState(props.card.front);
    const [backContent, setBackContent] = useState(props.card.back);

    const onChange = (event) => {
        if (cardSide === CardSide.FRONT) {
            setFrontContent(event.target.value);
        }
        if (cardSide === CardSide.BACK) {
            setBackContent(event.target.value);
        }
    }

    const onSave = () => {
        props.updateCard({
            id: props.card.id,
            front: frontContent,
            back: backContent
        });
        props.history.push(`/cards/${courseid}/${lessonid}`);
    }

    const onClose = () => {
        if (frontContent !== props.card.front || backContent !== props.card.back) {
            if (window.confirm("Geänderte Daten gehen verloren!")) {
                props.history.push(`/cards/${courseid}/${lessonid}`);
            }
        } else {
            props.history.push(`/cards/${courseid}/${lessonid}`);
        }
    }

    const onDelete = () => {
        if (window.confirm("Diese Karte wirklich löschen?")) {
            props.deleteCard({
                id: props.card.id
            });
            props.history.push(`/cards/${courseid}/${lessonid}`);
        }
    }

    return (
        <div className="flex flex-col h-screen">
            <div className="px-6 pb-4 pt-8 w-full flex justify-between">
                <div>
                    <div onClick={() => onClose()}>
                        <XmarkIcon className="text-gray-600" alt="close"></XmarkIcon>
                    </div>
                </div>
                <div onClick={() => onSave()} className="font-bold text-blue-600">
                    Speichern
                </div>
            </div>
            <div className="flex-1">
                <div className="flex flex-col items-center py-4 h-full">
                    <div className="w-full px-4">
                        <div className="bg-gray-300 rounded-lg py-2 px-2 flex w-full max-w-lg m-auto">
                            <div onClick={() => setCardSide(CardSide.FRONT)} className={`transition-all text-gray-700 text-center mr-1 rounded-lg py-2 px-4 flex-1 bg-transparent ${cardSide === CardSide.FRONT ? 'shadow-md bg-white font-bold' : ''}`}>Vorderseite</div>
                            <div onClick={() => setCardSide(CardSide.BACK)} className={`transition-all text-gray-700 text-center ml-1 rounded-lg py-2 px-4 flex-1 bg-transparent ${cardSide === CardSide.BACK ? 'shadow-md bg-white font-bold' : ''}`}>Rückseite</div>
                        </div>
                    </div>
                    <div className="w-full flex-1 bg-white mt-4">
                        <div className="w-full max-w-lg h-full px-4 py-4 m-auto">
                            <textarea onChange={onChange} value={(cardSide === CardSide.FRONT) ? frontContent : backContent} className="w-full h-full resize-none outline-none">
                            </textarea>
                        </div>
                    </div>
                    <div className="w-full px-4">
                        <div onClick={() => onDelete()} className="bg-red-400 text-white rounded max-w-lg mx-auto w-full text-center px-8 py-4 m-8">
                            Löschen
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCardPage);;