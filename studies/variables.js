/*
 * VARIABLES:
 * Purpose:
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

//2. var, let, const //
/**
 *  1. var: The scope of var depends on where it is declared. When we say scope we are reffering to
 *  where that variable is avaliable for use. A variable declared with the keyword var outside of a
 *  function has a global scope wheras it will be fucntioned scoped when it is declared within a
 *  function. */

 var sayHello = " Hello, how are you?";//init of sayHello var outside of func; global scope

 function welcome(){
   var whatsUp = "What's up everybody!";// function scoped var
 }

 /**
  * 2. let: ES6 prefers let over var for variable declaration. Let like var can be declared and we can
  * be updated within its scope(the definition of scope is unchanged). Let cannot be re-decalred withing
  * its scope. 
  */
  //THIS WILL WORK//
  let fanFav = "Go Tigers!"; 
  fan fanFav = " We also like the 49ers";

  //THIS WILL NOT WORK//
  let iceCream = "Old fashioned vanilla";
  let iceCream = "Cookies & Cream";//error: Identifier 'iceCream' has already been declared

  /** 
   * What let can do is, we can use the same variable in different scopes and there will be no error. 
   * The benifit of this is, we can redeclare varibles even if they are outside of a particular scope.*/

  let favCoffeeShop = "Starbucks"; 
  if (true){ 
    let favCoffeeShop = "I changed my mind, I like Jet Coffee way more!";
    console.log(favCoffeeShop);//prints => "I changed my mind, I like Jet Coffee way more!"
  }
  
  /**
   * 3. const: Const is short for constant and variables decalred with const maintain constant values. 
   * Const declarations can only be accessed within the block they were declared, cannot be updated or 
   * re-declred and ultimately are the most restricted type out of the var, let, const keywords. It is
   * also important to intialize const declarations, the cannot be declared and assigned on seperate
   * lines in our code. 
   */

  //THIS WILL NOT WORK:
  const emergencyType = "Fire";
  emergencyType = " Earthquake"; // error: Asignment to a constant variable

  //THIS WILL WORK:


  //3. Hoisting//
  /** 
   * Declarations can bee "moved to the top" by what JavaScipt calls hoisting. Hoisting is the default
   * behavior of movin those declarations to the top of the current scope or the current function. 
   * Let and const keyword declared variables are hoisted to the top of the block of code. They are not
   * intialized. In this case the block of code is aware of that declared variable but will not use it 
   * until it has been declared. Initializations will not be hoisted, JS will only hoist declarations. 
   * Hoisting is important to remember and grasp because if you do not rememeber the particulars of this
   * conecept your code can easily contain bugs and plenty throwed errors. A good way to prevent issues 
   * with this concept is to simply declare all off your variables at the begging of every scope. 
   */

  //THIS WILL NOT WORK:
  shoeBrand = "crocs";
  let shoeBrand; // ReferenceError: Cannot access 'shoeBrand' before initialization

  jewleryStore = "Pandora";
  const jewleryStore = "The Diamond Exhchange"; //ReferenceError: Cannot access 'jewleryStore' before initialization
