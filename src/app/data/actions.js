import { CHANGE_BOX, CREATE_COURSE, SELECT_COURSE, CREATE_LESSON } from "./action-types";

export function createCourse(payload) {
    return { type: CREATE_COURSE, payload }
};

export function createLesson(payload) {
    return { type: CREATE_LESSON, payload }
};

export function selectCourse(payload) {
    return { type: SELECT_COURSE, payload }
};

export function changeBox(payload) {
    return { type: CHANGE_BOX, payload }
};