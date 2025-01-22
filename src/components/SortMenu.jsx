import React from "react";
import styles from "@styles/sortMenu.module.css";

const SortMenu = ({ handleSort }) => {
  return (
    <div className={styles.sortWrapper}>
      <label htmlFor="sortMenu">Sort by</label>
      <select id="sortMenu" onChange={(e) => handleSort(e)}>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select>
    </div>
  );
};

export default SortMenu;
