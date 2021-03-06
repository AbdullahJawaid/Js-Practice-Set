document.getElementById('button').addEventListener('click',loadData);

function loadData(){
    // create an XHR object

    const xhr=new XMLHttpRequest();

    //Opne
    xhr.open('GET','data.txt',true);


    // Optional - Used for spinners/loaders
    xhr.onprogress=function(){
        console.log('ReadyState',xhr.readyState);
    }

    xhr.onload=function(){
        console.log('ReadyState',xhr.readyState)
        if(this.status===200){
            // console.log(this.responseText);
            document.getElementById('output').innerHTML=`<h1>
            ${this.responseText}</h1>`
        }
    }


    xhr.onerror=function(){
        console.log('request error....')
    }

    xhr.send();

}

// ReadyStates Values
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready


/// HTTP Statuses
 // 200: "OK"
 // 403: "Forbidden"
 // 404: "Not Found"