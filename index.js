let language = 'JavaScript';

//a) Use string concatenation and two .slice() methods to print 'JS' from 'JavaScript'.

console.log(language.slice(0,1)+language.slice(4,5));


//b) Without using .slice(), use method chaining to accomplish the same thing.

let firstInitial = language[0];
let secondInitial = language[4];

console.log(firstInitial + secondInitial);

//c) Use bracket notation and a template literal to print "The abbreviation for 'JavaScript' is 'JS'."

let js = firstInitial + secondInitial

console.log(`The abbreviation for '${language}'' is '${js}'.`);

//d) Just for fun, try chaining 3 or more methods together, and then print the result.

