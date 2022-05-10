// Book Constructor
 function Book(title,author,isbn){
     this.title=title;
     this.author=author;
     this.isbn=isbn;

 }

 // UI Constructor

 function UI(){}

 // Add Book To The List 
 UI.prototype.addBookList=function(objbook){
     
    const list=document.getElementById('book-list');

    // Create tr Element
    const row=document.createElement('tr')

    row.innerHTML=`
    <td>${objbook.title}</td>
    <td>${objbook.author}</td>
    <td>${objbook.isbn}</td>
    <td><a href='#' class=delete>X</a></td>
    `
    list.appendChild(row);    
 }



 // Clear Filed
 UI.prototype.clearFileds=function(){

    document.getElementById('title').value='';
    document.getElementById('author').value='';
    document.getElementById('isbn').value='';



 }
 
// Show Alert
UI.prototype.showAlert=function(message,className){

    // create Div
    const div=document.createElement('div');

    // Add Class NAme
    div.className=`alert ${className}`;
    // Add Text
    div.appendChild(document.createTextNode(message));

    // GEt Parent
    const container=document.querySelector('.container');
    // Get Form
    const form=document.querySelector('#book-form');

    // Insert alert
    container.insertBefore(div,form);


    // TimeOut  after 3 sec
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 3000);
}

// Delete Book
UI.prototype.deleteBook=function(target){
    if(target.className=== 'delete'){
        target.parentElement.parentElement.remove();
    }

}





 // Add Event Listner For Add Book

 document.querySelector('#book-form').addEventListener('submit',
 function(e){

    // Get Values
    const title=document.querySelector('#title').value,
          author=document.querySelector('#author').value,
          isbn=document.querySelector('#isbn').value;


    // Instantiate Book
    const objbook=new Book(title,author,isbn);


     // Instantiate UI
    const objUi=new UI();


    // Validation

    if(title==='' || author==='' || isbn===''){
        // Error alert
        objUi.showAlert('Please Fill The Form','error')
    }
    else{

         // Add A Book List
    objUi.addBookList(objbook);

    // Show success
    objUi.showAlert('Book Added!','success')
    
    // Clear Fileds
    objUi.clearFileds();

    }

    

   


    e.preventDefault();
 });



 //Event Listeners For Delete
 document.getElementById('book-list').addEventListener('click',
 function(e){


       // Instantiate UI
       const objUi=new UI();


       // Delete Function
       objUi.deleteBook(e.target);

       //Show Message
       objUi.showAlert('Book Remove','success')


    e.preventDefault();

 })