const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function AddTask() {
    if (inputBox.value === '') {
        alert("You must Write something");
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        listContainer.append(li);

        //delete task
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; //cross icon
        li.appendChild(span);
    }
    //clearing the input value from searcg bar
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); //parent element ie LI will be removed
        saveData();
    }
},false);


//To store data in browser's local storage
function saveData() {
    localStorage.setItem("data",listContainer.innerHTML);
}

//To display data when we open the website
function display() {
    listContainer.innerHTML = localStorage.getItem("data");
}
display();