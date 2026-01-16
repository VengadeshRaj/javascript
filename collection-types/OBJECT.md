# Object in JavaScript

simple structured data where data is stored as key–value pairs.

## Keys:
Keys are always strings or symbols, Even if you write numbers, JS converts them to strings

## Example:
```js
const user = {
  name: "John",
  age: 20,
  isActive: true
};

console.log(user.age)
```



## Methods:
```js
Object.hasOwn(obj, "a"); // true
Object.assign({}, obj);  // clone
Object.freeze(obj);      // make immutable
Object.seal(obj);        // prevent add/remove
```

## Iterating an Object:
```js
const user = { name: "Raj", age: 30 };

// Keys
Object.keys(user);   // ["name", "age"]

// Values
Object.values(user); // ["Raj", 30]

// Entries
Object.entries(user); // [["name","Raj"], ["age",30]]

for (const [key, value] of Object.entries(user)) {
  console.log(key, value);
}
```

## Limitations in Object :
  - Keys only strings/symbols, cannot use objects as keys.
  - No build-in size, Need Object.keys(obj).length.
  - Not directly iterable, Need helper methods.


