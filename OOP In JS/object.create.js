const personPrototype={
    greeting:function(){
        return `Hello There ${this.firstName} ${this.lastName}`;
        
    },
    newLastName: function(nayaLastName){
        this.lastName=nayaLastName;
    }

}


// First Way 
const abd=Object.create(personPrototype);
abd.firstName='Abdullah';
abd.lastName='Jawaid';
abd.age=40;

abd.newLastName('Khan');
console.log(abd.greeting())


// First Way 

const brad=Object.create(personPrototype,{
    firstName:{value:'Abdullah'},
    lastName:{value:'Jawaid'},
    age:{value: 40}

});

console.log(brad);
console.log(brad.greeting());