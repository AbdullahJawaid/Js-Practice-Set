// document get element by class name
// const items=document.getElementsByClassName('collection-Item');
// console.log(items)
// console.log(items[0]);
// items[0].style.color='red';
// items[3].style.color='green';
// items[3].textContent='HEllo'

// const listItems=document.querySelector('ul').getElementsByClassName('collection-Item');
// console.log(listItems);



// document.getElementsByTagName

// let lis=document.getElementsByTagName('li');

// console.log(lis[0]);
// lis[0].style.color='red'
// lis[3].textContent='Abdullah'

// lis=Array.from(lis)

// lis.reverse();

// lis.forEach(function(li, index) {
//     console.log(li.className);
//     li.textContent=`${index}HEllo`

    
// });
// console.log(lis);


// document.querySelectorAll

// const items=document.querySelectorAll('li.collection-Item');

// items.forEach(function(list,index){

//     console.log(list.className);
//     list.textContent=`${index}:Abdullah`
// });
// console.log(items)

const liOdd=document.querySelectorAll('li:nth-child(odd)');
const liEven=document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(inOdd,index){
    inOdd.style.background="#ccc";
    inOdd.textContent=`${index}:OddChanges`

});

for(let i=0;i<liEven.length;i++){

    liEven[i].style.background='red';
    liEven[i].textContent='EvenChanging';
}
