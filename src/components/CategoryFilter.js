import React from "react";
import useState from "react";

function CategoryFilter({selectedCategory,categories,setCategory}) {
  

 

  const categoryButtons = categories.map((category) => {
    const className = category === selectedCategory ? "selected" : null;
    return (
      <button
      onClick={() => setCategory(category)}
        key={category}
        className={className}
       >{category}</button>
    );
  });
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
