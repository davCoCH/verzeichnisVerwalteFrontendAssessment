import React from "react";
import styles from "@styles/filter.module.css";

const Filter = ({ handleFilter, filter }) => {
  return (
    <div className={styles.filterWrapper}>
      <input
        type="text"
        id="inputFilter"
        placeholder="Filter by name or email"
        value={filter}
        onChange={handleFilter}
      />
    </div>
  );
};

export default Filter;
