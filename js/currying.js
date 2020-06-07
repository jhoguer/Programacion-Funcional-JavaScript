// const buildSum = a => b => a + b;
// const tag = t => content => `<${t}>${content}</${t}>`

// function SumThreenumber(a, b, c) {
//   return a + b + c
// }

// console.log(SumThreenumber(1, 2, 3))

function SumThreenumber(a) {
  return function(b) {
    return function(c) {
      return a + b + c
    }
  }
}

// const pri = SumThreenumber(1)
// const sec = pri(2)
// const fin = sec(3)

console.log(SumThreenumber(1)(2)(3)) // 6
// console.log(fin) // 6