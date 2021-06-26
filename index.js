//Create an anonymous fucntion and set it equal to a variable.


/* Your function should:
a) If passed a number, return the tripled value.
b) If passed a string, return the string “ARRR!”
c) Be sure to test your function before moving on the next part. */
//TRIED TO MAKE THIS FUNCTION WITHOUT NAMING IT

let timesThree = function(n) {
  if (typeof(n) !== "number") {
    return "ARRR";
  } else {
   return n * 3;
  }
 };



/* Use your fuction and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/

let arr = ['Elocution', 21, 'Clean teeth', 100];


let tripled = arr.map(timesThree)

console.log(arr);

console.log(tripled);