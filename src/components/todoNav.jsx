import React from "react";

const TodoNav = ({ currentTab, changeTab }) => {
  return (
    <nav>
      <div className="nav-item" onClick={() => changeTab("All")}>
        <span>All</span>
        <div
          className={currentTab === "All" ? "highlight active" : "highlight"}
        ></div>
      </div>
      <div className="nav-item" onClick={() => changeTab("Active")}>
        <span>Active</span>
        <div
          className={currentTab === "Active" ? "highlight active" : "highlight"}
        ></div>
      </div>
      <div className="nav-item" onClick={() => changeTab("Completed")}>
        <span>Completed</span>
        <div
          className={
            currentTab === "Completed" ? "highlight active" : "highlight"
          }
        ></div>
      </div>
    </nav>
  );
};

export default TodoNav;
