import React from 'react';
import '../css/tailwind.css';
import Course from './components/course.component';

function App() {
  return (
    <div className="bg-gray-500">
      <div className="bg-gray-200 min-h-screen p-4 flex items-center justify-center">
        <Course></Course>
      </div>
    </div>
  );
}

export default App;
