import PropTypes from "prop-types";

const Button = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="btn"
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;

// ===============================================================
// NOTES
// Button.propTypes = {
//     text: PropTypes.string,
//     color: PropTypes.string,
//   };

// The code above is using PropTypes to define the expected data types for the props of a component called `Button`. PropTypes is a library in React that helps with type-checking and validating the props passed to components.

// In the code snippet, `Button.propTypes` is an object that defines the expected propTypes for the `Button` component. Here's what each line does:

// - `text: PropTypes.string`: It specifies that the `text` prop of the `Button` component should be a string type. This means that when using the `Button` component, you should pass a string value to the `text` prop.

// - `color: PropTypes.string`: It specifies that the `color` prop of the `Button` component should also be a string type. Similar to the `text` prop, you should pass a string value to the `color` prop.

// By defining propTypes for the `Button` component, you can ensure that the props passed to the component adhere to the expected data types. If a prop with an incorrect data type is provided, React will issue a warning in the console during development, helping you identify and fix potential issues early on.

// Overall, using PropTypes helps with code maintainability, improves development workflow, and enhances code reliability by catching potential bugs related to prop types.
