//To use state inside of a function we use a special hook called useState
// import { useState } from "react";

import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Tasks;

//===============================================================

//NOTES

//map() creates a new array or list populated with the results of calling a provided function on every element in the calling array.

// It takes in a function -->  map((task) => ( <h3>{task.text}</h3> )) and returns a new array with the results of the function.

//Lets call each task as task. Thats wht we have inside the map function.
//map((task).......

//===============================================================

//meaning of destructure in react?

// In React, destructuring --> ({ }) ,refers to a feature in JavaScript that allows you to extract multiple values from an object or an array and assign them to separate variables in a concise and structured way. It provides a convenient syntax for accessing and using specific properties or elements without needing to reference the original object or array directly.

// In the context of React components, destructuring is commonly used to extract and assign props values to variables, making it easier to access and use the props within the component. It helps in writing cleaner and more readable code by reducing the repetition of accessing object properties or array elements. Destructuring can be done both for object props and array props in React components.

//===============================================================

//meaning of rendering out?

// Rendering out in the context of React refers to the process of generating and displaying the desired output or UI elements based on the current state and props of a React component. When a React component is rendered, it produces a virtual representation of the user interface, which is then translated into the actual DOM (Document Object Model) elements that are rendered on the web page.

// Rendering out involves evaluating the JSX (JavaScript XML) code within a React component's render method or functional component, which describes the structure and content of the UI. This JSX is transformed into React elements, which are lightweight JavaScript objects representing the DOM nodes.

// React components are re-rendered whenever their state or props change, and the changes are reflected in the rendered output. React uses a diffing algorithm to determine the minimal set of changes needed to update the DOM efficiently, resulting in optimal performance.

// In summary, rendering out in React refers to the process of transforming JSX into React elements and updating the DOM to reflect the changes in the component's state and props.
