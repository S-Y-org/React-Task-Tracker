//To use state inside of a function we use a special hook called useState
import { useState } from "react";

const Task = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
  ]);
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};

export default Task;

//===============================================================

//NOTES

//map() creates a new array or list populated with the results of calling a provided function on every element in the calling array.

// It takes in a function -->  map((task) => ( <h3>{task.text}</h3> )) and returns a new array with the results of the function.

//Lets call each task as task. Thats wht we have inside the map function.
//map((task).......
