import React from 'react';
import '../css/tailwind.css';
import Course from './components/course.component';
import Lesson from './components/lesson.component';
import CoursePage from './pages/course.page';

function App() {
  return (
    <div className="bg-gray-100">
      <CoursePage></CoursePage>
    </div>
  );
}

export default App;
