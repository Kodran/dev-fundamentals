# Development First Steps

## Development Language
- [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
  - [Servidor de JavaScript - Node.js](https://nodejs.org/es/)
- [JavaScript Doc Helpers](https://www.w3schools.com/js/default.asp)

## Data Types

- Integer (Number)
```js
    var myInt = 1 
    let myInt = 2
    const myInt = 4
```
- String (Text) - [Example](/javascript/data-types/strings.js)
```js
    var myString = "My Text Here" 
    var myString = 'My Text Here'

    To Remove White Spaces
    var myStringWithWhiteSpaces = ' My Text Here      '
    myStringWithWhiteSpaces = myStringWithWhiteSpaces.trim()
    console.log(myStringWithWhiteSpaces) // "My Text Here"
```
- [Boolean](https://www.w3schools.com/js/js_booleans.asp)  - [Example](/javascript/data-types/boolean.js)
    Boolean Values
    Very often, in programming, you will need a data type that can only have one of two values, like

    YES / NO
    ON / OFF
    TRUE / FALSE
    For this, JavaScript has a Boolean data type. It can only take the values true or false.

- Array (list) - [Example](/javascript/data-types/arrays.js)
```js            
var myNumberList = [1, 2, 3, 4, 5]
var myStringList = ["String 1", "String 2", "String 3" ,"String 4"]
var myObjectList = [{name: "jorge", lastname: "castro"},{name: "memo", lastname: "zamora"},{name: "cheko", lastname: "mayo"}] 

To add an element to a list
var myEmptyList = []
myEmptyList.push(1) 
console.log(myEmptyList) // [1]

myEmptyList.push(61) 
console.log(myEmptyList) // [1, 61]

myEmptyList.push(5) 
console.log(myEmptyList) // [1, 61, 5]

To Remove the last element of a list

myEmptyList.pop()
console.log(myEmptyList) // [1, 61]

To Remove the first element of a list

myEmptyList.shift()
console.log(myEmptyList) // [61]

```
[Array Deletion](https://www.w3schools.com/js/js_array_methods.asp)

Array Index
Array elements are accessed using their index number:
Array indexes start with 0:

[0] is the first array element
[1] is the second
[2] is the third ...

```js
var myStringList = ["String 1", "String 2", "String 3" ,"String 4"]
var myStringInTheList = myStringList[3];
console.log(myStringInTheList) // "String 4"

```
- Object (JSON - JavaScript Object Notation) - [Example](/javascript/data-types/objects.js)
```js
    var person = {
        name: "My Name",
        lastName: "My Last Name",
        age: 32,
        pets:[
            "kia",
            "molly"
        ]
    }
    
```

## Functions
[Example](/javascript/functions.js)

A JavaScript function is a block of code designed to perform a particular task.
A JavaScript function is executed when "something" invokes it (calls it).

Example:
```js

function Sum(x, y){    
    var result = x + y;
    return result;
}

function RunApp(){
    var result = Sum(1, 5)
    console.log(result) // 6
}

RunApp();

```
JavaScript Function Syntax
A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

Function names can contain letters, digits, underscores, and dollar signs (same rules as variables)

The parentheses may include parameter names separated by commas:
(parameter1, parameter2, ...)

The code to be executed, by the function, is placed inside curly brackets: {}

```js
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}
```

Function parameters are listed inside the parentheses () in the function definition.

Function arguments are the values received by the function when it is invoked.

Inside the function, the arguments (the parameters) behave as local variables.

## Conditions 
[Example](/javascript/conditions.js)

Conditional statements are used to perform different actions based on different conditions.

Conditional Statements
Very often when you write code, you want to perform different actions for different decisions.

You can use conditional statements in your code to do this.

In JavaScript we have the following conditional statements:

- Use if to specify a block of code to be executed, if a specified condition is true
- Use else to specify a block of code to be executed, if the same condition is false
- Use else if to specify a new condition to test, if the first condition is false
- Use switch to specify many alternative blocks of code to be executed

The if Statement
Use the if statement to specify a block of JavaScript code to be executed if a condition is true.

Syntax
```js
if (condition) {
  //  block of code to be executed if the condition is true
}
```
Note that if is in lowercase letters. Uppercase letters (If or IF) will generate a JavaScript error.

Example
Make a "Good day" greeting if the hour is less than 18:00:

```js
if (hour < 18) {
  greeting = "Good day";
}
```
The result of greeting will be:

Good day