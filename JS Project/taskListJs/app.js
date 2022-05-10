// Define UI Variables

const form=document.querySelector('#task-form')//line 19 (grab to use enter some element)
const taskList=document.querySelector('.collection') // line 34 (when we eneter something in tast and display in ui (UL input )
const clearBtn=document.querySelector('.clear-tasks')// line 35 (use to clear the enter element)
const filter=document.querySelector('#filter')// line 31 filter the element in UL tag
const  taskInput=document.querySelector('#task') // line 21 (input tag for task)

// load All EventListeners
loadEventListeners();

// load all event listeners
function loadEventListeners(){
    // Dom Load Event
    document.addEventListener('DOMContentLoaded',getTasks);
    // add task event
    form.addEventListener('submit',addTask);
    // remove task event
    taskList.addEventListener('click',removeTask);
    // clear Task Event
    clearBtn.addEventListener('click',clearTask);
    //filter task Input
    filter.addEventListener('keyup',filterTask);

    // DOM load Event (localStorage)
    document.addEventListener('DomContentLoaded',getTasks);

}

// Get Task from LS
function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks')=== null){
        task=[]
    }
    else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task){
         // Create Li Element
    const li=document.createElement('li');
    //give class to li
    li.className='collection-item';
    // create a text node and append to li
    li.appendChild(document.createTextNode(task));
    // create a delete item
    const link=document.createElement('a');
    // add class
    link.className="delete-item secondary-content";
    // add icon in html
    link.innerHTML='<i class="fa fa-remove"></i>';
    // append a link to li

    li.appendChild(link);

    // apend li to ul

    taskList.appendChild(li);

    });
}


// Add Task
function addTask(e){
    if(taskInput.value===''){
        alert('Enter A Task');
    }

    // Create Li Element
    const li=document.createElement('li');
    //give class to li
    li.className='collection-item';
    // create a text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // create a delete item
    const link=document.createElement('a');
    // add class
    link.className="delete-item secondary-content";
    // add icon in html
    link.innerHTML='<i class="fa fa-remove"></i>';
    // append a link to li

    li.appendChild(link);

    // apend li to ul

    taskList.appendChild(li);

    // console.log(li)


    // Store in Local Storage

    storeTaskInLocalStorage(taskInput.value);


    // clear Input and console
    taskInput.value="";

    e.preventDefault();

}

// Store Task in LS

function storeTaskInLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks')=== null){
        task=[]
    }
    else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);

    localStorage.setItem('tasks',JSON.stringify(tasks));
}




///  Remove Task by icon

function removeTask(e){
    if(e.target.parentElement.classList.contains("delete-item")){
        if(confirm('Are You Sure?')){
        e.target.parentElement.parentElement.remove();
    // console.log(e.target);


    // Remove From LocalSorage
    removeTaskFromLocalStorage(e.target.parentElement.parentElement)
  }
}
}


   // Remove From LocalSorage
   function removeTaskFromLocalStorage(taskItem){
    let tasks;
    if(localStorage.getItem('tasks')=== null){
        tasks=[]
    }
    else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task,index){
        if(taskItem.textContent===task){
            tasks.splice(index,1)
        }

    });

    localStorage.setItem('tasks',JSON.stringify(tasks));

   }


 
///  Remove Task by btn
function clearTask(){

    // taskList.innerHTML=" ";

    // faster Way
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }

    // clear LS By Btn

    clearTaskFromLocalStorage()

}

function clearTaskFromLocalStorage(){
    localStorage.clear();
}

// filter Task
function filterTask(e){
    const text=e.target.value.toLowerCase();
    // console.log(text)
    
    document.querySelectorAll('.collection-item').forEach(function(task){
        const item=task.firstChild.textContent;

        if(item.toLowerCase().indexOf(text)!=-1){
            task.style.display='block';
        }
        else{
            task.style.display='none';
        }
    });

}






