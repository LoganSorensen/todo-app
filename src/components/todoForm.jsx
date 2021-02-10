import React, {useState} from "react";

const TodoForm = (props) => {
    const [newTask, setNewTask] = useState("");

    const handleChange = (e) => {
        setNewTask(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTask(newTask);
        setNewTask("")
    }

  return (
    <form>
      <input
        type="text"
        placeholder="add task"
        className="addTaskInput"
        value={newTask}
        onChange={handleChange}
      ></input>
      <button className="add-task-btn" onClick={handleSubmit}>
        Add
      </button>
    </form>
  );
};

export default TodoForm;
