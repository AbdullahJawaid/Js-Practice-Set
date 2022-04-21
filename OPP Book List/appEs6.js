 // Book Class
class Book{
    constructor(title,author,isbn){
    this.title=title;
     this.author=author;
     this.isbn=isbn;
}
}

 // UI Class
class UI{
    // Add Book To The List 
    addBookList(objbook){
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


    // Show Alert
    showAlert(message,className){
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
    deleteBook(target){
        if(target.className=== 'delete'){
            target.parentElement.parentElement.remove();
        }
    

    }

    // Clear Filed
    clearFileds(){

    document.getElementById('title').value='';
    document.getElementById('author').value='';
    document.getElementById('isbn').value='';

    }

}

// Local Stroge

class Store{

    static getBook(){
        let books;
        if(localStorage.getItem('books') === null){
            books=[];
        }
        else{
           books=JSON.parse( localStorage.getItem('books'));
        }

        return books;
    }

    static displayBook(){
        const books=Store.getBook();

        books.forEach(function(book){
            const objUi=new UI;

           //Add Book To UI 
           objUi.addBookList(book)

        });

    }

    static addBook(book){
        const books=Store.getBook();

        books.push(book);

        localStorage.setItem('books',JSON.stringify(books))

    }

    static removeBook(){

    }

}



// Dom Event Listner
document.addEventListener('DOMContentLoaded',Store.displayBook())

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

    // Add LS
    Store.addBook(objbook);

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
