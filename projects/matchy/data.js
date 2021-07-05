/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//declare animal set to an empty object
var animal = {};
//use .notation to assign the property species with the value Elephant
animal.species = ("Elephant");
//use []notation to assign the property name with the value "Ellie"
animal["name"] = "Ellie";
//used .notation to assign noises a empty array notated by []
animal.noises = [];
console.log(animal); //print the animal object to console. Should have a object with key value pair assignments inside {}

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//init the var noises to an empty array notated by [] 
var noises = [];
//use []notation to give noises a element representing a sound "Elephant" makes
noises[0] = "trumpeting";
//use .push to add another noise to the end of the noises array
noises.push("snorts");
//use .unshift to add a noise element to the begining of the noises array
noises.unshift("rumbling");
//use bracket syntax,add another element to the end of noises
noises[noises.length] = "grunts";

console.log([noises.length -1]);
console.log(noises[3]);
console.log(noises);
console.log();
//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Use Bracket syntax to assign the noises property on animal to our new noises array 
animal["noises"] = noises;
//use .push to add another noise to the noises property on animal
animal.noises.push("roars");
//print animal object, should retrun the obj animal and its key value pairs 
console.log(animal);
console.log(noises);
/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
    object.keys()
 *
 * 2. What are the different ways of accessing elements on arrays?
 *ex: animal[0]
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);

var duck = { species: 'Duck',
            name: 'Jerome',
            noises: ['quack', 'honk', 'sneeze', 'woosh']
    
}
    animals.push(duck);
    
    console.log(animals);
    
var girrafe = { species: 'Giraffe', 
                name: "Geofrey",
                noises: ['bellows', 'bleats', 'mews', 'whistles']

}
 animals.push(girrafe);

var dove = { species: 'Dove',
                name: 'Zeta',
                noises: ['coo', 'whistle', 'whir', 'wing slap']
    
}
animals.push(dove);

console.log(animals);
console.log(animals.length);
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Choose a data structure for this list of friends: Array 
//Chose array so that we could store a string of the names of all of Ellie's friends

var friends = [];//variable freinds declared assigned to an array 
function getRandom(){ // function called getRandom that we will push animals into 
    return Math.floor(Math.random()) * friends.length; 
   
}
getRandom(animals);

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}