// import React from "react"; //We dont need to import React in every component.
// It used to be the case in older versions of React. But now we can just import it once in index.js and use it everywhere.

import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
      {/* <h1 style={headingStyle}>{title}</h1> */}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker", //since we have defined the title in App.js,it will override this default value.
};

Header.propTypes = {
  title: PropTypes.string.isRequired, //isRequired is optional
};

//Can do inline styling or styling like this or use the index.css file.
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };

export default Header;

// ===============================================================
//NOTES
// The `<div>` and `<header>` tags are both HTML elements used for structuring and organizing content on a web page, but they serve different purposes:

// 1. `<div>` (Division) Tag:
//    - The `<div>` tag is a generic container that does not carry any semantic meaning. It is used to group and section off content for styling or layout purposes.
//    - It is a block-level element and is commonly used as a wrapper to group related elements together.
//    - Developers can apply CSS styles or classes to `<div>` elements to control their appearance or behavior.
//    - It is a versatile element that can be used in various contexts and doesn't have any inherent meaning or impact on the document structure or accessibility.

// Example:
// ```html
// <div class="container">
//   <h1>Hello, World!</h1>
//   <p>This is a paragraph.</p>
// </div>
// ```

// 2. `<header>` Tag:
//    - The `<header>` tag represents the introductory or containing section of a document or a specific section of a web page.
//    - It is typically used to define the header section of a page, which may include the site's logo, navigation menu, page title, or other introductory content.
//    - It is a block-level element and should typically appear at the top of the document or within a `<body>` element.
//    - Semantically, it provides meaning to the content it wraps and helps in structuring the document, especially for screen readers and other assistive technologies.

// Example:
// ```html
// <header>
//   <h1>My Website</h1>
//   <nav>
//     <ul>
//       <li><a href="#">Home</a></li>
//       <li><a href="#">About</a></li>
//       <li><a href="#">Contact</a></li>
//     </ul>
//   </nav>
// </header>
// ```

// In summary, while both `<div>` and `<header>` are used for structuring content, `<div>` is a generic container for layout purposes, whereas `<header>` has a specific semantic meaning and is used for introductory or containing sections of a document or web page.

// ===============================================================

//what is a prop in js?

// A prop is a special keyword in React, which stands for properties and is being used for passing data from one component to another.

// In JavaScript, a prop (short for "property") refers to a value that is passed to a component or function as an input or configuration. It allows you to customize or configure the behavior and appearance of a component by providing data from the parent component or the caller.

// In the context of React, props are used to pass data from a parent component to its child components. Props are immutable, meaning that they cannot be modified by the child components. They are passed down the component tree, enabling data flow and communication between components.

// Props are defined as attributes in JSX when rendering a component. For example:

// ```jsx
// <ChildComponent propName={propValue} />
// ```

// In the above code, `propName` is a prop that is passed to the `ChildComponent` component, with its value being `propValue`.

// Within the child component, props can be accessed like function arguments or as properties of the `props` object. For example:

// ```jsx
// function ChildComponent(props) {
//   return <p>{props.propName}</p>;
// }
// ```

// In this case, the value of the prop `propName` is accessed using `props.propName` and rendered as the content of the `<p>` element.

// Props allow you to create reusable and configurable components, as the parent component can pass different values to the same prop, resulting in different behavior or rendering in the child component. Props provide a way to pass data and communicate between components in React applications.
