import React from 'react';
import NavigationHeader from './../components/navigation-header.component';
import Course from './../components/course.component';

import { Link } from 'react-router-dom';

function CoursePage(props) {

    const gradients = [
        "orange",
        "blue"
    ]

    const cardCount = (course) => {
        return course.lessons.reduce((acc,lesson) => acc + lesson.cards.length, 0);
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

    return (
        <div>
            <NavigationHeader onPlusButtonClicked={() => props.history.push('/new/course')} title="Kurse"></NavigationHeader>
            <div className="p-4 flex flex-col items-center justify-center">
                {props.courses.map((course, index) => {
                    return (
                        <Link className="w-full flex justify-center" to="/course/Mathematik">
                            <Course gradient={gradients[index % gradients.length]} name={course.name} lessonCount={course.lessons.length} cardCount={cardCount(course)} progress={progress(course)}></Course>
                        </Link>
                    )
                })}
            </div>
        </div>
    );
}

export default CoursePage;