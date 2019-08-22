export default function bootstrap(schema) {
    // Get the empty state according to our schema.
    const state = schema.getEmptyState();

    // Begin a mutating session with that state.
    // `state` will be mutated.
    const session = schema.mutableSession(state);

    // Model classes are available as properties of the
    // Session instance.
    const { Course, Lesson, Card } = session;

    // Start by creating entities whose props are not dependent
    // on others.
    const card1 = Card.create({
        front: 'Frage 1',
        back: 'Antwort 1',
        box: 1
    });
    const card2 = Card.create({
        front: 'Frage 2',
        back: 'Antwort 2',
        box: 1
    });

    const ger = Card.create({
        front: 'Deutschland',
        back: 'Berlin',
        box: 1
    });

    // Todo's for `user`
    const kapitel1 = Lesson.create({
        name: 'Kapitel 1',
        cards: [card1, card2], // We could also pass ids instead of the Tag instances.
    });

    const cities = Lesson.create({
        name: 'Hauptstädte',
        cards: [ger], // We could also pass ids instead of the Tag instances.
    });


    // Todo's for `otherUser`
    Course.create({
        name: 'Mathematik',
        lessons: [kapitel1],
    });

    Course.create({
        name: 'Allgemeinwissen',
        lessons: [cities],
    });

    // Return the whole Redux initial state.
    return {
        orm: state
    };
}