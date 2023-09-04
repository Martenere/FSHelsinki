const arr = [1,5,3,2]

const [is, bein, ...rest] = arr

const a = arr.map((value, index, array) => "<li>"+ value +"</li>")
console.log(a)

console.log(is)