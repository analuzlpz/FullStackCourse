import React from 'react'
import ReactDOM from 'react-dom'

const Header = (prop) => {
  return (
      <h1>{prop.course}</h1>
  )
}

const Part = (prop) => {
  return (
      <p>
        {prop.title} {prop.exercises}
      </p>    
  )
}

const Content = (prop) => {
  return (
    <div>
      <Part title={prop.part1} exercises={prop.exercises1}/>
      <Part title={prop.part2} exercises={prop.exercises2}/>
      <Part title={prop.part3} exercises={prop.exercises3}/>
    </div>
  )
}

const Total = (prop) => {
  return (
      <p>Number of exercises {prop.exercises}</p>
  )
}

const App = () => {
  // const-definitions
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
      <Total exercises={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))