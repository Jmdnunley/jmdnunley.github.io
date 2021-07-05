// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
//funtion prints the numbers from 1 to 100 called fizzBuzz
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
//loop thru numebers 1-100
for(var i = 1; i <= 100; i ++){
//print "FizzBuzz" for numbers divisable by 15 in place of the number
 if (i%15 === 0){
  console.log("FizzBuzz"); 
} 
//print "Buzz" for numbers divisable by only 5 in place of the number 
 else if (i%5==0){
console.log("Buzz");
}
//print "Fizz" for numbers divisable by only 3 in place of the number
else if (i%3==0){
  console.log("Fizz");
}
// still print all other numbers not in relation to multiples of 3,5, and both 3 & 5 in our 1-100 range
else //print the numbers
console.log(i);
}
return fizzBuzz[i];
}




    // YOUR CODE GOES ABOVE HERE //






// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}