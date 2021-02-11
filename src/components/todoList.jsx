import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const TodoList = (props) => {
  const toggleTask = (id) => {
    props.toggleCompleted(id);
  };

  const deleteTask = (id) => {
    props.removeTask(id);
  };

  const deleteAllCompleted = () => {
    props.removeAllCompleted();
  };

  return (
    <div>
      {props.currentTab === "All" && (
        <>
          {props.tasks.map((task) => {
            return (
              <div key={task.id} className="task">
                <input
                  type="checkbox"
                  defaultChecked={task.completed === true ? true : false}
                  onClick={() => toggleTask(task.id)}
                ></input>
                <span
                  style={
                    task.completed === true
                      ? { textDecoration: "line-through" }
                      : { textDecoration: "none" }
                  }
                >
                  {task.name}
                </span>
              </div>
            );
          })}
        </>
      )}
      {props.currentTab === "Active" && (
        <>
          {props.tasks.map((task) => {
            if (task.completed === false) {
              return (
                <div key={task.id} className="task">
                  <input
                    type="checkbox"
                    onClick={() => toggleTask(task.id)}
                  ></input>
                  <span>{task.name}</span>
                </div>
              );
            }
          })}
        </>
      )}
      {props.currentTab === "Completed" && (
        <>
          {props.tasks.map((task) => {
            if (task.completed === true) {
              return (
                <div key={task.id} className="completed-task">
                  <div className="task">
                    <input
                      type="checkbox"
                      defaultChecked={true}
                      onClick={() => toggleTask(task.id)}
                    ></input>
                    <span style={{ textDecoration: "line-through" }}>
                      {task.name}
                    </span>
                  </div>
                  <button
                    className="delete-btn"
                    onClick={() => deleteTask(task.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              );
            }
          })}
          {props.completedTasks.length > 0 && (
            <button className="delete-all-btn" onClick={deleteAllCompleted}>
              <FontAwesomeIcon icon={faTrash} />
              delete all
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default TodoList;
