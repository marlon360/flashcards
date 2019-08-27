import React from 'react';
import { connect } from "react-redux";

import { cardSelector } from '../data/selectors';
import { updateCard, deleteCard } from '../data/actions';
import EditCardComponent from '../components/edit-card.component';

const mapStateToProps = (state, props) => {
    return {
        card: cardSelector(state, props.match.params.cardid)
    };
};

function mapDispatchToProps(dispatch) {
    return {
        updateCard: payload => dispatch(updateCard(payload)),
        deleteCard: payload => dispatch(deleteCard(payload))
    };
}

function EditCardPage(props) {

    const { courseid, lessonid } = props.match.params;

    const onSave = (content) => {
        props.updateCard({
            id: props.card.id,
            front: content.frontContent,
            back: content.backContent
        });
        props.history.push(`/cards/${courseid}/${lessonid}`);
    }

    const onClose = (content) => {
        if (content.frontContent !== props.card.front || content.backContent !== props.card.back) {
            if (window.confirm("Geänderte Daten gehen verloren!")) {
                props.history.goBack();
            }
        } else {
            console.log(props.history);
            props.history.goBack();
        }
    }

    const onDelete = () => {
        if (window.confirm("Diese Karte wirklich löschen?")) {
            props.deleteCard({
                id: props.card.id
            });
            props.history.push(`/cards/${courseid}/${lessonid}`);
        }
    }

    return (
        <EditCardComponent front={props.card.front} back={props.card.back} onSave={(content) => onSave(content)} onDelete={() => onDelete()} onClose={(content) => onClose(content)} />
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCardPage);;