import React from 'react';
import { connect } from "react-redux";

import NavigationHeader from '../components/navigation-header.component';
import { lessonSelector } from '../data/selectors';

const mapStateToProps = (state, props) => {
    return {
        lesson: lessonSelector(state, props.match.params.lessonid)
    };
};

function CardListPage(props) {

    const onCardClicked = (card) => {
        props.history.push(`/cards/${props.lesson.course.id}/${props.lesson.id}/${card.id}/edit`)
    }

    const onAddCard = () => {
        
    }

    return (
        <div>
            <NavigationHeader onPlusButtonClicked={() => onAddCard()} backButton={props.lesson.course.name} onBackButtonClicked={() => props.history.push(`/course/${props.lesson.course.id}`)} title={props.lesson.name} ></NavigationHeader>
            <div className="p-2 flex justify-center flex-wrap w-full max-w-xl m-auto">
                {props.lesson.cards.map((card, index) => {
                    return (
                        <div key={index.toString()} className="w-1/2 p-2">
                            <div onClick={() => onCardClicked(card)} className="flex justify-center items-center bg-white h-48 p-4 text-center rounded-xl shadow-md cursor-pointer">
                                <span className="">{card.front}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default connect(mapStateToProps)(CardListPage);