const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  const name = "Peter"
  const age = 45
  const friends = [
    {name: "peter", age: 4},
    {name: "Link", age: 31}
  ]
  const friends1 = [ 'Peter', 'Maya']

  console.log(now, a+b)
  return (
    <div>
      <p>Greetings</p>

      <Hello name={"George-"+name} age={age}/>

      <Hello name = "Maya" age ={32+2} />
      <p>{friends[1].name +" "+ friends[1].age}</p>

      <Hello />

      <p>{a} plus {b} is {a+b}</p>
      <p>{friends1}</p>

    </div>
  )
}

const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <button>Hello {props.name}, your age is  {props.age}!</button>
      <p>a</p>
    </div>
  )
}

export default App