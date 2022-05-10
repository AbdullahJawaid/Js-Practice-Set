// Game Value

let min=1,
    max=10,
    winningNum=getRandomNum(min,max),
    guessLeft=3;



const game=document.querySelector('#game'),    
      minNum=document.querySelector('.min-num'),    
      maxNum=document.querySelector('.max-num'),    
      guessBtn=document.querySelector('#guess-btn'),    
      guessInput=document.querySelector('#guess-input'),    
      message=document.querySelector('.message');

       
// Assign UI MAX AND MIN

minNum.textContent=min;
maxNum.textContent=max;


/// Play Again event Listener

game.addEventListener('mousedown',function(e){

if(e.target.className==='play-again'){
    window.location.reload();
}

});


/// Listen for Guess
guessBtn.addEventListener('click',gamePlay)

function gamePlay(){

    let guess=parseInt(guessInput.value);

    // validation
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please Enter A number between ${min} and ${max}`,'red');
    }

    if(guess===winningNum){

        // Game Over Won
        
        // // Disable input
        // guessInput.disabled= true;
        // // change the boarder color
        // guessInput.style.boardColor='green'
        // // Set Message
        // setMessage(`${winningNum} is correct,You Win`,'green')



        gameOver(true,`${winningNum} is correct,You Win`);
    }
    else{
        // Wrong Number
        guessLeft-=1;

        if(guessLeft===0){
            // Game over -lost

            // Disable input
        // guessInput.disabled= true;
        // // change the boarder color
        // guessInput.style.boardColor='red'
        // // Set Message
        // setMessage(`Game Over , You Lost.The correct number was ${winningNum}`,'red')


        gameOver(false,`Game Over , You Lost.The correct number was ${winningNum}`)


        }
        else{
            // Game continues -answer wrong

            //Change border color
            guessInput.style.boardColor='red';

            // Clear Input
            guessInput.value=""
            // Tel The User its the wrong  number
            setMessage(`${guess} is not correct ,${guessLeft} guesses Left`,'red');
        }
    }
};


function gameOver(won,msg){
    let color;

    // if else

    won===true ? color='green' : color='red';

    // if(won===true){
    //     color='green';
    // }
    // else{
    //     color='red';
    // }

    // Disable input
    guessInput.disabled= true;
    // change the boarder color
    guessInput.style.boardColor=color;
    //Set Text Color
    message.style.color=color;
    // Set Message
    setMessage(msg);



    // Play Again?
    guessBtn.value='Play Again';

    guessBtn.className +='play-again';

    // guessBtn.appendChild(document.createTextNode(guessBtn));



}
// Get Winning Number
function getRandomNum(min,max){
   return  Math.floor( Math.random()*(max-min+1)+min);
}




function  setMessage(msg,color){
    message.style.color=color;
    message.textContent=msg;
} 