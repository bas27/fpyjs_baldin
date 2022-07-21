const numbers = [1, 2, 3, 4]
const max = numbers.reduce((number, max) => number > max ? number : max)
const squares = numbers.map((number) => number*number)
const even = numbers.filter((number) => number % 2 == 0)

numbers.sort((number1, number2) => number2 - number1)
console.log(numbers)

//---

const index = {}

numbers.forEach((number, index) => {
    index[number] = index
    console.log(index)
})
