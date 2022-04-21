//object.prototype
//Person.prototype




function Person(firstname, lastName,dob) {
    this.firstname = firstname;
    this.lastName = lastName;
    // this.age = age;
    this.birthday = new Date(dob);
    // this.calculateAge = function(){
    //   const diff =  Date.now() - this.birthday.getTime();
    //   const ageDate = new Date(diff);
    //   return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
}

// Calculate age
Person.prototype.calculateAge=function(){
    const diff =  Date.now() - this.birthday.getTime();
      const ageDate = new Date(diff);
      return Math.abs(ageDate.getUTCFullYear() - 1970);

}

// GEt Full name
Person.prototype.getFullName=function(){

    return `${this.firstname} ${this.lastName}`;

}

// Change Last Name

Person.prototype.changeLastName=function(newLastName){
    this.lastName=newLastName;

}


const abd=new Person('Abdullah','Jawaid','9-7-2000')
const jaw=new Person('Jawaid','Abdullah','March 20 1978')

console.log(abd)
console.log(jaw)

console.log(jaw.calculateAge())
console.log(abd.calculateAge())

console.log(abd.getFullName())

abd.changeLastName('javed');

console.log(abd.getFullName())


