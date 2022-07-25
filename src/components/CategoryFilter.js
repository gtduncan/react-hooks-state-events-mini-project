import React from "react";

function CategoryFilter({categories, selectedCategory, setCategory}) {

  const categoryButtons = categories.map((category) => {
    const className = selectedCategory === category ? "selected" : null;
    return <button onClick={() => setCategory(category)} key={category} className={className}>{category}</button>
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
  }

export default CategoryFilter;
