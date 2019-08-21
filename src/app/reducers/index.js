import { ADD_COURSE } from "../constants/action-types";

const initialState = {
    courses: [
        {
            name: 'Mathematik',
            lessons: [
                {
                    name: "Kapitel 1 - Kurven",
                    cards: [
                        {
                            front: "Was ist eine Kurve?",
                            back: "Eine Kurve ist eine Funktion.",
                            box: 1
                        },
                        {
                            front: "Was ist eine Fläche?",
                            back: "Eine Kurve ist eine Funktion.",
                            box: 1
                        },
                        {
                            front: "Was ist die Krümmung einer Kurve?",
                            back: "Eine Kurve ist eine Funktion.",
                            box: 1
                        },
                        {
                            front: "Was ist ein offenes Intervall?",
                            back: "Eine Kurve ist eine Funktion.",
                            box: 1
                        }
                    ]
                },
                {
                    name: "Kapitel 2 - Flächen",
                    cards: []
                }
            ]
        },
        {
            name: 'Allgemeinwissen',
            lessons: [
                {
                    name: "Hauptstädte",
                    cards: [
                        {
                            front: "Deutschland",
                            back: "Berlin",
                            box: 1
                        }
                    ]
                }
            ]
        }
    ]
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_COURSE) {
        return [...state.courses, action.payload];
    }
    return state;
}

export default rootReducer;