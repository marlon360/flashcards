import React from 'react';
import NavigationHeader from '../components/navigation-header.component';
import Lesson from '../components/lesson.component';

function LessonPage(props) {

    const { params } = props.match;

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

    return (
        <div>
            <NavigationHeader backButton={"Kurse"} onBackButtonClicked={() => props.history.push('/courses')} title={params.course} ></NavigationHeader>
            <div className="p-4 flex flex-col items-center justify-center">
                {props.course.lessons.map((lesson, index) => {
                    return (
                        <Lesson key={index.toString()} name={lesson.name} cards={lesson.cards.length} percentage={progress(lesson)}></Lesson>
                    )
                })}
            </div>
        </div>
    );
}

export default LessonPage;