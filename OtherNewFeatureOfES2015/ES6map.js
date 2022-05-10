const map1=new Map();


// set Key
const key1='Some String',
      key2={},
      key3=function(){};


//Set map value by Key

map1.set(key1,'Value of Key1');
map1.set(key2,'Value of Key2');
map1.set(key3,'Value of Key3');


// GEt  values by kEys
// console.log(map1.get(key1),map1.get(key2),map1.get(key3));
//count values
// console.log(map1.size);

// Iterating Maps

// loop using for of to get keys and values

// for (let [key,value] of map1 ){
//     console.log(`${key}=${value}`);
    
// }


// Iterate only Keys

// for (let key of map1.keys()){
//     console.log(key);
    
// }

// Iterate only Keys

// for (let value of map1.values()){
//     console.log(value);
    
//}

// Loop with ForEach
// map1.forEach(function(key ,value){
//     console.log(`${key}=${value}`);
// });


// Convert To Array

// Create Array to get keys and values
const keyValArr=Array.from(map1);
console.log(keyValArr);



// Array only values

const valArr=Array.from(map1.values());
console.log(valArr);

// Array only Keys

const keyArr=Array.from(map1.keys());
console.log(keyArr);