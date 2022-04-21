// document.querySelector('.btn').addEventListener('click',function(e){

//     console.log('Hello World')

//     e.preventDefault();
// });


document.querySelector('.btn').addEventListener('click',onclick);

function onclick(e){
    // console.log('Clicked')

    e.preventDefault();

    let val;
    val=e;

    // Event Target element

    val=e.target;
    val=e.target.id;
    val=e.target.className;
    val=e.target.classList;


    // Event Type
    val=e.type;


    // timeStamp
    val=e.timeStamp

    // coords events relative to the windows
    // val=e.clientY;
    // val=e.clientX;


    // coords events relative to the element
    // val=e.offsetY;
    val=e.offsetX;


    console.log(val);





}