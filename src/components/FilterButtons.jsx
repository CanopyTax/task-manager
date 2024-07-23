import React from "react";
import UserFilter from "./UserFilter";

function FilterButtons({ setFilter, setUserFilter, users }) {
  return (
    <div className="filter-buttons">
      <div className="status-filter">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={() => setFilter("incomplete")}>Incomplete</button>
      </div>
      <UserFilter
        setUserFilter={(e) => setUserFilter(e.target.value)}
        users={users}
      />
    </div>
  );
}

export default FilterButtons;
