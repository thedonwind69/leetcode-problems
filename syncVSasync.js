// Synchronous is blocking, it is code that only runs one line at a time.
// Asynchronous happens at the same time, meaning it can run a certain line of code 
// while running others too.
// Example:

function Synchronous () {
    console.log(1);
    console.log(2);
    console.log(3);
}

// Synchronous();

function Asynchronous () {
    console.log(1);
    setTimeout(function () {console.log(2)}, 1000);
    console.log(3);
}

Asynchronous();

// the asynchronous example runs 1, 3, and then 2. That's because SETTIMEOUT is an asynchronous function that 
// happens in the background.
