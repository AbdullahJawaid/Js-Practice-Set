// Function Declaration

// function greet(){
//     console.log("Hello");
// }

// function greet(){
//     return "HEllo";
// }
//   console.log( greet());

// function greet(firstName,lastName){
//     return 'Hello ' + firstName+" "+lastName;
// }
// console.log( greet( 'Abdullah','Jawaid'));


// function greet(firstName,lastName){
//     if(typeof firstName=== 'undefined'){
//         firstName='Abdullah'
//     }
//     if(typeof lastName=== 'undefined'){
//         lastName='Jawaid'
//     }
//     return 'Hello ' + firstName+" "+lastName;
// }
// console.log( greet());



// Function Expression

// const square=function(){
//     console.log("Hello")
// }
// square();


// const square=function(x=){
//     return x+x;
// }
// console.log(square(6));

// const square=function(x=3){
//     return x+x;
// };
// console.log(square());



// Immidatatley Invokable function expression-IIFEs

// (function(){
//     console.log("IIFE Ran...")
// })();

// (function(name){
//     console.log(`Hello ${name}`);
// })('Abdullah');


// Property Methods

const todo={
    add: function(){
        console.log('Add Todo...')
    },
    edit:function(id){
        console.log(`Add Todo... ${id}`);
        
    }
}
todo.delete=function(){
    console.log('delete Todo...');

}

todo.add();
todo.edit(22);
todo.delete();