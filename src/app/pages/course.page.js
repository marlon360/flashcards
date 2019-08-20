import React from 'react';
import NavigationHeader from './../components/navigation-header.component';
import Course from './../components/course.component';

import { Link } from 'react-router-dom';

function CoursePage(props) {

    const gradients = [
        "orange",
        "blue"
    ]

    return (
        <div>
            <NavigationHeader onPlusButtonClicked={() => props.history.push('/new/course')} title="Kurse"></NavigationHeader>
            <div className="p-4 flex flex-col items-center justify-center">
                {props.courses.map((course, index) => {
                    return (
                        <Link className="w-full flex justify-center" to="/course/Mathematik">
                            <Course gradient={gradients[index % gradients.length]} {...course}></Course>
                        </Link>
                    )
                })}
            </div>
        </div>
    );
}

export default CoursePage;