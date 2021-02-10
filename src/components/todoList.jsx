import React from "react";

const TodoList = (props) => {
//   console.log("props in list", props);

  //   const toggleCompleted = (e) => {
  // console.log(e.target.checked)
  // e.target.checked = e.target.checked;
  //   }

  const toggleTask = (id) => (e) => {
    console.log(id, e.target)
    props.toggleCompleted(id)
  }

  return (
    <div>
      {props.currentTab === "All" && (
        <>
          {props.tasks.map((task) => {
            return (
              <div key={task.id} className="task">
                <input
                  type="checkbox"
                  // checked={task.completed === true ? true : false}
                    onClick={toggleTask(task.id)}
                ></input>
                <span>{task.name}</span>
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
                    // checked={task.completed === true ? true : false}
                      onClick={toggleTask}
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
                <div key={task.id} className="task">
                  <input
                    type="checkbox"
                    // checked={task.completed === true ? true : false}
                      onClick={toggleTask}
                  ></input>
                  <span>{task.name}</span>
                </div>
              );
            }
          })}
        </>
      )}
    </div>
  );
};

export default TodoList;
