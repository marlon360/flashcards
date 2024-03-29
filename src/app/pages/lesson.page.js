import React from 'react';
import { connect } from "react-redux";
import { useTransition, animated } from 'react-spring'

import NavigationHeader from '../components/navigation-header.component';
import Lesson from '../components/lesson.component';
import { courseSelector } from '../data/selectors';
import ContextMenuComponent from '../components/context-menu.component';
import { deleteLesson } from '../data/actions';
import { SlideRight, SlideOverFromBottom, SlideLeft, SlideDown } from '../transitions/transitions';
import Page from '../components/page.component';

const mapStateToProps = (state, props) => {
    const courseId = props.match.params.id;
    return { course: courseSelector(state, courseId) };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteLesson: payload => dispatch(deleteLesson(payload)),
    };
}

function LessonPage({course, history, deleteLesson}) {

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

    const onLearn = (lesson) => {
        history.push({
            pathname: '/cards/' + course.id + "/" + lesson.id,
            state: {
                ...SlideOverFromBottom,
                modal: true
            }
        });
    }

    const onEdit = (lesson) => {
        history.push({
            pathname: '/course/' + course.id + '/' + lesson.id + '/cards',
            state: {
                ...SlideLeft
            }
        });
    }

    const AnimatedContextMenu = animated(ContextMenuComponent)

    const transitions = useTransition(course.lessons, item => item.id, {
        initial: null,
        from: { opacity: 0, transform: 'translate(0px, -50px) scale(0.6)' },
        enter: { opacity: 1, transform: 'translate(0px, 0px) scale(1)' },
        leave: { opacity: 0, transform: 'translate(0px, 0px) scale(0)' },
        trail: 150
    })

    const onBackButton = () => {
        history.push({
            pathname: '/courses',
            state: {
                ...SlideRight
            }
        });
    }

    const onPlusButton = () => {
        history.push({
            pathname: '/course/'+course.id+'/new',
            state: {
                ...SlideOverFromBottom,
                modal: true
            }
        });
    }

    return (
        <Page>
            <NavigationHeader onPlusButtonClicked={() => onPlusButton()} backButton={"Kurse"} onBackButtonClicked={() => onBackButton()} title={course.name} ></NavigationHeader>
            <div className="p-4 flex flex-col items-center justify-center">
                {course && transitions.map(({ item: lesson, props, key }) => {
                    return (
                        <AnimatedContextMenu style={props} key={key} className="w-full max-w-lg mb-5" actions={[
                            {name: "Umbenennen"},
                            {name: "Löschen", onClick: () => deleteLesson({id: lesson.id})},
                        ]}>
                            <Lesson onLearn={() => onLearn(lesson)} name={lesson.name} onEdit={() => onEdit(lesson)} cards={lesson.cards.length} percentage={progress(lesson)}></Lesson>
                        </AnimatedContextMenu>
                    )
                })}
            </div>
        </Page>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(LessonPage);