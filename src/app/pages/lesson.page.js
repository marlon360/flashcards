import React from 'react';
import NavigationHeader from '../components/navigation-header.component';
import Lesson from '../components/lesson.component';

function LessonPage(props) {
    const { params } = props.match;
    return (
        <div>
            <NavigationHeader backButton={"Kurse"} onBackButtonClicked={() => props.history.push('/courses')} title={params.course} ></NavigationHeader>
            <div className="p-4 flex flex-col items-center justify-center">
                <Lesson name="Kapitel 1 - Kurven" cards="12" percentage="78"></Lesson>
                <Lesson name="Kapitel 2 - Flächen" cards="8" percentage="34"></Lesson>
            </div>
        </div>
    );
}

export default LessonPage;