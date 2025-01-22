import React from "react";
import styles from "@styles/listRow.module.css";

const ListRow = ({ user, handleDelete, handleEdit }) => {
  return (
    <div className={styles.listRow}>
      <div className={styles.labelsContainer}>
        <div>
          <label htmlFor={`name-${user.id}`}>Name:</label>
          <span id={`name-${user.id}`}>{user.name}</span>
        </div>
        <div>
          <label htmlFor={`email-${user.id}`}>Email:</label>
          <span id={`email-${user.id}`}>{user.email}</span>
        </div>
        <div>
          <label htmlFor={`telephon-${user.id}`}>Telefon:</label>
          <span id={`telephon-${user.id}`}>{user.telephon}</span>
        </div>
      </div>
      <div className={styles.listRowControls}>
        <button name="edit" onClick={handleEdit}>
          edit
        </button>
        <button name="delete" onClick={() => handleDelete(user.id)}>
          delete
        </button>
      </div>
    </div>
  );
};

export default ListRow;
