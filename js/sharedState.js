const a = {
  value: 2
}

const addOne = () => a.value += 1

const timesTow = () => a.value *= 2

addOne()
timesTow()


console.log(a.value)  // 6

timesTow()
addOne()

console.log(a.value) // 5


////////////////////////////
const b = {
  value: 2
}

const addOne1 = b => Object.assign({}, b, { value: b.value + 1 })

const timesTow1 = b => Object.assign({}, b, { value: b.value * 2 })

addOne1(b)
timesTow1(b)

console.log(addOne1(timesTow1(b)))

console.log(b.value)

  // var learningPath = 'Backend';

  // const PlatziMaster = () => {
  //   console.log('Platziiii', learningPath);
  //   const Student = () => {
  //     console.log('LearningPath', learningPath);
  //   }
  //   Student();
  //   var learningPath = 'Frontend'
  //   // return;

  // }

  // PlatziMaster();
  // // function PlatziMaster() {
  // //   Student();
  // //   var learningPath = 'Frontend'
  // //   return;

  // //   function Student() {
  // //     console.log(learningPath);
  // //   }
  // // }

  // // PlatziMaster();