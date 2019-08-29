import { CHANGE_BOX, CREATE_COURSE, SELECT_COURSE, CREATE_LESSON, UPDATE_CARD, DELETE_CARD, CREATE_CARD, DELETE_COURSE, DELETE_LESSON } from "./action-types";

export function createCourse(payload) {
    return { type: CREATE_COURSE, payload }
};

export function deleteCourse(payload) {
    return { type: DELETE_COURSE, payload }
};

export function createLesson(payload) {
    return { type: CREATE_LESSON, payload }
};

export function deleteLesson(payload) {
    return { type: DELETE_LESSON, payload }
};

export function selectCourse(payload) {
    return { type: SELECT_COURSE, payload }
};

export function changeBox(payload) {
    return { type: CHANGE_BOX, payload }
};

export function updateCard(payload) {
    return { type: UPDATE_CARD, payload }
};

export function deleteCard(payload) {
    return { type: DELETE_CARD, payload }
};

export function createCard(payload) {
    return { type: CREATE_CARD, payload }
};