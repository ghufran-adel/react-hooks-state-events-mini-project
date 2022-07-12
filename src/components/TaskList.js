import React from "react";
import Task from "./Task";
import { useState } from "react";

function TaskList({filteredTasks, onDeleteTask}) {
  
 
  

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {filteredTasks.map((task) => (
          <Task  onDeleteTask={onDeleteTask} text={task.text} category={task.category} key={task.text}/>
        ))}
    </div>
  );
}

export default TaskList;
