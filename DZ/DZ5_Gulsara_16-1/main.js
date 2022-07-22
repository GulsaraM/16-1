const list = [

]

const addButton = document.getElementById("button");
const input = document.getElementById("input")

function render() {
    const mainDiv = document.createElement("div");
    mainDiv.setAttribute('class', 'list')

    for(let i = 0; i < list.length; i++){
        const div = document.createElement('div');
        div.setAttribute("class", "todoBlock");
        const p = document.createElement("p");
        p.innerText = list[i].text;
        div.append(p)

        const actions = document.createElement("div")
        actions.setAttribute("class", "actions");
        const changeButton = document.createElement("button")
        changeButton.setAttribute("class", "change")
        changeButton.innerText = "change";

        changeButton.onclick = () => {
            const change = prompt("На какое слово желаете поменять текущее слово?")
            list[i].text = change;
            render()
        }

        const deleteButton = document.createElement("button")
        deleteButton.setAttribute('class', 'delete')
        deleteButton.innerText = "delete";

        deleteButton.onclick = () => {
            document.querySelector('.todoBlock').remove()
        }

        actions.append(changeButton, deleteButton);
        div.append(actions);
        mainDiv.append(div)
    }
    console.log(mainDiv)

    const form = document.querySelector('.form');
    document.querySelector('.list').remove()
    form.append(mainDiv)

}

addButton.onclick = () => {
    const obj = {
        id: list.length+1,
        text: input.value
    }
    list.push(obj);
    console.log(list)
    render()
}