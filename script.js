function addtask(){
     const newTask=document.createElement('li')
     const taskList=document.getElementById('tasklist')
     taskList.appendChild(newTask)
     newTask.textContent=document.getElementById('inputTask').value
     document.getElementById('inputTask').value=""
     deletetask(newTask)
    
} 

function deletetask(newTask){
     const deletebtn=document.createElement('button')
     deletebtn.textContent ="delete"
     newTask.appendChild(deletebtn)
     deletebtn.onclick = function() {
          newTask.remove()
     }
}