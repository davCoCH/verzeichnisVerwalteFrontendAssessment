import React from "react";
import styles from "@styles/confirmationDialog.module.css";

const ConfirmationDialog = ({ user, deleteUser, cancelDelete }) => {
  return (
    <div className={styles.confirmationDialog}>
      <h2>Achtung!!</h2>
      <p>
        Der Benutzer <strong>{user.name}</strong> mit der ID:{" "}
        <strong>{user.id}</strong> wird gelöscht.
      </p>
      <p>Sind sie sicher?</p>

      <div className={styles.btnsContainer}>
        <button onClick={cancelDelete}>Abbrechen</button>
        <button onClick={() => deleteUser(user.id)}>Bestätigen</button>
      </div>
    </div>
  );
};

export default ConfirmationDialog;
