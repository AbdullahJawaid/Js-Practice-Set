//                            ES 05 Method


// function EventObserver(){
//     this.observers=[];
// }
// EventObserver.prototype={
//     subscribe:function(fn){
//         this.observers.push(fn);
//         console.log(`You are now subscibe to ${fn.name}`);

//     },
//      unsubscribe:function(fn){
//         this.observers=this.observers.filter(function(item){
//             if(item!==fn){
//                 return item;
//             }
//         });
//         console.log(`You are now Unsubscibe to ${fn.name}`);
//     },
//     fire:function(){
//         this.observers.forEach(function(item){
//             item.call();
//         });
//     }

// }

// const click=new EventObserver();


// //Event Listeners
// document.querySelector('.sub-ms').addEventListener('click',function () {
//     click.subscribe(getCurMilliSeconds);

// })
// document.querySelector('.unsub-ms').addEventListener('click',function () {
//     click.unsubscribe(getCurMilliSeconds);

// })
// document.querySelector('.sub-s').addEventListener('click',function () {
//     click.subscribe(getCurSeconds);

// })
// document.querySelector('.unsub-s').addEventListener('click',function () {
//     click.unsubscribe(getCurSeconds);

// })
// document.querySelector('.fire').addEventListener('click',function () {
//     click.fire();

// })

// // Click Handler
// const getCurMilliSeconds=function () {
//     console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);

// }
// const getCurSeconds=function () {
//     console.log(`Current Seconds: ${new Date().getSeconds()}`);

// }






// ES 06  Classes
class EventObserver {
    constructor() {
        this.observers = [];
    }
    subscribe(fn) {
        this.observers.push(fn);
        console.log(`You are now subscibe to ${fn.name}`);

    }
    unsubscribe(fn) {
        this.observers = this.observers.filter(function (item) {
            if (item !== fn) {
                return item;
            }
        });
        console.log(`You are now Unsubscibe to ${fn.name}`);
    }
    fire() {
        this.observers.forEach(function (item) {
            item.call();
        });
    }
}

const click=new EventObserver();


//Event Listeners
document.querySelector('.sub-ms').addEventListener('click',function () {
    click.subscribe(getCurMilliSeconds);

})
document.querySelector('.unsub-ms').addEventListener('click',function () {
    click.unsubscribe(getCurMilliSeconds);

})
document.querySelector('.sub-s').addEventListener('click',function () {
    click.subscribe(getCurSeconds);

})
document.querySelector('.unsub-s').addEventListener('click',function () {
    click.unsubscribe(getCurSeconds);

})
document.querySelector('.fire').addEventListener('click',function () {
    click.fire();

})

// Click Handler
const getCurMilliSeconds=function () {
    console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);

}
const getCurSeconds=function () {
    console.log(`Current Seconds: ${new Date().getSeconds()}`);

}
