let val;

const list=document.querySelector('ul.collection');
const listItem=document.querySelector('li.collection-Item:first-child');

val=list;
val=listItem;

// GEt child nodes
// val=list.childNodes;
// val=list.childNodes[0];
// val=list.childNodes[0].nodeName;
// val=list.childNodes[0].nodeType;

/*

 1-Element
 2-Attribute(depricated)
 3-Text node
 8-comment
9-Document itself
10-Doctype

inka mtlb yeh hai k agr apke html mai space hoga tou text node show hogi,comment hoga tou 8 number show hoga

*/


// GEt children element nodes

// val=list.children;
// val=list.children[1];
// list.children[0].textContent='Abdullah';
// list.children[0].style.background='red';

// children of children

// list.children[1].children[0].id='test';

// first child
// val=list.firstChild;
// val=list.firstElementChild;

// last Child
// val=list.lastChild;
// val=list.lastElementChild;



// count child element
// val=list.childElementCount;

// Get parent nodes
val=listItem.parentNode;
 val=listItem.parentElement;
 val=listItem.parentElement.parentElement;

 // Get Next silbling
 val=listItem.nextSibling;
 val=listItem.nextElementSibling;
 val=listItem.nextElementSibling.nextElementSibling.previousElementSibling;

 // Get prev Sibling
 val=listItem.previousSibling;
 val=listItem.nextElementSibling.nextElementSibling;
 val=listItem.previousElemntSibling;








console.log(val)