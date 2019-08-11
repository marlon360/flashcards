import React from 'react';
import NavigationHeader from './../components/navigation-header.component';
import Course from './../components/course.component';

function CoursePage(props) {

    return (
        <div>
            <NavigationHeader title="Kurse"></NavigationHeader>
            <div className="bg-gray-100 p-4 flex flex-col items-center justify-center">
                <Course name="Mathematik" lessons="4" cards="12" percentage="12"></Course>
                <Course gradient="blue" name="Allgemeinwissen" lessons="2" cards="38" percentage="78"></Course>
            </div>
        </div>
    );
}

export default CoursePage;