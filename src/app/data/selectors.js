import { createSelector } from 'redux-orm';
import { orm } from './models';

// Selects the state managed by Redux-ORM.
const dbStateSelector = state => state.orm;

export const allCoursesSelector = createSelector(
    orm,
    dbStateSelector,
    session => {
        return session.Course.all().toModelArray().map(course => {
            const { ref } = course;
            return {
                ...ref,
                lessons: course.lessons.toModelArray().map(lesson => {
                    const { ref } = lesson;
                    return {
                        ...ref,
                        cards: lesson.cards.toRefArray().map(card => {
                            return {
                                ...card
                            }
                        })
                    }
                }),
            };
        });
    }
);

export const courseSelector = createSelector(
    orm,
    dbStateSelector,
    (state, courseId) => courseId,
    (session, courseId) => {
        const course = session.Course.withId(courseId);
        const { ref } = course;
        return {
            ...ref,
            lessons: course.lessons.toModelArray().map(lesson => {
                const { ref } = lesson;
                return {
                    ...ref,
                    cards: lesson.cards.toRefArray().map(card => {
                        return {
                            ...card
                        }
                    })
                }
            }),
        };
    }
)

export const lessonSelector = createSelector(
    orm,
    dbStateSelector,
    (state, lessonId) => lessonId,
    (session, lessonId) => {
        const lesson = session.Lesson.withId(lessonId);
        const course = session.Course.withId(lesson.ref.course);
        const courseRef  = course.ref;
        const { ref } = lesson;
        return {
            ...ref,
            course: {
                ...courseRef
            },
            cards: lesson.cards.toRefArray().map(card => { return { ...card } })
        }
    }
)

export const cardSelector = createSelector(
    orm,
    dbStateSelector,
    (state, cardId) => cardId,
    (session, cardId) => {
        if (session.Card.idExists(cardId)) {
            const card = session.Card.withId(cardId);
            const { ref } = card;
            return {
                ...ref
            }
        } else {
            return {}
        }
    }
)