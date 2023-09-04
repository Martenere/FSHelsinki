const App = () => {
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
  ]

  return (
    <div>
      <Header course={course}/>

      <Content 
        parts = {parts} 
        />

      {/* <Totalparts  parts={parts} /> */}

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
  console.log(pars)
  console.log(pars.name)
    return(
      <p>
      {pars.part.name} {pars.part.exercises}
    </p>
    )
}



const Total = (pars) => {
  
  return <p>Number of exercises {pars.part1.exercises + pars.part2.exercises + pars.part3.exercises}</p>
}

export default App