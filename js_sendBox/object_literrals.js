const person={
    firstName :'Abdullah',
    lastName :'Jawaid',
    age:21,
    email:'aj@gmail.com',
    hobbies:['music','gym'],
    address:{
        city:'Karachi',
        state:'ML'
    
    },
    getBirthYear: function(){
        return 2000 - this.age;
    }

}

let val;
val=person
//Get Specific values
val=person.firstName;// recomendation Method

val=person['firstName'];

val=person.age;// recomendation Method
val=person.hobbies[1];
val=person.address.state
val=person.address['city'];

val=person.getBirthYear();


console.log(val);


const people=[
    {name:'Abdullah',age:21},
    {name:'Jawaid',age:21},
];

for(let i=0;i<people.length;i++){
    console.log(people[i]);

}