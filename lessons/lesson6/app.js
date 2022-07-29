const first_name = "jack"
const last_name = "barboro"

console.log("Full_name:" + ' ' + first_name + ' ' + last_name)

console.log(`Full_name: ${first_name} ${last_name}`)

const getFullName = (user) => {
    // return "First Name: " + user.first_name + "\n" + "Last Name: " + user.last_name
    return `First Name: ${user.first_name}\nLast Name: ${user.last_name}`
}

const user = {
    first_name: "Atay",
    last_name: "Bekturov"
}
console.log(getFullName(user))

const mass = [1, 2, 3, 4, 5]
const mass2 = [... mass]
console.log(mass2)

const obj = {
    username: "beks",
    age: 18,
    last_name: "Bekmamatov",
    full_name: "Beks Bekmamatov"
}

const obj2 = {...obj}
console.log(obj2)

const props2 = {
    onSubmit: () => {
        console.log("submit")
},
    data: [
        {
            key: 'value'
        },
        {
            key: 'value'
        },
        {
            key: 'value'
        }
    ]
}

const {data, onSubmit} = props2;
console.log(data)
onSubmit()