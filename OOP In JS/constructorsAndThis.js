// Before Constructors
// deal only one Object

// const brad={
//     name:'Abdullah',
//     age:30

// }
// console.log(brad)
// console.log(brad.age)


// After Constructors
// deal with multiple Object

// function Person(){
//     this.name='Abdullah';


// }

// const abd=new Person();
// console.log(abd);

// function Person(name){
//     this.name=name;
// }

// const abd=new Person('Abdullah');
// const jaw=new Person('Jawaid')
// //  console.log(abd);
//  console.log(jaw);


// function Person(name){
//     this.name=name;
//     console.log(this);
// }
// //they gives the window object
// // console.log(this);

// const abd=new Person('Abdullah');
// const jaw=new Person('Jawaid')





// function Person(name,age){
//          this.name=name;
//          this.age=age;
//      }
// const abd=new Person('Abdullah',20);
// const jaw=new Person('Jawaid',50)
//  console.log(abd);
//  console.log(jaw);




// Calculating Age function
// function Person(name, dob) {
//     this.name = name;
//     // this.age = age;
//     this.birthday = new Date(dob);
//     this.calculateAge = function(){
//       const diff =  Date.now() - this.birthday.getTime();
//       const ageDate = new Date(diff);
//       return Math.abs(ageDate.getUTCFullYear() - 1970);
//     }
//   }
// const brad = new Person('Brad', '9-7-2000');
// console.log(brad.calculateAge());

