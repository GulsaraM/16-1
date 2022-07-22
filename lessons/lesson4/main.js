const blocks = document.getElementsByClassName("block")
// console.log(blocks)

const block3 = document.getElementById("block3")
// console.log(block3)

// block3.className = "changeClass";

// block3.classList.add("newClass")
//
// block3.classList.remove("block")

// console.log(block3.classList)

// block3.onclick = () => {
//     block3.classList.toggle("active")
// }

const block = document.querySelector(".block")
const block2 = document.querySelectorAll(".block")
console.log(block2)

const button = document.getElementById("button")
const input = document.getElementById("input")

button.onclick = () => {
    const div = document.createElement("div")
    const deleteButton = document.createElement("button")
    deleteButton.innerText = "delete"
    deleteButton.removeEventListener("delete",)
    const changeButton = document.createElement("button")
    changeButton.innerText = "change"
    div.setAttribute("class", "block")
    div.innerText = input.value

    div.append(deleteButton, changeButton)
    document.body.append(div)
    input.value = ""
}