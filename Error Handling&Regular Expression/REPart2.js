let re;
// Litteral Characters
// re=/hello/;
// re=/hello/i;

// MetaCharacters Symbols

re=/^h/i;   // Must start with
re=/world$/i;   // Must end with
re=/^hello$/i;   // Must begain and end with
re=/^h.llo$/i;   // Match with any character
re=/^h*llo$/i;   // Match with any character 0 or more times

re=/gre?a?y/i;   // optional character
re=/gre?a?y\?/i;   // Escape character



// String to match

// const str='hllo'

const str='Gray?';

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