import React from 'react';
import { connect } from "react-redux";

import { cardSelector } from '../data/selectors';
import { updateCard, deleteCard } from '../data/actions';
import EditCardComponent from '../components/edit-card.component';
import Page from '../components/page.component';
import useRouter from '../utils/useRouter';
import { SlideDown } from '../transitions/transitions';

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

    const { location } = useRouter();

    const { courseid, lessonid } = props.match.params;

    const hasGoBackPath = () => {
        return location.state && location.state.prevLocation;
    }

    const goBack = () => {
        hasGoBackPath() ? props.history.push({
            pathname:location.state.prevLocation.pathname,
            state: {
                ...SlideDown
            }
        }) : props.history.goBack();
    }

    const onSave = (content) => {
        props.updateCard({
            id: props.card.id,
            front: content.frontContent,
            back: content.backContent
        });
        goBack();
    }

    const onClose = (content) => {
        if (content.frontContent !== props.card.front || content.backContent !== props.card.back) {
            if (window.confirm("Geänderte Daten gehen verloren!")) {
                goBack();
            }
        } else {
            goBack();
        }
    }

    const onDelete = () => {
        if (window.confirm("Diese Karte wirklich löschen?")) {
            props.deleteCard({
                id: props.card.id
            });
            goBack();
        }
    }

    return (
        <Page>
            <EditCardComponent front={props.card.front} back={props.card.back} onSave={(content) => onSave(content)} onDelete={() => onDelete()} onClose={(content) => onClose(content)} />
        </Page>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCardPage);;