import React from "react";
import styles from "@styles/confirmationDialog.module.css";

const ConfirmationDialog = ({ user, deleteUser }) => {
  return (
    <div className={styles.confirmationDialog}>
      <h2>Achtung!!</h2>
      <p>
        Der Benutzer <strong>{user.name}</strong> mit der ID:{" "}
        <strong>{user.id}</strong> wird gelöscht.
      </p>
      <p>Sind sie sicher?</p>

      <button onClick={() => deleteUser(user.id)}>Bestätigen</button>
    </div>
  );
};

export default ConfirmationDialog;
