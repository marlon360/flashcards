import React from 'react';
import { connect } from "react-redux";

import { createCard } from '../data/actions';
import EditCardComponent from '../components/edit-card.component';
import { SlideDown } from '../transitions/transitions';


function mapDispatchToProps(dispatch) {
    return {
        createCard: payload => dispatch(createCard(payload)),
    };
}

function NewCardPage(props) {

    const { courseid, lessonid } = props.match.params;

    const onSave = (content) => {
        props.createCard({
            front: content.frontContent,
            back: content.backContent,
            lesson: lessonid,
            box: 1
        });
        props.history.push(`/course/${courseid}/${lessonid}/cards`);
    }

    const onClose = (content) => {
        if (content.frontContent !== '' || content.backContent !== '') {
            if (window.confirm("Geänderte Daten gehen verloren!")) {
                props.history.push({
                    pathname: `/course/${courseid}/${lessonid}/cards`,
                    state: {
                        ...SlideDown
                    }
                });
            }
        } else {
            props.history.push({
                pathname: `/course/${courseid}/${lessonid}/cards`,
                state: {
                    ...SlideDown
                }
            });
        }
    }

    const onDelete = () => {
        props.history.push({
            pathname: `/course/${courseid}/${lessonid}/cards`,
            state: {
                ...SlideDown
            }
        });
    }

    return (
        <div className="bg-gray-200">
            <EditCardComponent front="" back="" onSave={(content) => onSave(content)} onDelete={() => onDelete()} onClose={(content) => onClose(content)} />
        </div>
    );
}

export default connect(null, mapDispatchToProps)(NewCardPage);