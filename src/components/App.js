import React from "react";
import CategoryFilter from "./CategoryFilter";
import { useState } from "react";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [categories, setCategories] = useState(CATEGORIES);
  const [category, setCategory] = useState("All");


  const filteredTasks = tasks.filter(task => {
    if (category === "All") {
      return true;
    }
    return task.category === category;
  }
  );
  function onAddTask(task) {
    setTasks([...tasks, task]);
  }


  function handleDeleteTask(deletedTaskText) {
    setTasks(tasks.filter((task) => task.text !== deletedTaskText));
  }
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        selectedCategory={category} setCategory={setCategory} categories={categories}/>
      <NewTaskForm categories={categories} onTaskFormSubmit ={onAddTask}/>
      <TaskList filteredTasks={filteredTasks}  onDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;
