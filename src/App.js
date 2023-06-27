import React from "react";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="container">
      <Header title="Hello" />
      {/* If u want to pass a num/boolean in title use {} 
      Ex: <Header title={1}} /> */}
    </div>
  );
};

export default App;

// ===============================================================
//Notes

//If you at the code inside the return statement, you'll see that it's just HTML. No it's not. It's JSX.
// JSX stands for "JavaScript XML." It is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. JSX is commonly used in React.js to define the structure and appearance of user interfaces. It provides a convenient way to create and manipulate DOM elements, making it easier to build dynamic and interactive web applications.

// For example we cant use class in JSX because it's a reserved word in JavaScript. So we use className instead.
// We can't use for in JSX because it's a reserved word in JavaScript. So we use htmlFor instead.

// ===============================================================

// In JavaScript, both double quotes (`" "`) and single quotes (`' '`) can be used to define strings. They are interchangeable and can be used interchangeably in most cases.

// For example, you can define a string using double quotes:

// ```javascript
// var message1 = "Hello, world!";
// ```

// Or you can define the same string using single quotes:

// ```javascript
// var message2 = 'Hello, world!';
// ```

// Both `message1` and `message2` will contain the same string value.

// However, there are some situations where you may need to use one over the other. For instance, if you need to include a quote character within a string, you can use the opposite type of quotes to enclose the string, or you can escape the quote character using a backslash (`\`).

// Here's an example:

// ```javascript
// var message = "He said, \"Hello!\"";
// ```

// In this case, double quotes are used to enclose the string, and the inner double quote is escaped with a backslash to include it as part of the string.

// Similarly, you can achieve the same result using single quotes:

// ```javascript
// var message = 'He said, "Hello!"';
// ```

// So, while both double quotes and single quotes can be used interchangeably for defining strings, there may be cases where using one over the other is more convenient or necessary depending on the string content.

// ===============================================================

// Difference between this code ;

// function App() {
//   return (
//     <div className="container">
//       <Header />
//     </div>
//   );
// }

// and this code ;

// const App = () => {
//   return(
//     <div className="container">
//       <Header />
//     </div>
//   )
// }

// The two code snippets you provided are written in different syntax styles, but they essentially achieve the same result. The difference lies in how the function component is defined:

// 1. Code Snippet 1:
// ```jsx
// function App() {
//   return (
//     <div className="container">
//       <Header />
//     </div>
//   );
// }
// ```

// This is a regular function component defined using the `function` keyword. The component name is `App`, and it returns JSX (JavaScript XML) code enclosed in parentheses. The JSX code represents the structure and content of the component. In this case, it renders a `<div>` element with the class name "container" and includes a nested `<Header>` component.

// 2. Code Snippet 2:
// ```jsx
// const App = () => {
//   return(
//     <div className="container">
//       <Header />
//     </div>
//   )
// }
// ```

// This is an arrow function component defined using the arrow function (`=>`) syntax. The component name is also `App`, but it is defined as a constant using the `const` keyword. It also returns JSX code enclosed in parentheses, which represents the component's structure and content. The rendered JSX is the same as in the previous snippet, with a `<div>` element and a nested `<Header>` component.

// In terms of functionality, both snippets create an `App` component that renders a `<div>` element with the class name "container" and includes a nested `<Header>` component. The difference lies in the syntax used to define the component. The arrow function syntax (`() => {}`) is a shorthand way of writing functions in JavaScript and has become popular in modern React development. It provides a concise syntax and lexical scoping of `this`, but its functionality is the same as the regular function syntax.
