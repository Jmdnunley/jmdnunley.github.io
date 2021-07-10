/** 
 * //String Manipulation 
 * /*PURPOSE: 
 *      Strings are objects that belong to the primitive/simple data type family. Although strings can live inside 
 * of arrays they are not accessed the same. We must manipulate strings in order to have acces to their values. We do that 
 * by using built-in fucntions. These functions provide various ways to access the contents of a string varable. Strings are
 * indexed starting at the 0th character, we begin at the first letter property and move right through that string including all
 * spaces and special characters in that string. 
 * 
 * 
 * //TYPES:
 *  1. concat(); - Combines the text of two or more strings and returns a new string. 
 *  2. indexOf(); - Returns the index within the string of the last occurence of the speicfied value, or -1 if not found. 
 *  3. match(); - Used to math a regular expression against a string. 
 *  4. substring(); A portion if a string is returned. A starting and ending location are passed to this fucntion. 
 *  5. lastIndexOf(); - Returns the index within the string of the last occurence of the specified value, or -1 if not found. 
 *  6. replace(); - Used to find a match between a regualr expression and a string, and to replace the matched substring with a new substring. 
 *  7. search(); - Executes the search for a match o a regular expression. If successful, search returns the index of the match inside the 
 *  string, otherwise it returs -1.
 *  8. slice(); - Extracts a section of a string and returns a new string. 
 *  9. split(); - Splits a string into an array of strings by seperating the string into sunstrings. 
 * 10. length(); - The length of the string is returned as the count of the number characters it contains. 
 * 11. toLowerCase(); - Converts the entire string to lower case. 
 * 12. toUpperCase(); -Converts the entire string to upper Case.
 */
 /**
 * //USE:
 * 
 * // Manipulating strings with operators */
        let foundedIn = 1901; 
        let university = "Grambling State University was founded in" + " " + foundedIn + ".";
        console.log(university);// prints => "Grambling State University was founded in 1901."
        
    // Manipulating string switch methods //

   //1. concat();
       let imHome = "Lucy, ";
       console.log(imHome.concat("i'm home!!!!"));//prints => "Lucy, i'm home!!!!" as a con catcatonated string. 
   //2. slice();
       let sliceOfPizza = "Pepperoni Cheese";
       console.log(sliceOfPizza.slice(0,9));// prints => "Pepperoni"
   //3. split();
       let sundae = 'Butter Pecan, Bananas, Caramel, Pecan Pieces';
       console.log(sundae.split(" "));// prints => ['Butter Pecan', 'Bananas', 'Caramel', 'Pecan Pieces']
   //4. toLowerCase();
       let stopShouting = "WHERE ARE YOU!";
       console.log(stopShouting.toLowerCase(" "));// prints => "where are you!"
   //5. toUpperCase();
       let speakUp = "can you hear me?"; 
       console.log(speakUp.toUpperCase(" ")); // prints => "CAN YOU HEAR ME?"
   //6. length();
       let ruler = ("12 Inches"); 
       console.log(ruler.length);//prints => 9 to the console.
       