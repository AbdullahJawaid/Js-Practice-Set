class Person{
    constructor(firstName,lastName,dob){
        this.firstName=firstName;
        this.lastName=lastName;
        this.birthday=new Date(dob);
    }
    greeting(){
        return `Hello There ${this.firstName} ${this.lastName}`;

    }
    clculateAge(){
        const diff =  Date.now() - this.birthday.getTime();
      const ageDate = new Date(diff);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
      
    }
    getMarried(newLastName){
        this.lastName=newLastName;
    }

    static addNum(x,y){
        return x+y;

    }
}


const person1=new Person('Abdullah','Jawaid','11-13-1980')
console.log(person1);
console.log(person1.greeting());
console.log(person1.clculateAge());

person1.getMarried('Khan')
console.log(person1);
console.log(person1.getMarried('khan'));

console.log(Person.addNum(2,3))