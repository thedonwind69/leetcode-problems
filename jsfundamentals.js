// ASYNC AND AWAIT:

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
// In this example, fetchData() is an asynchronous function that returns a Promise. The await keyword is used to pause the execution of fetchAndProcessData() until the Promise returned by fetchData() is resolved.

// Note:

// You can use try...catch to handle errors when using await. If the Promise is rejected, the code inside the catch block will execute.
// You can use await with various asynchronous operations, including fetching data from an API, reading/writing to files, making database queries, and more.
// Async/await simplifies working with asynchronous code compared to using callbacks or Promises directly, making your code more readable and maintainable.