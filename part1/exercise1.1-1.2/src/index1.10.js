import ReactDOM from 'react-dom'
import React, {useState} from 'react'

const Button = (props) => {  
  return (
  <button onClick={props.handleClick}>{props.text}</button>
  )
}

const Statistics = (props) => {
   return (
  <div>
    <p>{props.text} {props.value}</p>
</div>
  )
}

const average = (good, neutral, bad) =>{
  if (all(good, neutral, bad) === 0)
    return 0
    else
    return (good + neutral * 0 + bad * -1)/all(good, neutral, bad)
  }

const positive = (good, neutral, bad) =>{
  if (all(good, neutral, bad) === 0)
  return 0 
  else
  return good * 100 / all(good, neutral, bad)
}

const all = (good, neutral, bad) =>{
  return good + neutral + bad
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
        <Button handleClick={() => setGood(good + 1)} text="Good"/>
        <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral"/>
        <Button handleClick={() => setBad(bad + 1)} text="Bad"/>
      </div>
      <h1>Statistics</h1>
      <Statistics text="Good" value={good}/>
      <Statistics text="Neutral" value={neutral}/>
      <Statistics text="bad" value={bad}/>
      <Statistics text="All" value={all(good, neutral, bad)}/>
      <Statistics text="Average" value={average(good, neutral, bad)}/>
      <Statistics text="Positive" value={positive(good, neutral, bad)}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)