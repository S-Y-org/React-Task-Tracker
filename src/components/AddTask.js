import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault(); //Prevents the page from submitting to a file

    if (!text) {
      alert("Please add a task");
      return;
    }

    onAdd({ text, day, reminder }); //This is the prop that we passed in from App.js. We are passing in the text, day, and reminder values from the form to the onAdd function in App.js

    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => {
            setText(e.target.value); //e.target.value is the value of the input field(setText to whatever that is typed in)
          }}
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Add Day & Time"
          value={day}
          onChange={(e) => {
            setDay(e.target.value); //e.target.value is the value of the input field(setText to whatever that is typed in)
          }}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder} //This is a boolean value
          value={reminder}
          onChange={(e) => {
            setReminder(e.currentTarget.checked); //Since this is a checkbox, we need to use e.currentTarget.checked. This will give us a true or false value if the checkbox is checked or not.
          }}
        />
      </div>
      <input type="submit" value="Save Task " className="btn btn-block" />
    </form>
  );
};

export default AddTask;
