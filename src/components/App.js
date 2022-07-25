import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import {useState} from 'react';

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState("All")

  const onTaskFormSubmit = (newTask) =>
  {
    setTasks([...tasks, newTask]);
  }

  const onDeleteTask = (deleteTask) =>
  {
    setTasks(tasks.filter((task) => task.text !== deleteTask));
  }

  const taskstoDisplay = tasks.filter((task) => {
    if(category==="All")
    {
      return true;
    }
    else
    {
      return task.category === category;
    }
  })

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={category} setCategory={setCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={taskstoDisplay} deleteTask={onDeleteTask}/>
    </div>
  );
}

export default App;
