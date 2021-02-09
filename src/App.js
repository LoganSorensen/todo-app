import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [newTask, setNewTask] = useState("");
  const [allTasks, setAllTasks] = useState([]);
  const [currentTab, setCurrentTab] = useState("All");

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    if (newTask !== "" && allTasks.length > 0) {
      setAllTasks([
        ...allTasks,
        {
          id: allTasks[allTasks.length - 1].id + 1,
          taskName: newTask,
          completed: false,
        },
      ]);
    } else if (newTask !== "" && allTasks.length === 0) {
      setAllTasks([
        ...allTasks,
        {
          id: 0,
          taskName: newTask,
          completed: false,
        },
      ]);
    }
    setNewTask("");
  };

  const changeTab = (e) => {
    setCurrentTab(e.target.innerHTML);
  };

  const toggleCompleted = (id) => {
    allTasks.map((task) => {
      if (task.id === id) {
        console.log(task);
        task.completed = !task.completed;
      }
    });
  };

  console.log(currentTab);

  return (
    <div className="App">
      <h1>#todo</h1>
      <div className="todo">
        <nav>
          <div className="nav-item" onClick={changeTab}>
            <span>All</span>
            <div
              className={
                currentTab === "All" ? "highlight active" : "highlight"
              }
            ></div>
          </div>
          <div className="nav-item" onClick={changeTab}>
            <span>Active</span>
            <div
              className={
                currentTab === "Active" ? "highlight active" : "highlight"
              }
            ></div>
          </div>
          <div className="nav-item" onClick={changeTab}>
            <span>Completed</span>
            <div
              className={
                currentTab === "Completed" ? "highlight active" : "highlight"
              }
            ></div>
          </div>
        </nav>
        {currentTab === "All" || currentTab === "Active" ? (
          <form>
            <input
              type="text"
              placeholder="add task"
              className="addTaskInput"
              value={newTask}
              onChange={handleChange}
            ></input>
            <button className='add-task-btn' onClick={addTask}>Add</button>
          </form>
        ) : (
          <></>
        )}
        {currentTab === "All" ? (
          <div className="all-tasks">
            {allTasks.map((task) => {
              return (
                <div key={task.id} className="task">
                  <input
                    type="checkbox"
                    checked={task.completed === true ? true : false}
                    onChange={() => toggleCompleted(task.id)}
                  ></input>
                  <span
                    style={
                      task.completed === true
                        ? { textDecoration: "line-through", color: "#333333" }
                        : { textDecoration: "none" }
                    }
                  >
                    {task.taskName}
                  </span>
                </div>
              );
            })}
          </div>
        ) : currentTab === "Active" ? (
          <div className="active-tasks">
            {allTasks.map((task) => {
              if (task.completed === false) {
                return (
                  <div key={task.id} className="task">
                    <input
                      type="checkbox"
                      // checked={task.completed === true ? true : false}
                      onClick={() => toggleCompleted(task.id)}
                    ></input>
                    <span>{task.taskName}</span>
                  </div>
                );
              }
            })}
          </div>
        ) : (
          <div className="completed-tasks">
            {allTasks.map((task) => {
              if (task.completed === true) {
                return (
                  <div key={task.id} className="task">
                    <input
                      type="checkbox"
                      checked
                      onClick={() => toggleCompleted(task.id)}
                    ></input>
                    <span style={{textDecoration: 'line-through'}}>{task.taskName}</span>
                  </div>
            )
              }
            })}
            <button className='delete-btn'><i class="far fa-trash-alt"></i>delete all</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
