import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const TodoList = (props) => {
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
                  onClick={() => props.toggleCompleted(task.id)}
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
                    onClick={() => props.toggleCompleted(task.id)}
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
                      onClick={() => props.toggleCompleted(task.id)}
                    ></input>
                    <span style={{ textDecoration: "line-through" }}>
                      {task.name}
                    </span>
                  </div>
                  <button
                    className="delete-btn"
                    onClick={() => props.removeTask(task.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              );
            }
          })}
          {props.completedTasks.length > 0 && (
            <button
              className="delete-all-btn"
              onClick={() => props.removeAllCompleted()}
            >
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
