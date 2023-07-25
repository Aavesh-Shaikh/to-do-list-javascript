let userInput = document.getElementById("user_input")
let addBtn = document.getElementById("addBtn")
let userList = document.getElementById("list_container")

addBtn.addEventListener("click" , function(){
    var userTask = document.createElement("li")
    // var deleteTask = document.createElement("button")
    userTask.classList.add("paragraph_text")
    // deleteTask.classList.add("deleteBtn")
    userTask.innerText = userInput.value
    // deleteTask.innerText = "X"
    userList.appendChild(userTask)
    // userList.appendChild(deleteTask)
    userInput.value = "";

    userTask.addEventListener("click" , function(){
        userTask.style.textDecoration = "line-through"
    })
    userTask.addEventListener("dblclick" , function(){
        userList.removeChild(userTask)
    })

})