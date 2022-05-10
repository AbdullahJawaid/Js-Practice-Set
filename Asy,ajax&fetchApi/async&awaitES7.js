// async function myfunc() {
  

//     const promise=new Promise((resolve,reject)=>{
//         setTimeout(() => resolve('Hello'),3000);

//     });
//     const error=true;
//     if (!error) {

//         const res=await promise; //await untill promise is resolved
//         return res;
//     }else{
//         await Promise.reject(new Error('Something Went Wrong'))
//     }
   
    
// }

// myfunc()
// .then(res=> console.log(res))
// .catch(err=>console.log(err))

// using fetch async&await

async function getUser(){
    // await response of the fetch call
    const response=await fetch('https://jsonplaceholder.typicode.com/users');

    // only proceed once its resolve
    const data =await response.json();

    //only proceed once second promise is resolved
    return data;
}
getUser().then(user=>console.log(user))