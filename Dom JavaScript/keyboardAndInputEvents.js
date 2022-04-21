const form=document.querySelector('.form');
const taskInput=document.getElementById('parent');


taskInput.addEventListener('keydoen',runEvent);

// form.addEventListener('submit',runEvent);

function runEvent(e){
    console.log(`Event Type:${e.type}`);


    console.log(taskInput);
    e.preventDefault();
}