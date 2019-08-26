import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import CoursePage from './pages/course.page';
import LessonPage from './pages/lesson.page';
import CardsPage from './pages/cards.page';
import NewCoursePage from './pages/new-course.page';
import NewLessonPage from './pages/new-lesson.page';
import EditCardPage from './pages/edit-card.page';
import CardListPage from './pages/card-list.page';

function App() {
  
  return (
    <Router>
        <div>
            <Route exact path="/" render={(props) => <CoursePage {...props}/>} />
            <Route path="/courses" render={(props) => <CoursePage {...props}/> } />
            <Route path="/new/course" render={(props) => <NewCoursePage {...props}/>} />
            <Route path="/course/:id/new" render={(props) => <NewLessonPage {...props}/>} />
            <Route exact path="/course/:id" render={(props) => <LessonPage {...props}/>} />
            <Route path="/course/:courseid/:lessonid/cards" component={CardListPage} />
            <Route path="/cards/:courseid/:lessonid/:cardid/edit" component={EditCardPage} />
            <Route exact path="/cards/:courseid/:lessonid" component={CardsPage} />
        </div>
    </Router>
  );
}

export default App;
