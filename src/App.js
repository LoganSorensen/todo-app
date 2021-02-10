import React, { useState } from "react";

import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";

import "./App.css";

const App = () => {
  const [currentTab, setCurrentTab] = useState("All");
  const [tasks, setTasks] = useState([]);

  const changeTab = (e) => {
    setCurrentTab(e.target.innerHTML);
  };

  const toggleCompleted = (id) => {
    const newTaskList = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed,
        };
      } else {
        return task;
      }
    });
    setTasks(newTaskList);
  };

  const addTask = (taskName) => {
    setTasks([
      ...tasks,
      {
        name: taskName,
        id: Date.now(),
        completed: false,
      },
    ]);
  };

  console.log(tasks);

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
          <TodoForm addTask={addTask} />
        ) : (
          <></>
        )}
        <TodoList
          currentTab={currentTab}
          tasks={tasks}
          toggleCompleted={toggleCompleted}
        />
      </div>
    </div>
  );
};

export default App;
