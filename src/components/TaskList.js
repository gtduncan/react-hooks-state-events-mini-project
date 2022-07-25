import React from "react";
import Task from "./Task";

function TaskList({tasks, deleteTask}) {
  const tasksMapped = tasks.map((task) => {
    return <Task key={task.text} text={task.text} category={task.category} deleteTask={deleteTask}/>
  })
  return (
    <div className="tasks">
      {tasksMapped}
    </div>
  );
}

export default TaskList;
