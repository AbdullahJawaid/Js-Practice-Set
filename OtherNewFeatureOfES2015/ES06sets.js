// Sets -Store Some Unique values of any type

const set1=new Set();

// add values to set
set1.add(100);
set1.add('Hello World');
set1.add({name:'XYZ'});
set1.add(true);
set1.add(100);

// console.log(set1)

// const set2=new Set([12,true,'string']);
// console.log(set2)

//Get count
// console.log(set1.size);

//check for values
// console.log(set1.has(200))//return false b/c is not there
// console.log(set1.has(100))//return true b/c is  there
// console.log(set1.has(50+50));
// console.log(set1.has({name:'XYZ'}));


// Delete From sets
// set1.delete(100);
// console.log(set1)


// Iterating Throungh Sets

// for ...of
// for (let item of set1){
//     console.log(item);
// }


    // for ...EACH

// set1.forEach((value)=>{

//     console.log(value);
// });




//// Convert Set Into Array
const setArr=Array.from(set1);
console.log(setArr)