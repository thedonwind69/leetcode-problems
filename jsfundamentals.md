ASYNC AND AWAIT:

// In JavaScript, async and await are used to work with asynchronous code in a more synchronous and readable manner. They are often used with functions that return Promises. Here's an explanation of each:

// async Function:

// The async keyword is used to declare a function as asynchronous.
// An async function always returns a Promise, whether you explicitly return one or not.
// Example:


async function fetchData() {
  // Asynchronous operations here
  return 'Data fetched'; // This value is wrapped in a resolved Promise automatically
}

// await Operator:

// The await keyword can only be used inside an async function.
// It is used to pause the execution of the function until a Promise is resolved or rejected.
// It is typically used with Promise-returning functions to wait for their completion.
// Example:

// javascript

async function fetchAndProcessData() {
  try {
    const data = await fetchData(); // Wait for fetchData() to complete
    // Process the data once it's available
    console.log(data);
  } catch (error) {
    // Handle errors if fetchData() or subsequent operations fail
    console.error('Error:', error);
  }
}

console.log(fetchAndProcessData());
// In this example, fetchData() is an asynchronous function that returns a Promise. The await keyword is used to pause the execution of fetchAndProcessData() until the Promise returned by fetchData() is resolved.

// Note:

// You can use try...catch to handle errors when using await. If the Promise is rejected, the code inside the catch block will execute.
// You can use await with various asynchronous operations, including fetching data from an API, reading/writing to files, making database queries, and more.
// Async/await simplifies working with asynchronous code compared to using callbacks or Promises directly, making your code more readable and maintainable.



// 1. `var`:
//    - Function Scope: Variables declared with `var` are function-scoped, which means they are only accessible within the function where they are defined.
//    - Hoisting: Variables declared with `var` are hoisted to the top of their containing function or global scope. This means you can use a `var` variable before it's declared, but it will be initialized with `undefined`.
//    - Reassignment: Variables declared with `var` can be reassigned new values.

// ```javascript
// function example() {
//   if (true) {
//     var x = 10;
//   }
//   console.log(x); // 10
// }
// ```

// 2. `let`:
//    - Block Scope: Variables declared with `let` are block-scoped, which means they are accessible only within the block (e.g., within an `if`, `for`, or a function) where they are defined.
//    - Hoisting: Like `var`, `let` variables are hoisted, but they are not initialized. Trying to use a `let` variable before its declaration results in a `ReferenceError`.
//    - Reassignment: `let` variables can be reassigned new values.

// ```javascript
// function example() {
//   if (true) {
//     let x = 10;
//   }
//   console.log(x); // ReferenceError: x is not defined
// }
// ```

// 3. `const`:
//    - Block Scope: Variables declared with `const` are also block-scoped.
//    - Hoisting: Similar to `let`, `const` variables are hoisted but not initialized. Using a `const` variable before its declaration results in a `ReferenceError`.
//    - Immutable Value: `const` variables cannot be reassigned after they are initially assigned. However, if the value is an object or array, you can still modify the properties or elements of that object or array.

// ```javascript
// const pi = 3.14159;
// pi = 3.14; // Error: Assignment to constant variable

// const person = { name: "John" };
// person.age = 30; // This is allowed, as it modifies the object's property.
// ```

// In summary:
// - Use `const` when you want to declare a variable that should never be reassigned.
// - Use `let` when you need to reassign a variable.
// - Avoid using `var` in modern JavaScript, as it has scoping issues that can lead to unexpected behavior. Use `let` or `const` instead, depending on whether you need reassignment.