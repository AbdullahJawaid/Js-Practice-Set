// if And Else

const id=100;

// Equal To
// if(id==100){
//     console.log("Correct");
// }
// else{
//     console.log("InCorrect");

// }

// // NotEqual To
// if(id!=100){
//     console.log("Correct");
// }
// else{
//     console.log("InCorrect");

// }

// // Equal To value & type
// if(id===100){
//     console.log("Correct");
// }
// else{
//     console.log("InCorrect");

// }

// if(id!==100){
//     console.log("Correct");
// }
// else{
//     console.log("InCorrect");

// }

// test id Undefined
// if(typeof id!=='undefined'){
//     console.log(`The ID IS ${id}`);
// }
// else{
//     console.log("no id");

// }

// Greater Than and Less Than

// if(id>=99){
//     console.log("Correct");
// }
// else{
//     console.log("InCorrect");
// }
// if(id<=99){
//     console.log("Correct");
// }
// else{
//     console.log("InCorrect");
// }


// else if

// const collor='yellow'

// if(collor=== 'red'){
//       console.log("Collor is red");

// }
// else if(collor=== 'blue'){
//     console.log("Collor is blue");

// }else{
//     console.log("Collor is not present");

// }

// Logical Operators

// And Operator
// both condition is true

const name='Abdullah'
const age=20;

if(age> 0 && age<12){
    console.log(`${name} is a child`);
}else if(age>=13 && age<=19){
    console.log(`${name} is a teenager`);
}else{
    console.log(`${name} is a adult`);

}

// OR Operator
// one condition is true
if(age <16 || age>65){
    console.log(`${name} cannot run in race`);}
    else{
        console.log(`${name} is registered for the race`);
 
    }



// type operator
console.log(id===100? 'Correct':'InCorrect')

// Same Code
// if(id==100){
//     console.log("Correct");
// }
// else{
//     console.log("InCorrect");

// }
