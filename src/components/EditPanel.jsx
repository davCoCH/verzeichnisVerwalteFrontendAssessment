import React, { useState } from "react";
import styles from "@styles/editPanel.module.css";

const EditPanel = ({
  label,
  buttonLabel,
  handleAddUser,
  handleSubmit,
  formData,
}) => {
  const handleFormChanges = (e) => {
    const { name, value } = e.target;

    formData.setFormValues({
      ...formData.formValues,
      [name]: value,
    });
  };

  return (
    <aside>
      <div className={styles.editPanelWrapper}>
        <header className={styles.editPanelHeader}>
          <span>{label}</span>
          <button id="addBtn" onClick={handleAddUser}>
            Neue user
          </button>
        </header>

        <form id="mainForm" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            name="name"
            value={formData.formValues.name}
            onChange={handleFormChanges}
          />
          <label htmlFor="email">E-Mail-Adresse</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email-Adresse"
            value={formData.formValues.email}
            onChange={handleFormChanges}
          />
          <label htmlFor="telephon">Telefonnummer</label>
          <input
            id="telephon"
            type="text"
            name="telephon"
            placeholder="00417943546"
            value={formData.formValues.telephon}
            onChange={handleFormChanges}
          ></input>
          <button type="submit">{buttonLabel}</button>
        </form>
      </div>
    </aside>
  );
};

export default EditPanel;
