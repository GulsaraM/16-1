// const array = [
//     {
//         username:'Jack',
//         full_name:'Jack Barboro'
//     },
//     {
//         username:'Jack',
//         full_name:'Jack Barboro'
//     },
//     {
//         username:'Jack',
//         full_name:'Jack Barboro'
//     },
//     {
//         username:'Jack',
//         full_name:'Jack Barboro'
//     },
//     {
//         username:'Jack',
//         full_name:'Jack Barboro'
//     },
// ]
//
// for(let i=0; i < array.length; i++){
//     console.log(array[i])
//     if(i===2){
//         break
//     }
// }

// for(let user of array){
//     console.log(user)
// }
// const obj = {
//     key1:'b1',
//     key2:'b2',
//     key3:'b3',
//     key4:'b4',
//     key5:'b5',
//     key6:'b6',
//     key7:'b7',
// }
// for(let key in obj) {
//     console.log(obj[key])
// }

// let i = 0;
//
// while(i < 5){
//     console.log("Hello")
//     i++
// }

const users = [
  {
    username: 'Jack',
    salary: 500
  },
  {
    username: 'John',
    salary: 5000
  },
  {
    username: 'Beka',
    salary: 10000
  }
]
const filteredUsers = users.filter(user => user.salary > 500)
console.log(filteredUsers)
// for(let user of users){
//   if(user.salary>500)
//     console.log(user)
// }


let lines = 7;
let str = " ";
let star = "*";
for (let i = 0; i < lines; i++) {
    str += star;
    console.log(str);
}


for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

const mass = [[[[[[[[[[[[0]]]]]]]]]]]]
console.log(mass.indexOf(0));