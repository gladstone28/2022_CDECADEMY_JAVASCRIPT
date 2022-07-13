/*The forecast today is 293 Kelvin. 
Create a variable named kelvin, and set it equal to 293.
The value saved to kelvin will stay constant. Choose the variable type with this in mind.
*/
const kelvin = 293;
//convert Kelvin to Celsius by subtracting 273 from the kelvin variable. Store the result in another variable, named celsius
const celsius = kelvin - 273;
let fahrenheit = celsius * (9 / 5) + 32;
/*
When you convert from Celsius to Fahrenheit, you often get a decimal number.

Use the .floor() method from the built-in Math object to round down the Fahrenheit temperature. Save the result to the fahrenheit variable.
*/

fahrenheit = Math.floor(fahrenheit);
/*
Use console.log and string interpolation to log the temperature in fahrenheit to the console as follows:
*/

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
