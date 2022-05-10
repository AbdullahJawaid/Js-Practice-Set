function MemberFactory(){
    this.createMember= function( name, type ) {
        let member;

        if(type === 'Simple'){
            member= new SimpleMemberShip(name);
        }
        else if(type === 'Standard'){
            member= new StandardMemberShip(name);
        }
        else if(type === 'Super'){
            member= new SuperMemberShip(name);
        }
        
        member.type = type;

        member.define=function(){
            console.log(`${this.name} (${this.type}): ${this.cost}`);

            
        }
        return member;
    }
}

const SimpleMemberShip=function(name){
    this.name=name;
    this.cost="$5";
}
const StandardMemberShip=function(name){
    this.name=name;
    this.cost="$10";
}
const SuperMemberShip=function(name){
    this.name=name;
    this.cost="$15";
}

const members=[];

const factory=new MemberFactory();

members.push(factory.createMember('Abdullah', 'simple'));

console.log(members)


// members.forEach(function(member){
//     member.define();

// })
