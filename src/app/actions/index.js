import { ADD_COURSE } from "../constants/action-types";

export function addCourse(payload) {
    return { type: ADD_COURSE, payload }
};