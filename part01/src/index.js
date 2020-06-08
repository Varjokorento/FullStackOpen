import React from 'react'
import ReactDOM from 'react-dom'
import {Content} from './components/Content';
import Header from './components/Header';
import Total from './components/Total';

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const partContent = [
    {partTitle: part1, partExercises: exercises1},
    {partTitle: part2, partExercises: exercises2},
    {partTitle: part3, partExercises: exercises3}
  ]
  
  return (
    <div>
      <Header course={course} />
      <Content partArray = {partContent} />
      <Total total={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))