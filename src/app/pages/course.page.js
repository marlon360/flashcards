import React from 'react';
import { connect } from "react-redux";
import NavigationHeader from './../components/navigation-header.component';
import Course from './../components/course.component';
import { allCoursesSelector } from '../data/selectors';

const mapStateToProps = state => {
    return { courses: allCoursesSelector(state) };
};

function CoursePage(props) {

    const gradients = [
        "orange",
        "blue"
    ]

    const cardCount = (course) => {
        return course.lessons.reduce((acc, lesson) => acc + lesson.cards.length, 0);
    }

    const progress = (course) => {
        const cards = cardCount(course);
        const boxCount = 3;
        let progress = 0;
        course.lessons.forEach(lesson => {
            lesson.cards.forEach((card) => {
                let percentage = (card.box - 1) * (100 / boxCount);
                progress += (percentage / cards)
            })
        });
        return Math.floor(progress);
    }

    const onSelectedCourse = (course) => {
        props.history.push('/course/' + course.id);
    };

    return (
        <div>
            <NavigationHeader onPlusButtonClicked={() => props.history.push('/new/course')} title="Kurse"></NavigationHeader>
            <div className="p-4 flex flex-col items-center justify-center">
                {props.courses.map((course, index) => {
                    return (
                        <div key={course.id.toString()} onClick={() => onSelectedCourse(course)} className="w-full flex justify-center cursor-pointer">
                            <Course gradient={gradients[index % gradients.length]} name={course.name} lessonCount={course.lessons.length} cardCount={cardCount(course)} progress={progress(course) }></Course>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default connect(mapStateToProps)(CoursePage);