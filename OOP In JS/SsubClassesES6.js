class Person{

    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    greeting(){
        return `Hello There ${this.firstName} ${this.lastName}`
    }


}

class Customer extends Person{
    constructor(firstName,lastName,age,phoneNumber){
        super(firstName,lastName);

        this.age=age;
        this.phoneNumber=phoneNumber
    }
    static addNumber(){
        return 90;
    }

}


const h1=new Customer('Abdullah','Jawaid','20','00000')
console.log(h1);
console.log(h1.greeting());
console.log(Customer.addNumber());
// console.log(Person.addNumber());