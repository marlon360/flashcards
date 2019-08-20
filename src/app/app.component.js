import React, { useState } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import CoursePage from './pages/course.page';
import LessonPage from './pages/lesson.page';
import CardsPage from './pages/cards.page';
import newCoursePage from './pages/newCourse.page';

function App() {

  const [courses, setCourses] = useState([
    {
      name: 'Mathematik',
      lessonCount: 12,
      cardCount: 23,
      progress: 67
    },
    {
      name: 'Allgemeinwissen',
      lessonCount: 20,
      cardCount: 56,
      progress: 43
    }
  ]);
  
  return (
    <Router>
        <div>
            <Route exact path="/" render={(props) => { return (<CoursePage {...props} courses={courses}/>)}} />
            <Route path="/courses" render={(props) => { return (<CoursePage {...props} courses={courses}/>)}} />
            <Route path="/new/course" component={newCoursePage} />
            <Route path="/course/:course" component={LessonPage} />
            <Route path="/cards" component={CardsPage} />
        </div>
    </Router>
  );
}

export default App;
