let re;



// Brackets [] -Character Sets

// re=/gr[ea]y/i; // Must be  an a or e
re=/[GF]ray/i; // Must be  G or F
re=/[^GF]ray/i; // Must be  anything except a G or F
// re=/[A-Z]ray/; // Must be  any uppercase Letter
re=/[a-z]ray/; // Must be  any Lowercase Letter
re=/[A-Za-z]ray/; // Matche  any  Letter
re=/[0-9]ray/; // Matche  any  digit
re=/[0-9][0-9]ray/; // Matche  any  digit


// Braces {} -Quantifiers Sets

re=/Hel{2}o/i; // Must occur exactly {m} amount
re=/Hel{2,4}o/i; // Must occur exactly {m} amount
re=/Hel{2,}o/i; // Must occur al least {m} amount


// Paretheses () -Grouping
re=/^([0-9]x){3}$/;


// Shorthand Character Classes
re = /\w/;    // Word character - alphanumeric or _
re = /\w+/;    // + = one or more
re = /\W/;    // Non-Word character
re = /\d/;    // Match any digit
re = /\d+/;    // Match any digit 0 or more times
re = /\D/;      // Match any Non-digit
re = /\s/;      // Match whitespace char
re = /\S/;      // Match non-whitespace char
re = /Hell\b/i; // Word boundary

// Assertions
re = /x(?=y)/;  // Match x only if followed by y
re = /x(?!y)/;  // Match x only if NOT followed by y





// String to match
// const str='Gray?';
// const str='10ray?';
// const str='3ray?';

// const str='Hello';

// const str='3x3x3x';
const str = 'dkjekdxydjekdj';





// Log Results

const result=re.exec(str);
console.log(result);

function reTest(re,str) {
    if (re.test(str)) {
        console.log(`${str} matches ${re.source}`);
        

    }
    else{
        console.log(`${str} does not matches ${re.source}`)
    }
    
}

reTest(re,str);