const http = new easyHTTP;


//GET Posts
//  http.get('https://jsonplaceholder.typicode.com/posts',function(err,posts) {

//     if (err,posts) {
//         console.log(err);

//     }else{
//      console.log(posts);
//     }

//  });



//  //GET Single Post

//  http.get('https://jsonplaceholder.typicode.com/posts/1',


//    function(err,post) {
//     if (err) {
//         console.log(err);

//     }else{
//      console.log(post);
//     }


//  });



//Post Single Post
// //create Data
// const data={
//     title:"custom post",
//     body:"This is a custom post"
// };

// Create Post
// http.post('https://jsonplaceholder.typicode.com/posts',data,function (err,post) {

//             if (err) {
//                 console.log(err);

//             }else{
//              console.log(post);
//             }


// })



// Update Post

//create Data
// const data = {
//     title: "custom Put",
//     body: "This is a custom post"
// };


// // Update Post
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function (err, post) {
//     if (err) {
//         console.log(err);

//     } else {
//         console.log(post);
//     }


// })

// Delete Post

http.delete('https://jsonplaceholder.typicode.com/posts/1',function(err,response) {

    if (err) {
        console.log(err);

    }else{
     console.log(response);
    }

 });
