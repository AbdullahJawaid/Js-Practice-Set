// Basic Structure
//  (function (params) {
//      // Declare private variables and function


//      return{
//          // Declare public variables and  function
//      }
     
//  })();

// Standard Module Pattern

// const UiCtrl=(function () {
//     let text='Hello World';

//     const changeText=function () {
//         const element=document.querySelector('h1');
//         element.textContent=text;
        
//     }

//     return{
//         callChangeText:function () {
//             changeText();
//             console.log(text);
            
//         }
//     }
    
// })();

// UiCtrl.callChangeText();
// console.log(UiCtrl.text);



// Revealing Module Pattern

const ItemCtrl=(function(){
    let data=[];


    function add(items) {
        data.push(items);
        console.log('Item Added');
        
    }
    function get(id) {
        return data.find(item=>{
            return item.id=id;
        })
        
    }

    return{
        add: add,
        get:get
    }

})()

ItemCtrl.add({id:1,name:'Abdullah'});
ItemCtrl.add({id:2,name:'Jawaid'});
console.log(ItemCtrl.get(1))
console.log(ItemCtrl.get(2))