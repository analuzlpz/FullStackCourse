import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}

const Part = (prop) => {
  return (
      <p>
        {prop.title} {prop.exercises}
      </p>    
  )
}

const Content = (prop) => {
  console.log(prop)
  return (
    <div>
      <Part title={prop.parts[0].name} exercises={prop.parts[0].exercises}/>
      <Part title={prop.parts[1].name} exercises={prop.parts[1].exercises}/>
      <Part title={prop.parts[2].name} exercises={prop.parts[2].exercises}/>
    </div>
  )
}

const Total = (prop) => {
  return (
      <p>Number of exercises {prop.parts[0].exercises + prop.parts[1].exercises + prop.parts[2].exercises}</p>
  )
}

const App = () => {
  // const-definitions
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))