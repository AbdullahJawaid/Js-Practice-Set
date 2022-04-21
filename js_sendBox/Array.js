// Create Some Arrays

const numbers=[20,12,40,78,100,56,60,88,1,5,76]
const numbers1=[10,4,6,8,11,90]
const fruit=["Apple",'Banana','Mango','Orange']

const mixed=[22,'Abdullah',true,undefined,null,{a:1,b:2},new Date()];

let val;

// console.log(mixed);
// console.log(numbers);
// console.log(numbers1);
// console.log(fruit);

// Get array
// val=numbers.length;

// //check if is array
// val=Array.isArray(numbers)


// //get single value
// val=numbers[3];

// // insert into array
// numbers[5]=109;

// // find index of value
// val=numbers.indexOf(100);

// //Mutating Arrays

// // Add on to end
// numbers.push(250)
// // Add on to first
// numbers.unshift(112)
// // take of from end
// numbers.pop();
// // take of from front
// numbers.shift();

// Splice values
// numbers.splice(1,3);

//reverse
// numbers.reverse();

//concatenate array
val=numbers.concat(numbers1);

//Sorting
// val=fruit.sort();
val=numbers.sort();

// use compare function to sort array

val=numbers.sort(function(x,y){
    return x-y;
});

// reverse sort

val=numbers.sort(function(x,y){
    return y-x;
});

// find

// function under50(num){
//     return num<50;
// }
// val=numbers.find(under50);

function over50(num){
    return num > 50;
}
val=numbers.find(over50);






 console.log(numbers);

console.log(val);