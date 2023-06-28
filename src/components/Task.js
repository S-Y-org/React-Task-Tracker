import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`} //if task.reminder is true then add reminder class to task, else add nothing
      //We use `` instead of "" because we want to use a template literal. That means we can use ${} to add a variable inside the string.
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;

// // ===============================================================
// //Notes
//what does the cursor:'pointer' do in this style={{ color: "red", cursor: "pointer" }}

// In the style `{{ color: "red", cursor: "pointer" }}`, the `cursor: "pointer"` property sets the appearance of the mouse cursor when it hovers over the element to a pointer icon.

// By setting `cursor` to `"pointer"`, it changes the default cursor appearance (usually an arrow) to a hand icon, indicating that the element is clickable or interactive. This is commonly used to provide visual feedback to users, letting them know that the element can be clicked or hovered over.

// In the given example, the element will have red text color (`color: "red"`) and when the mouse hovers over the element, the cursor will change to a pointer icon, indicating that it is clickable or interactive.

// // ===============================================================

//Meaning of States get passed down and Actions get passed up?

// The phrase "States get passed down and Actions get passed up" is a common principle in the context of state management in software development, particularly in frameworks like React.

// In this context, "States" refer to the current state or data that is relevant to a component. Components can have their own local state, and they can also receive state from their parent components. The concept of "passing down" states means that a parent component can pass its state or data to its child components as props. This allows child components to access and utilize the state provided by their parent.

// On the other hand, "Actions" typically refer to events or user interactions that trigger a change in the state. For example, clicking a button, submitting a form, or receiving data from an API can be considered actions. When an action occurs in a child component, it needs to notify its parent component about the action or request a state update. This is known as "passing up" actions because the child component communicates with its parent to handle the action and update the state accordingly.

// Overall, the principle emphasizes the flow of data and events between components. States flow down from parent to child components, allowing child components to access and use the data. Actions, on the other hand, are passed up from child to parent components to trigger state changes and updates.
