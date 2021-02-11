import React, { useState } from "react";

import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";

import "./App.css";

const App = () => {
  const [currentTab, setCurrentTab] = useState("All");
  const [tasks, setTasks] = useState([]);

  const completedTasks = [];
  tasks.map((task) => {
    if (task.completed === true) {
      completedTasks.push(task);
    }
  });

  const changeTab = (e) => {
    setCurrentTab(e.target.innerHTML);
  };

  const addTask = (taskName) => {
    console.log(taskName);
    if (taskName !== "") {
      setTasks([
        ...tasks,
        {
          name: taskName,
          id: Date.now(),
          completed: false,
        },
      ]);
    }
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

  const removeTask = (id) => {
    tasks.map((task) => {
      if (task.id === id && task.completed === true) {
        tasks.splice(tasks.indexOf(task), 1);
      }
    });
  };

  const removeAllCompleted = () => {
    const completedTasks = tasks.filter((task) => !task.completed);
    setTasks(completedTasks);
  };

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
          removeTask={removeTask}
          removeAllCompleted={removeAllCompleted}
          completedTasks={completedTasks}
        />
      </div>
    </div>
  );
};

export default App;
