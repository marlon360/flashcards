import React, { useState } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import CoursePage from './pages/course.page';
import LessonPage from './pages/lesson.page';
import CardsPage from './pages/cards.page';
import NewCoursePage from './pages/new-course.page';

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

  const onNewCourse = (courseName) => {
    setCourses([...courses, {
      name: courseName,
      lessonCount: 0,
      cardCount: 0,
      progress: 0
    }])
  }
  
  return (
    <Router>
        <div>
            <Route exact path="/" render={(props) => <CoursePage {...props} courses={courses}/>} />
            <Route path="/courses" render={(props) => <CoursePage {...props} courses={courses}/> } />
            <Route path="/new/course" render={(props) => <NewCoursePage {...props} onNewCourse={onNewCourse}/>} />
            <Route path="/course/:course" component={LessonPage} />
            <Route path="/cards" component={CardsPage} />
        </div>
    </Router>
  );
}

export default App;
