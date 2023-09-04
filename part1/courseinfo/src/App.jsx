import { useState } from "react";

const App = (props) => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)

  const course = 'Half Stack application development'
  const parts = [
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
  ];




  return (

    
    <div>
      <div>{counter}</div> 
      <button onClick={increaseByOne}>        plus
      </button>
      <button onClick={setToZero}>        zero
      </button>
      <Header course={course}/>

      <Content 
        parts = {parts} 
        />

      <Totalparts  parts={parts} />

    </div>
  )
}


const Header = (pars) => {
  return(
  <h1>{pars.course}</h1>
  )
}



const Content = (pars) => {
  const parts = pars.parts
  
  return(<div>
            <Part part={parts[0]} 
            />
            <Part part={parts[1]} 
            /><Part part={parts[2]} 
            />
           
          </div>
  )
  
}


const Part = (pars) =>{

    return(
      <p>
      {pars.part.name} {pars.part.exercises}
    </p>
    )
}



const Totalparts = ({parts}) => {
  
  return <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
}

export default App