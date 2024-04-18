
import React from 'react';

const ItemsComponent = () => {
  const [items, setItems] = React.useState([
    { id: 1, name: 'apple' },
    { id: 2, name: 'banana' },
    { id: 3, name: 'orange' }
  ]);

  // Function to remove an item by its id
  const removeItem = (idToRemove) => {
    setItems(prevItems => prevItems.filter(item => item.id !== idToRemove));
  };

  // Function to add a new item at a specific index
  const addItem = (index, newItem) => {
    setItems(prevItems => [
      ...prevItems.slice(0, index),
      newItem,
      ...prevItems.slice(index)
    ]);
  };

  return (
    <div>
      <h1>Items List</h1>
      {items.map((item, index) => (
        <div key={index}>
          <span>{item.name}</span>
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}
      <button onClick={() => addItem(1, { id: 4, name: 'grape' })}>Add Grape</button>
    </div>
  );
};

export default ItemsComponent;
