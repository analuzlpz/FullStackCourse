import React from 'react'
import ReactDOM from 'react-dom'

const Header = (prop) => {
  return (
      <h1>{prop.course}</h1>
  )
}

const Content = (prop) => {
  return (
      <p> {prop.title} {prop.exercises} </p>
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
      <Content title={part1} exercises={exercises1} />
	  <Content title={part2} exercises={exercises2} />
	  <Content title={part3} exercises={exercises3} />
      <Total exercises={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))