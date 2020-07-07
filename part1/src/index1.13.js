import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {  
  return (
  <button onClick={props.handleClick}>{props.text}</button>
  )
}

const random_function = (max) => {
  return Math.floor(Math.random() * max)
}


const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0})
  
  const sum_vote = (selected, points) => {
    const points_copy = {...points}
    // increment the property 2 value by one
    points_copy[selected] += 1 
    setPoints(points_copy)
  }

  return (
    <div>      
      <p>{props.anecdotes[selected]}</p>
      <p>has {points[selected]}.</p>
      <Button handleClick={() => { sum_vote(selected, points)}} text="Vote"/>
      <Button handleClick={() => { setSelected(random_function(6))}} text="Next Anecdote"/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes}/>,
  document.getElementById('root')
)