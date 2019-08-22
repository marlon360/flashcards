import { CHANGE_BOX, CREATE_COURSE, SELECT_COURSE } from "./action-types";

export function createCourse(payload) {
    return { type: CREATE_COURSE, payload }
};

export function selectCourse(payload) {
    return { type: SELECT_COURSE, payload }
};

export function changeBox(payload) {
    return { type: CHANGE_BOX, payload }
};