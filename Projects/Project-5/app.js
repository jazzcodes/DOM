const addTaskBtn=document.getElementById('add');
const taskContainer=document.getElementById('container');
const inputTask=document.getElementById('todo-input');

addTaskBtn.addEventListener("click", function()

{
    let task=document.createElement('div');
    task.classList.add('task');

    let li=document.createElement('li');
    li.innerText=`${inputTask.value}`;
    task.appendChild(li);
    console.log("clicked");
    console.log(li.innerText);


    if(inputTask.value==="")
    {
        alert("Please enter a task");
    }
    else{
        taskContainer.appendChild(task);
    }

    let checkButton=document.createElement('button');
    checkButton.innerHTML=`<i class="fa fa-check"></i>`;
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);

    let deleteButton=document.createElement('button');
    deleteButton.innerHTML=`<i class="fa fa-trash"></i>`;
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);

    inputTask.value="";

    checkButton.addEventListener("click", function()
    {
        checkButton.parentElement.style.textDecoration="line-through";
    });

    deleteButton.addEventListener("click", function()
    {
       deleteButton.parentElement.remove();
    });
});

inputTask.addEventListener("keypress", function(event)
{
   if(event.key==="Enter")
   {
    event.preventDefault();
    addTaskBtn.click();
   }
});