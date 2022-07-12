const name = prompt("Как вас зовут?")
    alert("Hello " + name)

const arr = ["Aydana", true, false, 25]

console.log(arr.length);

const arr2 = [
    {
        key: 'value'
    },
    {
        key: 'value2'
    },
    {
        key: 'value3'
    }
]

console.log(arr2.length);

if (arr.length>arr2.length) {
    console.log(arr.length + ">" + arr2.length)
} else if (arr.length<arr2.length) {
    console.log(arr.length + "<" + arr2.length)
} else {
    console.log(arr.length + "=" + arr2.length)
}

let color = 'green';

switch (color) {
    case 'yellow':
        console.log('Wait!');
        break;
    case 'red':
        console.log('Stop!');
        break;
    case 'green':
        console.log('Go!');
        break;
}

const num = [1, 2, 3, 4, 5];
const result = num.indexOf(5);
    console.log('result ', result);