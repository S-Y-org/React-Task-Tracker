import { useState } from "react";

const AddTask = () => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  return (
    <form className="add-form">
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
