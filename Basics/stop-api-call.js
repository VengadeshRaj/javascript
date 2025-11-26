const controller = new AbortController();

const { signal } = controller;

fetch("https://jsonplaceholder.typicode.com/todos/1", { signal })
  .then((response) => response.json())
  .then((json) => console.log(json));

// Below line can abort the connection and stop the api call
controller.abort();
