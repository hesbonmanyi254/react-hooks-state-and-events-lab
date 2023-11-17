// ShoppingList.js
import React, { useState } from 'react';

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredItems =
    selectedCategory === 'all'
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <div>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="all">All Categories</option>
        <option value="category1">Category 1</option>
        <option value="category2">Category 2</option>
        {/* Add more options based on your categories */}
      </select>

      <ul>
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
