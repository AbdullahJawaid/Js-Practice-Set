const User=function (name) {
    this.name=name;
    this.chatroom=null;
    
}

User.prototype={
    send:function (message,to) {
        this.chatroom.send(message,this,to);
        
    },
    recieve:function (message,from) {
        console.log(`${from.name} to ${this.name}:${message}`);
        
    }

}

const Chatroom=function(){
    let user={};// List Of User

    return{
        register:function(user){
            user[user.name]=user;
            user.chatroom=this;
        },
        send:function(message,from,to){
            if (to) {
                //Single User Message
                to.recieve(message,from);
                
            }
            else{
                // Mass message
                for(key in users){
                    if(users[key]!==from){
                        users[key].recieve(message,from);
                    }
                }
            }
        }
    }

}

const Abdullah=new User('Abdullah');
const Abdullah1=new User('Abdullah1');
const Abdullah2=new User('Abdullah2');



const chatroom=new Chatroom();

chatroom.register(Abdullah)
chatroom.register(Abdullah1)
chatroom.register(Abdullah2)

Abdullah.send('hello Abdullah1',Abdullah1)