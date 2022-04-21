const clearBtn=document.querySelector('.btn');
const card=document.querySelector('.parent');
const heading=document.querySelector('.tast-tile');


// click

// clearBtn.addEventListener('click',runEvent);

// mouse bdouble Click
// clearBtn.addEventListener('dblclick',runEvent);

// mousedown
// clearBtn.addEventListener('mousedown',runEvent);

// mouseup
// clearBtn.addEventListener('mouseup',runEvent);

// mouseenter
// card.addEventListener('mouseenter',runEvent);

//mouseleave
// card.addEventListener('mouseleave',runEvent);

// //mouseover
// card.addEventListener('mouseover',runEvent);

//mouseout
// card.addEventListener('mouseout',runEvent);


//mousemove
card.addEventListener('mousemove',runEvent);





// Event Handler
function runEvent(e){
    console.log(`Event Type:${e.type}`);

    heading.textContent=`MouseX:${e.offsetX} MouseY:${e.offsetY}`;

    document.body.style.background=`rgb(${e.offsetX},${e.offsetY},40)`

}

