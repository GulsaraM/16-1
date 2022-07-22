// function sayHello(){
//     console.log("hello")
// }
// sayHello();

// function getFullName(user, age) {
//     if(age < 18) {
//         console.log(user.first_name, user.last_name + " " + "CLOSE")
//     } else {
//         console.log(user.first_name, user.last_name + " " + "OPEN")
//     }
// }
// const Beka = {
//     first_name: "Beka",
//     last_name: "Aydarov"
// }
//
// getFullName(Beka, 17)

// const anonym = function () {
//     console.log("text")
// }
// anonym();

// function twoMass (arr1, arr2) {
//     if(arr1.length > arr2.length) {
//         alert("arr1 > arr2")
//     } else if (arr1.length > arr2.length){
//         alert("arr1 < arr2")
//     } else {
//         alert("===")
//     }
// }
//
// const arr1 = [1212, 52314, 6457]
// const arr2 = [1212, 52314, 6457674, 467, 765]
//
// twoMass(arr1, arr2)

// function tr() {
//     let line = "*"
//     while (line.length < 7) {
//         console.log(line)
//         line = line + '*'
//     }
// }
// tr()

function twoMass (num1, num2) {
    if(num1 > num2) {
        alert("num1 > num2")
    } else if (num1 < num2){
        alert("num1 < num2")
    } else {
        alert("===")
    }
}

let num1 = 236;
let num2 = 32;

twoMass(num1, num2)

// function countChar (a) {
//     console.log(a.length)
// }
//
// const a = [64636, 765, 88765, 0]
//
// countChar(a)