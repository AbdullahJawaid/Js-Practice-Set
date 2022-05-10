// Destructuring Assignment

let a,b;
[a,b]=[100,200];

// Rest Pattern
[a,b, c,...rest]=[100,200,300,400,500];

({ a, b }={a:100,b:200,c:300,d:400,e:500});
({ a, b, ...rest}={a:100,b:200,c:300,d:400,e:500});

// console.log(rest);

// Array  Destructuring

// const People=['John','Beth','Mike'];

// const [person1,person2,person3]=People;

// console.log(person1,person2,person3)


// Parse Array returend from function


// function getPeople() {
//     return['John','Beth','Mike'];
    
// }

// let person1, person2, person3;
// [person1,person2,person3]=getPeople();

// console.log(person1,person2,person3)


// Object  Destructuring

const person={
    name:'Abdullah',
    age:20,
    sayHello:function(){
        console.log('hello');
    }

}

//old ES5 
// const name=person.name,
//        age=person.age;\

// New ES6 Destructuring

const{name,age,sayHello}=person;

console.log(name,age);
sayHello();