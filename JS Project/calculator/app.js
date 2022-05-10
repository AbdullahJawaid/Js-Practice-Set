/// listen to submit

document.querySelector('#loan-form').addEventListener('submit',function(e){

    // Hide results
    document.querySelector('#results').style.display='none';
    
    // Show Loader
    document.querySelector('#loading').style.display='block';

    setTimeout(calculateResult,2000);



    e.preventDefault();

});

// calculate Results

function calculateResult(){

    console.log("calculating...");

    // Grab UI Variables

    const uiAmount=document.querySelector('#amount');
    const uiInterest=document.querySelector('#interest');
    const uiYears=document.querySelector('#years');
    const uiMonthlyPayment=document.querySelector('#monthly-payment');
    const uiTotalPayment=document.querySelector('#total-payment');
    const uiTotalInterest=document.querySelector('#total-interest');


    // changing into float

    const principal=parseFloat(uiAmount.value);
    const calculatedInterest=parseFloat(uiInterest.value) / 100 / 12;
    const calculatedPayments=parseFloat(uiYears.value) * 12;



    // compute monthly payment

    const x=Math.pow(1 + calculatedInterest,calculatedPayments);
    const monthly=(principal*x*calculatedInterest)/(x-1);


    // check if the user enter a correct number or not

    if (isFinite(monthly)) {
        uiMonthlyPayment.value=monthly.toFixed(2);
        uiTotalPayment.value=(monthly * calculatedPayments).toFixed(2);
        uiTotalInterest.value=((monthly * calculatedPayments)-principal).toFixed(2);



        // Show results
    document.querySelector('#results').style.display='block';
    
    // hide Loader
    document.querySelector('#loading').style.display='none';
        
    } else {
        // console.log("Please Check Your Number")
        showsError("Please Check Your Number");
    }




}


// Shows Error

function showsError(error){
    // Hide results
    document.querySelector('#results').style.display='none';
    
    // hide Loader
    document.querySelector('#loading').style.display='none';

// create a div
const errorDiv=document.createElement('div');

// Get Elements
const card=document.querySelector('.card');
const heading=document.querySelector('.heading');

// Add Class
errorDiv.className='alert alert-danger';

// create text node and append to div

errorDiv.appendChild(document.createTextNode(error));

// insert error above heading
card.insertBefore(errorDiv,heading);


// clear error after 3 sec
setTimeout(clearError,3000);

}
function clearError(){
    document.querySelector('.alert').remove();
}