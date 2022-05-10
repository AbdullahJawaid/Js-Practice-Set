const posts=[

    {title:"Post One", body:'This is post One'},
    {title:"Post Two", body:'This is post Two'}
];


// Synchronous way
// function  createPost(post) {
//     setTimeout(function(){
//         posts.push(post);
//     },2000);
    
// }

// function getPost() {
//     setTimeout(function(){
//         let output='';
//         posts.forEach(function(post){
//             output +=`<li>${post.title}</li>`;
//         });
//         document.body.innerHTML=output;
//     },1000);
    
// }

// createPost({title:"Post Three", body:'This is post Three'});

// getPost()



// Asynchronous way


function  createPost(post,callback) {
    setTimeout(function(){
        posts.push(post);
        callback()
    },2000);
    
}

function getPost() {
    setTimeout(function(){
        let output='';
        posts.forEach(function(post){
            output +=`<li>${post.title}</li>`;
        });
        document.body.innerHTML=output;
    },1000);
    
}

createPost({title:"Post Three", body:'This is post Three'},getPost);