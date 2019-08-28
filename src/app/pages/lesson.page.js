import React from 'react';
import { connect } from "react-redux";

import NavigationHeader from '../components/navigation-header.component';
import Lesson from '../components/lesson.component';
import { courseSelector } from '../data/selectors';
import ContextMenuComponent from '../components/context-menu.component';

const mapStateToProps = (state, props) => {
    const courseId = props.match.params.id;
    return { course: courseSelector(state, courseId) };
};

function LessonPage(props) {

    const progress = (lesson) => {
        const cards = lesson.cards.length;
        const boxCount = 3;
        let progress = 0;
        lesson.cards.forEach(card => {
            let percentage = (card.box - 1) * (100 / boxCount);
            progress += (percentage / cards)
        });
        return Math.floor(progress);
    }

    const onLearn = (lesson) => {
        props.history.push('/cards/' + props.course.id + "/" + lesson.id);
    }

    const onEdit = (lesson) => {
        props.history.push('/course/' + props.course.id + "/" + lesson.id + "/cards");
    }

    return (
        <div>
            <NavigationHeader onPlusButtonClicked={() => props.history.push('/course/'+props.course.id+'/new')} backButton={"Kurse"} onBackButtonClicked={() => props.history.push('/courses')} title={props.course.name} ></NavigationHeader>
            <div className="p-4 flex flex-col items-center justify-center">
                {props.course && props.course.lessons.map((lesson, index) => {
                    return (
                        <ContextMenuComponent className="w-full max-w-lg" actions={[
                            {name: "Umbenennen"},
                            {name: "Löschen"},
                        ]}>
                            <Lesson key={index.toString()} onLearn={() => onLearn(lesson)} name={lesson.name} onEdit={() => onEdit(lesson)} cards={lesson.cards.length} percentage={progress(lesson)}></Lesson>
                        </ContextMenuComponent>
                    )
                })}
            </div>
        </div>
    );
}

export default connect(mapStateToProps)(LessonPage);