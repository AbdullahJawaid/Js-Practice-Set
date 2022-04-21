// Person Constructor
function Person(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName;
}

//Greeting
Person.prototype.greeting=function(){
    return `Hello there ${this.firstName} ${this.lastName}`
}

//creating object
const Person1=new Person('Abdullah','Jawaid')
console.log(Person1.greeting());


//  Customer Constructor

function Customer(firstName,lastName,Age,phoneNum){
    Person.call(this,firstName,lastName);
    this.Age=Age;
    this.phoneNum=phoneNum;
}
//Inherit the person prototype methods

Customer.prototype=Object.create(Person.prototype);

//make customer.prototype return customer
Customer.prototype.constructor=Customer;

const Customer1=new Customer('Jawaid','Abdullah','30','0000000')

console.log(Customer1);

Customer.prototype.greeting=function(){
    return `Hello there ${this.firstName} ${this.lastName} Welcome to the Company`
}

console.log(Customer1.greeting());








