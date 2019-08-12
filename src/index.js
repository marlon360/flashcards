import React from 'react';
import ReactDOM from 'react-dom';
import './css/tailwind.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import CoursePage from './app/pages/course.page';
import LessonPage from './app/pages/lesson.page';
import CardsPage from './app/pages/cards.page';

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={CoursePage} />
            <Route path="/courses" component={CoursePage} />
            <Route path="/course/:course" component={LessonPage} />
            <Route path="/cards" component={CardsPage} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
