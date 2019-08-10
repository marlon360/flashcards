import React from 'react';
import '../css/tailwind.css';
import Course from './components/course.component';

function App() {
  return (
    <div>
      <div className="bg-gray-100 min-h-screen p-4 flex flex-col items-center justify-center">
        <Course name="Mathematik" lessons="4" cards="12" percentage="12"></Course>
        <Course gradient="blue" name="Allgemeinwissen" lessons="2" cards="38" percentage="78"></Course>
      </div>
    </div>
  );
}

export default App;
