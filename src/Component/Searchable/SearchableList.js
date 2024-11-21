import React, { useState } from "react";

const SearchableList = ({ items, children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchResult = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
  );
  function handleChange(e) {
    setSearchTerm(e.target.value);
  }
  return (
    <div className="searchable-list">
      <input type="search" placeholder="search" onChange={handleChange} />
      <ul>
        {searchResult.map((item, index) => (
          <li key={index}> {children(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchableList;
