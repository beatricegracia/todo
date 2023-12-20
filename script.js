const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")
const addButton = document.getElementById("add-button")

//ngetrigger keyboard enter as onclick button
inputBox.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        addButton.click();
    }
})

//if button onclick, task added aka li nya ditambah
function addTask() {
    if(inputBox.value === '') {
        alert("You can write your task first :)");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = ''
    saveData()
}

//ngeliat dari listcontainer, kalo li di listcontainer di click artinya nambah class "checked" ke li tersebut, kalo span di listcontainer di click artinya ngeremove parent element (si li) dari span tersebut
listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData()
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove() ;
        saveData()
    }
}, false)

//save task yang ada di listcontainer ke local storage 
function saveData() {
    localStorage.setItem("todoData", listContainer.innerHTML)
}

//ngenampilin task yang udah disimpan di localstorage balik ke listcontainer setiap new render 
function showTask() {
    listContainer.innerHTML = localStorage.getItem("todoData")
}

showTask()