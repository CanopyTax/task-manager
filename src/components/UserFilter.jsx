import React from "react";

function UserFilter({ setUserFilter, users }) {
  return (
    <div className="user-filter">
      <label>Filter by user:</label>
      <select onChange={setUserFilter}>
        <option value="all">All</option>
        {users.map((user) => (
          <option value={user.id}>{user.name}</option>
        ))}
      </select>
    </div>
  );
}

export default UserFilter;
