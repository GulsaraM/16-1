class Dog {
    constructor(weight, height, color) {
        this.weight = weight;
        this.height = height;
        this.color = color;
    }
}

const hatico = new Dog (
    80,
    150,
    "violet"
)

console.log(hatico)

// class Animal {
//     constructor (type, gender, color, voiceText) {
//         this.type = type;
//         this.gender = gender;
//         this.color = color;
//         this.voiceText = voiceText;
//     }
// }
//
// class Cat extends Animal {
//     constructor(type, gender, color, voiceText, name, purposeText) {
//         super(type, gender, color, voiceText);
//         this.name = name;
//         this.purposeText = purposeText;
//     }
// }
//
// const Crookshanks = new Cat (
//     'domestic',
//     'male',
//     'orange',
//     'myauu',
//     'Crookshanks',
//     'security'
// )
//
// console.log(Crookshanks)

function Animal (type, gender, color, voiceText, name, purposeText) {
    console.log(type, gender, color, voiceText, name, purposeText)
}
Animal('domestic', 'male', 'orange', 'myauu', 'Crookshanks', 'security')

class Building {
    constructor (type, floor, color, window, door) {
        this.type = type;
        this.floor = floor;
        this.color = color;
        this.vindow = window;
        this.door = door;
    }
}

class School extends Building {
    constructor(type, floor, color, window, door, classroom, sport_section, director, service, teacher) {
        super(type, floor, color, window, door);
        this.classroom = classroom;
        this.sport_section = sport_section;
        this.director = director;
        this.service = service;
        this.teacher = teacher;
    }
}

const MBOU = new School (
    'public',
    '4',
    'grey',
    'conventional',
    'conventional',
    '600',
    '1',
    '1',
    'state',
    '30'
)

console.log(MBOU)

class House extends Building {
    constructor(type, floor, color, window, door, heating, water_supply, gas, service, elevator) {
        super(type, floor, color, window, door);
        this.heating = heating;
        this.water_supply = water_supply;
        this.gas = gas;
        this.service = service;
        this.elevator = elevator;
    }
}

const Home = new House (
    'private',
    '10',
    'grey',
    'conventional',
    'conventional',
    'central',
    'central',
    'central',
    'private',
    '1'
)

console.log(Home)