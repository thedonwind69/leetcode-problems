// A closure is the combination of a function 
// and the lexical environment from which it was declared. 
// Closure allows a function to access variables from an enclosing scope — environment — 
// even after it leaves the scope in which it was declared.
// Closures are functions, “within a function” that allow you to access a 
// certain variable outside of it’s scope. Accessing the “private variable” outside of the scope. 
 
// EXAMPLE:

function sayHelloToPerson (name) {
    var saying = "HEYYYYY!";
    function sayHello () {
        console.log(saying + " " + name);
    }
    return sayHello;
}

var sayHelloToDon = sayHelloToPerson("Don");
var sayHelloToSuthee = sayHelloToPerson("Suthee");
sayHelloToDon();
sayHelloToSuthee();

// The importance of closures in this example, is that it keeps the code clean and concise.
// We don't need to create a new function for each person we want to say "Hello" to, we can r
// e-use the same
// logic over and over, by simply nesting a function WITHIN the ENCLOSING function, and just storing
// the result of that function in a new created variable. It is beter than creating a new function for 
// each "name" we want to pass into the function.

function rate () {

    var time = 0;
    function increase () {
        time += 50;
        console.log(time);
    }

    return increase;

}

var boost = rate();
boost();
boost();