import React from 'react';
import { connect } from "react-redux";
import { useTransition, animated } from 'react-spring'
import NavigationHeader from './../components/navigation-header.component';
import Course from './../components/course.component';
import { allCoursesSelector } from '../data/selectors';
import ContextMenuComponent from '../components/context-menu.component';
import XmarkIcon from '../icons/xmark.icon';
import { deleteCourse } from '../data/actions';

const mapStateToProps = state => {
    return { courses: allCoursesSelector(state) };
};

function mapDispatchToProps(dispatch) {
    return {
        deleteCourse: payload => dispatch(deleteCourse(payload)),
    };
}

function CoursePage({ courses, deleteCourse, history }) {

    const gradients = [
        "orange",
        "blue"
    ]

    const cardCount = (course) => {
        return course.lessons.reduce((acc, lesson) => acc + lesson.cards.length, 0);
    }

    const progress = (course) => {
        const cards = cardCount(course);
        const boxCount = 3;
        let progress = 0;
        course.lessons.forEach(lesson => {
            lesson.cards.forEach((card) => {
                let percentage = (card.box - 1) * (100 / boxCount);
                progress += (percentage / cards)
            })
        });
        return Math.floor(progress);
    }

    const onSelectedCourse = (course) => {
        history.push('/course/' + course.id);
    };

    const AnimatedContextMenu = animated(ContextMenuComponent)

    const transitions = useTransition(courses, item => item.id, {
        from: { opacity: 0, height: '167px', transform: 'translate(0px, -50px) scale(0.6)' },
        enter: { opacity: 1, transform: 'translate(0px, 0px) scale(1)' },
        leave: { opacity: 0, height: '0px', margin: '0px', transform: 'translate(0px, 0px) scale(0)' },
        trail: 150
    })

    return (
        <div>
            <NavigationHeader onPlusButtonClicked={() => history.push('/new/course')} title="Kurse"></NavigationHeader>
            <div className="p-4 flex flex-col items-center justify-center">
                {transitions.map(({ item: course, props, key }) => {
                    return (
                        <AnimatedContextMenu key={key} actions={[
                            { name: "Umbenennen" },
                            { name: "Löschen", onClick: () => deleteCourse({ id: course.id }) },
                        ]} style={props} onClick={() => onSelectedCourse(course)} className="w-full relative flex justify-center cursor-pointer max-w-lg mb-12">
                                <Course gradient={gradients[course.id % gradients.length]} name={course.name} lessonCount={course.lessons.length} cardCount={cardCount(course)} progress={progress(course)}></Course>
                        </AnimatedContextMenu>
                    )
                })}
            </div>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);