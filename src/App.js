import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import List from './List'
import Total from './Total'

function App() {
const [total, setTotal] = useState(0)

useEffect(()=>{
  
    let exercises = course.parts.map(part=>part.exercises)
    let totalExercises = exercises.reduce(function(a, b) { return a + b; }, 0);
    console.log(totalExercises)
    setTotal(totalExercises);
  

},[])

  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }

      ,
      {
        name: 'Redux',
        exercises:11,
        id: 4
      }


    ]
  }
 


  return (
    <div className="App">
    <List course={course.parts} header={course.name}/>
    <Total total={total}/>
    </div>
  );
}

export default App;
