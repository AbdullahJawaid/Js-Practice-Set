const color="red";
switch(color){
    case 'red':
        console.log("color Is Red");
        break;
        
    case 'blue':
        console.log("color Is blue");
        break;
    default:
        console.log("color Is not present");
        break;

}

let day;

switch(new Date().getDay()){
    case 0:
        day='Sunday';
        break;
    case 1:
         day='Monday';
         break;
    case 2:
        day='Tuesday';
        break;
    case 3:
        day='Wednessday';
        break;
    case 4:
        day='Thursday';
        break;
    case 5:
         day='Friday';
        break;
    case 6:
        day='Saturday';
        break;
   
  

}
console.log(`Today is ${day} `);