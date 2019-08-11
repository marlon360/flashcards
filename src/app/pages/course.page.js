import React from 'react';
import NavigationHeader from './../components/navigation-header.component';
import Course from './../components/course.component';

import { Link } from 'react-router-dom';

function CoursePage(props) {

    return (
        <div>
            <NavigationHeader title="Kurse"></NavigationHeader>
            <div className="bg-gray-100 p-4 flex flex-col items-center justify-center">
                <Link className="w-full" to="/lessons">
                    <Course name="Mathematik" lessons="4" cards="12" percentage="12"></Course>
                </Link>
                <Link className="w-full" to="/lessons">
                    <Course gradient="blue" name="Allgemeinwissen" lessons="2" cards="38" percentage="78"></Course>
                </Link>
            </div>
        </div>
    );
}

export default CoursePage;