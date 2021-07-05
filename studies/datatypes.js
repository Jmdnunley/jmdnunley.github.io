/** 
* DATATYPES:
*
* 0. Data types are the types of values we use in our program. Two
* major categories we can put data types into are Complex, Simple, and   
* Primitive data types. Variables are assigned to a data type. It is 
* important to know the type of data type we will use in our variable in order
* to allow the intepreter to know how to handle that given value. 
*
/* Simple/Primitave Data Types
* 1. Number: Numeric type values as we know them. They can be used here 
* just as we use them in math. Number types can be added, subtracted, multiplied, 
* and divided. They can be entered as positive or negative numbers, and with or without 
* a decimal. 
* 
* 2. String: Values of either character or textual data. They must use " " or ' ' (double or 
* single quotations) to enclose the value. The use of commas must seperate strings when there 
* are multiple present. Strings can be empty and filled later with values or be assigned with 
* values already inside.  
*     let myString = " "; or let myString = ' '; //<= the variable my string has a value of a empty 
*                                                // string assinged as it's value in this example  
*                                                // we could fill the strings later in our code. This  
*                                                // example shows the use of single and double quotations.
*     let myName = "Ja'Na"; //<= the variable my name has the string Ja'Na assigned as its value
*                         // using double quotations.
*     let mySchool = 'Operation Spark'; //<= the variable my school has the string Operation Spark 
*                                       // assigned as its value using single quotations.
*
* 3. Boolean: Booleans will always resolve to one of two different values, true or false.
*     let myAge = 21; 
*     let legalDrink = 21;
*     myAge === legalDrink //<== boolean will result to true
*
*     let numOne = 1;
*     let numTwo = 1000;
*     numOne > numTwo; //<= boolean will result to false because 1 is not greater than 100 
*
* 4. NaN: Not a number. This data type indicates that a value is not a legal number.
*
* 5. Undefined: When a value has not been assigned to a variable it is undefined. In regard to functions, 
* a function returns undefined if a value was not returned. 
*
* 6. Null: Is used to express the lack of identification or in other words no-value. It indicates 
*   that a variable  points to no object. 
* 
*/
/*
* Complex Data Types 
* 
* 1. Arrays[ ]: An array is a collection of stored values that can be of any data type pushed into one
* list and stored as one. Arrays can be accessed like strings by their indexes. Arrays must be enclosed 
* with square brackets. 
*
* 2. Ojects { }: Think of a container that you can put different type personal items in, alike or different. 
* Objects are containers for data values to be stored, alike, different, or a mixture. 
* 
* 
* 3. Function: A function block of code with a statement that executes a task or calculates a value. You must call/  * invoke a function in order for the function to execute. 
* 
*
*
*
*/ 
/* USE:
* 1. Number:  1920, 10.18, -28  //<=number type value examples.
*
* 2. String:  let myString = " "; or let myString = ' '; //<= the variable my string has a value of a empty 
*                                                // string assinged as it's value in this example  
*                                                // we could fill the strings later in our code. This  
*                                                // example shows the use of single and double quotations.
*             let myName = "Ja'Na"; //<= the variable my name has the string Ja'Na assigned as its value
*                         // using double quotations.
*             let mySchool = 'Operation Spark'; //<= the variable my school has the string Operation Spark 
*                                       // assigned as its value using single quotations.
*
* 3. Boolean: let myAge = 21; 
*             let legalDrink = 21;
*             myAge === legalDrink //<== boolean will result to true
*
*             let numOne = 1;
*             let numTwo = 1000;
*             numOne > numTwo; //<= boolean will result to false because 1 is not greater than 100 
*
* 4. Array:   [28, 56, 112] // <= literal array with three elements stored inside square brackets. We notice * * *    *              that all three elements use the data type numbers. 
*             [28, 56, 112,"October", true, ] 
* 
* 5. Object:  let person = { // <= we declare a variable assigned to an object. 
*             fullName: 'Ermias Asghedom', // <= string value assigned to the key full name & 
*                                                the first key/value pair in this object
*             age: 33, // <= number value assigned to the key age.
*             ownerOf: ['All $ In', 'The Marathon Clothing'], // <= array of string values assigned to the key   *    *                                                             // ownerOf.
*             wasProlific: true // <= boolean value of true assigned to the key was prolific 
*             } // <= objects must be enclosed with curly brackets {}.
*  
* 6. Funtion: 
*  
*
* 7. Undefined: 
*
*
* 8. null:
*
*
* 9. NaN:
*
* 
* 10. Infinity and -Infinity:
*
*
* 11. Primitive/Simple and Complex: 
*
*
* 12. Primitive values are passed to a function BY COPY, complex vvalues are BY REFERENCE. What does 
* mean, and how are they different? 
* 
*/