 /** 
  * //Loops
  * //PURPOSE: 
  *      Loops are used to run a repetitive block of code until a set condition is met. We could declare 100 variables but that 
  *  would be 'wonky' and totally inefficient for the code. We as programmers create loops in order to move in iteration and iterate 
  *  over different data types and get the most efficient use out of our code. Loop keywords include: while, do while, for, and the
  *  for in loop.*/
  
  /**
   *     //WHILE LOOP
   *         The while loop loops through a block of code while that specified condition is true */
          let i = 0; 
          let sum = 0;
          while (i < 33) {
              sum += i;
              i++;
          }
          console.log(sum);// prints => 528
   /**
        //FOR LOOP
             The for loop will loop through a code a certain input amount of times */
    
          for (let i = 10; i <= 20; i++) {
          console.log(i); //prints => the number 10 -20 to the console 
 }
    /**
        //FOR IN LOOP
             The for-in loop allows us to loo through the porperties of an object */
           var object = {
            car: 'Honda',
            make: 'Accord',
            year: 2015,
            color: 'black'
           };
           for (var key in object) {
            console.log(object[key]); // prints => "Honda", 'Accord', 2014, 'black' to the console. 
           }
 /**
  * We can loop over different data types forward and backwards
  * //Arrays: Loop forwards */
    var arr = [1,2,3,4];
    for (let i = 1; i < arr.length; i++){
     console.log(i); // prints => 1,2,3
    }
/** //Loop backwards */
     var array = [1,2,3,4,5];
     for (let i = array.length - 1; i >= 0; i--){
      console.log(array[i]); // prints => 5,4,3,2,1
     }
