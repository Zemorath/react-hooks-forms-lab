import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filterText, setFilterText] = useState('')

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  // function handleSearchChange(event) {
  //   setFilterText(event.target.value)
  // }

  console.log(filterText)


  const [inputName, setInputName] = useState('')
  const [selectCategory, setSelectCategory] = useState('Produce')
  
  const [itemList, addItem] = useState(items)

  function onItemFormSubmit(newItem) {
    
    addItem([...items, newItem])
  }

  function categoryData(e) {
    console.log(e )
    setSelectCategory(e)
  }

  function nameData(event) {
    console.log(inputName)
    setInputName(event)
  }



  const itemsToDisplay = itemList
  .filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  })
  .filter((item) => item.name.includes(filterText))
  

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} nameData={inputName} categoryData={selectCategory} nameFunc={nameData} categoryFunc={categoryData}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={setFilterText} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
