// FilterSortUI.js

import React from "react";

const FilterSortUI = ({ airlines, onFilterChange, onSortChange }) => {
  return (
    <div className="filter-sort-container">
      <div className="filter-container">
        <label htmlFor="airlineFilter">Filter by Airline:</label>
        <select
          id="airlineFilter"
          onChange={(e) => onFilterChange(e.target.value)}
        >
          <option value="all">All Airlines</option>
          {airlines.map((airline, index) => (
            <option key={index} value={airline}>
              {airline}
            </option>
          ))}
        </select>
      </div>
      <div className="sort-container">
        <label htmlFor="sortBy">Sort by Fare:</label>
        <select id="sortBy" onChange={(e) => onSortChange(e.target.value)}>
          <option value="all">All</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSortUI;
