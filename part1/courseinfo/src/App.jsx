const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content 
        part1 ={part1}part2 ={part2}part3 ={part3} 
        exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />

      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>

    </div>
  )
}


const Header = (pars) => {
  return(
  <h1>{pars.course}</h1>
  )
}

const Content = (pars) => {

  return(<div>
            <Part part={pars.part1} exercises={pars.exercises1} />
            <Part part={pars.part2} exercises={pars.exercises2} />
            <Part part={pars.part3} exercises={pars.exercises3} />
          </div>
  )
  
}
const Part = (pars) =>{
    return(
      <p>
      {pars.part} {pars.exercises}
    </p>
    )
}

const Total = (pars) => {
  
  return <p>Number of exercises {pars.exercises1 + pars.exercises2 + pars.exercises3}</p>
}

export default App