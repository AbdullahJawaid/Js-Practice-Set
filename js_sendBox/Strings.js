const firstName='Abdullah';
const lastName='Jawaid';
const age=21;
const str="HEllo There my name is Abdullah"
const tags='Abdullah,Jawaid,Jawaid,Akhter'


let val;


val=firstName+lastName;

// Concatentation
val=firstName +' '+ lastName;


//Append

val='Abdullah ';
val += 'Jawaid'

val = 'HEllo , my name is ' + firstName + ' ' + lastName + ' and i am ' + age;



//Escaping

val ='That\'s awesome , i can\'t wait'
val ="That\'s awesome , i can\'t wait"


// length

val=firstName.length;

//concat

val=firstName.concat(' ',lastName);

//Change Case

val=firstName.toUpperCase;
val=firstName.toLowerCase;


val=firstName[2];

//indexof
val=firstName.indexOf('l');
val=firstName.lastIndexOf('l');

// charAt
val=firstName.charAt('2');
// Get last Char
val=firstName.charAt(firstName.length-1);


// substring
val=firstName.substring(0,4);

// slice

val=firstName.slice(0,5);
val=firstName.slice(-5);


// Split()

val=str.split(' ');
val=tags.split(',');

// replace

val=str.replace('Abdullah','Javed')

// includes

val=str.includes('Hi')
val=str.includes('HEllo')










console.log(val);