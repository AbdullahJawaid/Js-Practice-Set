let re;

re=/hello/;
re=/hello/i; // i=case insensitive
// re=/hello/g; // i=Global search

// console.log(re);
// console.log(re.source);

// exec() =>Return result in an array or null
// const result=re.exec('Hello world')
// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// test() =>Return true or false
// const result=re.test('Hello');
// console.log(result);


// match() =>Return result in an array or null
// const str='Hello world';
// const result=str.match(re)
// console.log(result);


// search() =>Return index of the first match if not found result -1
// const str='Hello world';
// const result=str.search(re)
// console.log(result);

// replace() =>Return new string with some or  all matches of a pattern
const str='Hello world';
const result=str.replace(re,'hi')
console.log(result);