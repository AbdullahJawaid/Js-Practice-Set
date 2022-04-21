const name='Abdullah';
const age=31;
const job='Free Man';
const city='Karachi';

let html;


// Without template strings(es5)

html='<ul><li>Name: ' + name + '</li> <li>Age: ' + age +' </li> <li>Job:'+ job +'</li><li>Job:' + job +' </li> <li>City:' + city +'</li></ul>'



html='<ul>'+
            '<li>Name:'+ name +'</li>'+
            '<li>Age:'+ age +'</li>'+
            '<li>Job:'+ job +'</li>'+
            '<li>City:'+ city +'</li>'+

'</ul>';

 function hello(){
     return 'Hello';
 }

// With template strings(es6)
html=`
   <ul>
   <li>Name:${name}</li>
   <li>Age:${age}</li>
   <li>Job:${job}</li>
   <li>City:${city}</li>
   <li>${2+2}</li>
   <li>hello:${hello()}</li>
   <li>${age>30 ? "over 30" :"under 30" }</li> 






   </ul>










`


document.body.innerHTML=html;