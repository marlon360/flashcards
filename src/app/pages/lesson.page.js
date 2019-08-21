import React from 'react';
import { connect } from "react-redux";

import NavigationHeader from '../components/navigation-header.component';
import Lesson from '../components/lesson.component';

const mapStateToProps = state => {
    return { courses: state.courses };
};

function LessonPage(props) {

    const { params } = props.match;

    const findCourse = (courses, id) => {
        for (const course of courses) {
            if (course.id === id) {
                return course;
            }
        }
        return null;
    }

    const course = findCourse(props.courses, params.id);

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
        props.history.push('/cards/' + course.id + "/" + lesson.id);
    }

    return (
        <div>
            <NavigationHeader backButton={"Kurse"} onBackButtonClicked={() => props.history.push('/courses')} title={params.course} ></NavigationHeader>
            <div className="p-4 flex flex-col items-center justify-center">
                {course && course.lessons.map((lesson, index) => {
                    return (
                        <Lesson key={index.toString()} onLearn={() => onLearn(lesson)} name={lesson.name} cards={lesson.cards.length} percentage={progress(lesson)}></Lesson>
                    )
                })}
            </div>
        </div>
    );
}

export default connect(mapStateToProps)(LessonPage);