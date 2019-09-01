import React from 'react';
import { connect } from "react-redux";

import NavigationHeader from '../components/navigation-header.component';
import { lessonSelector } from '../data/selectors';
import { SlideRight, SlideOverFromBottom } from '../transitions/transitions';
import Page from '../components/page.component';

const mapStateToProps = (state, props) => {
    return {
        lesson: lessonSelector(state, props.match.params.lessonid)
    };
};

function CardListPage(props) {

    const onCardClicked = (card) => {
        props.history.push({
            pathname: `/cards/${props.lesson.course.id}/${props.lesson.id}/${card.id}/edit`,
            state: {
                ...SlideOverFromBottom,
                modal: true,
                prevLocation: props.history.location
            }
        });
    }

    const onAddCard = () => {
        props.history.push({
            pathname: `/course/${props.lesson.course.id}/${props.lesson.id}/cards/new`,
            state: {
                ...SlideOverFromBottom,
                modal: true
            }
        });
    }

    const onBackButton = () => {
        props.history.push({
            pathname: `/course/${props.lesson.course.id}`,
            state: {
                ...SlideRight
            }
        });
    }

    return (
        <Page>
            <NavigationHeader onPlusButtonClicked={() => onAddCard()} backButton={props.lesson.course.name} onBackButtonClicked={() => onBackButton()} title={props.lesson.name} ></NavigationHeader>
            <div className="p-2 flex flex-wrap w-full max-w-xl m-auto">
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
        </Page>
    );
}

export default connect(mapStateToProps)(CardListPage);