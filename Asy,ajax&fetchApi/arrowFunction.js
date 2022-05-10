// const sayHello=function () {
//     console.log('hello')
    
// }

// const sayHello=()=>{
//     console.log('hello')
// }


// one line function does not need braces
// const sayHello=()=> console.log('hello')


// one line return
// const sayHello=() => 'Hello'

//same as above
// const sayHello=function () {
//     return'Hello';
    
// }


//return object
// const sayHello =()=>({msg:'Hello'})


// single param
// const sayHello= name => console.log(`hello ${name}`)


// Multiple param
// const sayHello= (firstname,lastname) => console.log(`hello ${firstname} ${lastname}`)


//  sayHello('Abdullah' ,'Jawaid');


// call back function
const user=['Muhammad','Abdullah','Jawaid'];

// longest way
// const namelength=user.map(function (name) {
//     return name.length;
    
// })

// shorter way

// const namelength=user.map((name) => {
//     return name.length;
// });

// shortest way
// const namelength=user.map(name => name.length)

// console.log(namelength)