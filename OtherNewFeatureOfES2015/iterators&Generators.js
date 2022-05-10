// // Iterator Example
// function nameIterator(names){
//     let nextIndex=0;

//     return {
//         next:function(){
//             return nextIndex<names.length ?
//             {value:names[nextIndex++],done:false}:
//             {done:true}
//         }
//     }
// }

// // create an array of names

// const namesArr=['Jack','Jill','John'];

// // Init iterator and pass in the names array
// const names=nameIterator(namesArr);

// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next());


// Generator Example

//  function* syName(){
//      yield 'Abdullah';
//      yield 'Jawaid';
//      yield 'Muhammad';
//  }

//  const name=syName();
//  console.log(name.next().value)
//  console.log(name.next().value)
//  console.log(name.next().value)
//  console.log(name.next().value)



//Generator Example ID Creator

// function* createIds(){
//     let index=1;

//     while(true){
//         yield index++;

//     }
// }

// const gen=createIds();
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())