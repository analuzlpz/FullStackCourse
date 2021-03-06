import ReactDOM from 'react-dom'
import React, {useState} from 'react'

const Statistics = (props) => {
  let all = props.good + props.neutral + props.bad
  let average = all === 0 ? 0 : (props.good + props.bad * -1)/all
  let positive = all === 0? 0 : props.good * 100 / all

  if (all === 0)
  return (
    <div>
      <p>No feedback given.</p>
  </div>
    )
  else
  return (
  <div>
    <h1>Statistics</h1>
    <p>Good {props.good}</p>
    <p>Neutral {props.neutral}</p>
    <p>Bad {props.bad}</p>
    <p>All {all}</p>
    <p>Average {average}</p>
    <p>Positive {positive}</p>
</div>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <div>
        <h1>Give feedback</h1>
        <button onClick={() => setGood(good + 1)}>Good</button>
        <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
        <button onClick={() => setBad(bad + 1)}>Bad</button>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)