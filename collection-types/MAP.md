# Map in JavaScript

Map is a built-in collection object used to store key–value pairs, similar to an object, but with more power and flexibility.

## Keys:

Unlike normal objects, a Map can use any data type as a key—objects, arrays, functions, numbers, etc.

## Example:
    ```js
    const userMap = new Map();

    userMap.set("name", "Vengadesh");
    userMap.set(1, "ID");
    userMap.set({ role: "admin" }, true);

    console.log(userMap.get("name")); // Vengadesh
    console.log(userMap.size);        // 3
    ```

## Advantages:

1. Any type can be a key.
    ```js
    const m = new Map();
    const obj = {};

    m.set(obj, "value");
    console.log(m.get(obj)); // value

    ```
2. Maintains insertion order.
    ```js
    const m = new Map();
    m.set("a", 1);
    m.set("b", 2);

    for (let [key, value] of m) {
    console.log(key, value);
    }
    // a 1
    // b 2
    ```
3. Better performance for frequent add/remove.


## Methods:
    ```js
    map.set(key, value);   // Add / update
    map.get(key);          // Read
    map.has(key);          // Check existence
    map.delete(key);       // Remove
    map.clear();           // Remove all
    map.size;              // Count

    ```

