import { Model, attr, fk, ORM } from "redux-orm";
import { CREATE_COURSE, CHANGE_BOX, CREATE_LESSON, UPDATE_CARD, DELETE_CARD, CREATE_CARD } from "./action-types";

export class Card extends Model {
    static reducer(action, Card, session) {
        const { payload, type } = action;
        switch (type) {
            case CHANGE_BOX:
                Card.withId(payload.id).update(payload);
                break;
            case UPDATE_CARD:
                Card.withId(payload.id).update(payload);
                break;
            case DELETE_CARD:
                Card.withId(payload.id).delete();
                break;
            case CREATE_CARD:
                const props = Object.assign({}, payload);
                Card.create(props);
                break;
            default:
                return null;
        }
    }
}
Card.modelName = "Card";
Card.fields = {
    lesson: fk("Lesson", "cards"),
    front: attr(),
    back: attr(),
    box: attr()
};

export class Lesson extends Model {
    static reducer(action, Lesson, session) {
        const { payload, type } = action;
        switch (type) {
            case CREATE_LESSON:
                const props = Object.assign({}, payload);
                Lesson.create(props);
                break;
            default:
                return null;
        }

    }
}
Lesson.modelName = "Lesson";
Lesson.fields = {
    name: attr(),
    course: fk("Course", "lessons")
};

export class Course extends Model {
    static reducer(action, Course, session) {
        const { payload, type } = action;
        switch (type) {
            case CREATE_COURSE:
                const props = Object.assign({}, payload);
                Course.create(props);
                break;
            default:
                return null;
        }

    }
}
Course.modelName = "Course";
Course.fields = {
    name: attr(),
}

export const orm = new ORM();
orm.register(Card, Lesson, Course);

export default orm;