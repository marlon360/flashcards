import { ADD_COURSE } from "../constants/action-types";

const initialState = {
    courses: []
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_COURSE) {
        return [...state.courses, action.payload];
    }
    return state;
}

export default rootReducer;