
import React, { useState } from 'react';
import { connect } from "react-redux";

import XmarkIcon from '../icons/xmark.icon';

import { Link } from 'react-router-dom';
import { createLesson } from '../data/actions';

function mapDispatchToProps(dispatch) {
    return {
        addLesson: lesson => dispatch(createLesson(lesson))
    };
}

function NewLessonPage(props) {
    const [lessonInput, setLessonInput] = useState('');

    const courseId = props.match.params.id;

    const isButtonDisabled = (inputValue) => {
        return inputValue === '' || inputValue === null;
    }

    const onInputChanged = (event) => {
        setLessonInput(event.target.value);
    }

    const onSubmit = () => {
        props.addLesson({
            name: lessonInput,
            course: courseId
        });
        props.history.push('/course/'+courseId)
    }

    return (
        <div className="flex flex-col h-screen">
            <div className="px-6 pb-4 pt-8 w-full flex justify-between">
                <div>
                    <Link to={`/course/${courseId}`}>
                        <XmarkIcon className="text-gray-600" alt="close"></XmarkIcon>
                    </Link>
                </div>
            </div>
            <div className="flex-1 px-4 ">
                <div className="flex flex-col items-center py-8 px-4">
                    <h1 className="text-3xl text-gray-800 font-bold mb-4">Neue Lektion anlegen!</h1>
                    <h2 className="text-xl text-gray-600 mb-12">Gib hier den Namen deiner neuen Lektion ein.</h2>
                    <input onChange={onInputChanged} className="p-4 text-xl w-full text-gray-800 max-w-sm rounded mb-8 outline-none focus:shadow-outline" placeholder="Meine Lektion"></input>
                    <button onClick={onSubmit} disabled={isButtonDisabled(lessonInput)} className="text-xl bg-blue-500 text-white px-8 py-4 rounded-lg shadow-lg outline-none disabled:opacity-50 disabled:cursor-not-allowed">Lektion anlegen</button>
                </div>
            </div>
        </div>
    );
}

export default connect(null, mapDispatchToProps)(NewLessonPage);