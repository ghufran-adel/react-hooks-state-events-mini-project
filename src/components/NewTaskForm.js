import React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("all");

  function handlTaskeChange(event) {
    setText(event.target.value);
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onTaskFormSubmit({ text, category, id: uuid() });
  }

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input onChange={handlTaskeChange} type="text" name="text" />
      </label>
      <label>
        Category
        <select onChange={handleCategoryChange} name="category">
          {/* render <option> elements for each category here */}
          {categories.map((category) => (
            <option value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input  type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
