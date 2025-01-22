import React from "react";
import styles from "@styles/filter.module.css";

const Filter = ({ handleFilter }) => {
  return (
    <div className={styles.filterWrapper}>
      <form onSubmit={(e) => handleFilter(e)}>
        <input
          type="text"
          id="inputFilter"
          placeholder="Filter by name or email"
        />
        <button type="submit">Filter</button>
      </form>
    </div>
  );
};

export default Filter;
