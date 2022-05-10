const user={email:'hello@gmil.com'}
try {

    // Produce a Reference Error
    // myFunction();

    // Produce a typeError
    // null.myFunction

    // Produce a SyntaxError
    // eval('hello World');
  
   // Produce a URIError
//    decodeURIComponent(' % ')

if (!user.name) {
    // throw "User has no name";
    throw new SyntaxError ("User has no name");
    
}






} catch (e) {
    console.log(e);
    // console.log(e.message);
    // console.log(e.name);
    // console.log(e instanceof ReferenceError);
    // console.log(e instanceof TypeError);
    
    
}
finally{
    console.log('Finally Runs reguardless of result....')

}

console.log('Program  continues...')