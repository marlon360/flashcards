export default function bootstrap(schema) {
    // Get the empty state according to our schema.
    const state = schema.getEmptyState();

    // Begin a mutating session with that state.
    // `state` will be mutated.
    const session = schema.mutableSession(state);

    // Model classes are available as properties of the
    // Session instance.
    const { Course, Lesson, Card } = session;

    const math = Course.create({
        name: 'Mathematik'
    });

    const allg = Course.create({
        name: 'Allgemeinwissen'
    });

    // Todo's for `user`
    const kapitel1 = Lesson.create({
        name: 'Kapitel 1',
        course: math, // We could also pass ids instead of the Tag instances.
    });

    const cities = Lesson.create({
        name: 'Hauptstädte',
        course: allg, // We could also pass ids instead of the Tag instances.
    });

    Card.create({
        front: 'Was ist eine Frage?',
        back: 'Antwort 1',
        box: 1,
        lesson: kapitel1
    });
    Card.create({
        front: 'Was ist der Sinn der Menschheit?',
        back: 'Antwort 2',
        box: 1,
        lesson: kapitel1
    });
    Card.create({
        front: 'Warum ist die Banane krumm?',
        back: 'Antwort 1',
        box: 1,
        lesson: kapitel1
    });
    Card.create({
        front: 'Wie groß ist der Mond?',
        back: 'Antwort 1',
        box: 1,
        lesson: kapitel1
    });

    Card.create({
        front: 'Deutschland',
        back: 'Berlin',
        box: 1,
        lesson: cities
    });



    // Return the whole Redux initial state.
    return {
        orm: state
    };
}