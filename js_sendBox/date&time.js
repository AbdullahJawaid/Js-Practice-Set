let val;

const today=new Date();
let birthday=new Date('9-10-2002 11:25:00');
birthday=new Date('July 29 2000')
birthday=new Date('9/10/2000')

val=today.getMonth();
val=today.getDate();
val=today.getDay();
val=today.getFullYear();
val=today.getHours();
val=today.getMinutes();
val=today.getSeconds();
val=today.getMilliseconds();
val=today.getTime();


birthday.setMonth(2)

// console.log(val)
// console.log(today)
console.log(birthday)