import { uuidv1 } from 'uuid';
import { ADD_COURSE } from "../constants/action-types";

const initialState = {
    courses: [
        {
            name: 'Mathematik',
            id: "1",
            lessons: [
                {
                    name: "Kapitel 1 - Kurven",
                    id: "1",
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
                    id: "2",
                    cards: []
                }
            ]
        },
        {
            name: 'Allgemeinwissen',
            id: "2",
            lessons: [
                {
                    name: "Hauptstädte",
                    id: "1",
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
        return [...state.courses,{
            name: action.payload.name,
            lessons: [],
            id: uuidv1()
        }];
    }
    return state;
}

export default rootReducer;