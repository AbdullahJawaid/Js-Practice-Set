const data=[

    {
        name:'ABD',
        age:20,
        gender:'male',
        lookingFor :'female',
        location:'XYZ',
        image:'https://randomuser.me/api/portraits/men/82.jpg',
    }, 
    {
        name:'MMN',
        age:24,
        gender:'female',
        lookingFor:'male',
        location:'XYZ',
        image:'https://randomuser.me/api/portraits/women/82.jpg',
    }, 
    {
        name:'LMN',
        age:27,
        gender:'male',
        lookingFor:'female',
        location:'XYZ',
        image:'https://randomuser.me/api/portraits/men/84.jpg',
    },
];

const profiles=profileIterator(data);

// call First profile
nextProfile();

// Next Event
document.getElementById('next').addEventListener('click',nextProfile);

//Next profile display

function nextProfile(){
    const currentProfile=profiles.next().value;


    if(currentProfile!== undefined){
        document.getElementById('profileDisplay').innerHTML=`
        <ul class='list-group'>
        <li class='list-group-item'>Name: ${currentProfile.name}</li>
        <li class='list-group-item'>Age: ${currentProfile.age}</li>
        <li class='list-group-item'>Location: ${currentProfile.location}</li>
        <li class='list-group-item'>Preference: ${currentProfile.gender} Looking For ${currentProfile.lookingFor}</li>
        </ul>
        
        `;
        document.getElementById('imageDisplay').innerHTML=`<img src="${currentProfile.image}"> `;
    }
    else{
        // No more Profiles 
        window.location.reload();
    }
}



// Profile Iterator
function profileIterator(profiles){
    let nextindex=0;

    return{
        next:function(){
            return nextindex < profiles.length ?
            {value:profiles[nextindex++],done:false}:
            {done:true}
        }
    };
}
