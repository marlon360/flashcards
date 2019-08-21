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
  ]);

  const [selectedCourse, setSelectedCourse] = useState({});

  const onNewCourse = (courseName) => {
    setCourses([...courses, {
      name: courseName,
      lessons: []
    }])
  }

  const onSelectedCourse = (course) => {
    setSelectedCourse(course);
  };
  
  return (
    <Router>
        <div>
            <Route exact path="/" render={(props) => <CoursePage {...props} courses={courses} onSelectedCourse={onSelectedCourse}/>} />
            <Route path="/courses" render={(props) => <CoursePage {...props} courses={courses} onSelectedCourse={onSelectedCourse}/> } />
            <Route path="/new/course" render={(props) => <NewCoursePage {...props} onNewCourse={onNewCourse}/>} />
            <Route path="/course/:course" render={(props) => <LessonPage {...props} course={selectedCourse} />} />
            <Route path="/cards" component={CardsPage} />
        </div>
    </Router>
  );
}

export default App;
