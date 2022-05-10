// create a symbol

const sym1=Symbol();
const sym2=Symbol('sym2');

// console.log(typeof sym2);

// console.log(Symbol('123') === Symbol('123'));// Always not equal

// console.log(`Hello ${sym1.toString()}`);

// Unique Objects Keys
const KEY1=Symbol();
const KEY2=Symbol('sym2');

const myobj={};
myobj[KEY1]='Prop1';
myobj[KEY2]='Prop2';
myobj.KEY3='Prop3';
myobj.KEY4='Prop4';

// console.log(myobj[KEY1]);
// console.log(myobj[KEY2]);


// symbols are not enumerable in for ... in
// for(let i in myobj){
//     console.log(`${i}: ${myobj[i]}`);
// }


// Symbols are ignored by JSON.Stringify

console.log(JSON.stringify({Key:'prop'}));
console.log(JSON.stringify({[Symbol('sym1')]:'Prop'}));