import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit, nameData, categoryData, nameFunc, categoryFunc }) {

  console.log(nameData, categoryData)
  function handleFormSubmit(event) {
    event.preventDefault();
    const newItem = {
      id: uuid(),
      name: nameData,
      category: categoryData 
    }
    onItemFormSubmit(newItem)
    console.log(newItem)
  }

  function handleNameData(e) {
    console.log(e.target.value)
    nameFunc(e.target.value)
  }

  function handleCategoryFunc(e) {
    categoryFunc(e.target.value)
  }

  return (
    <form className="NewItem" onSubmit={handleFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={nameData} onChange={handleNameData}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategoryFunc}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
