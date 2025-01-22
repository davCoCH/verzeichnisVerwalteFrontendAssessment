import React, { useState } from "react";
import styles from "@styles/editPanel.module.css";

const EditPanel = ({ label, handleAddUser }) => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    telephon: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormValues({
      name: "",
      email: "",
      telephon: "",
    });
    console.log("Form submited", formValues);

    const form = document.getElementsByTagName("input");
    Array.from(form).forEach((input) => (input.value = ""));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <div className={styles.editPanelWrapper}>
      <header className={styles.editPanelHeader}>
        <span>{label}</span>
        <button onClick={handleAddUser}>+</button>
      </header>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Name"
          name="name"
          value={formValues.name}
          onChange={handleChange}
        />
        <label htmlFor="email">E-Mail-Adresse</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email-Adresse"
          value={formValues.email}
          onChange={handleChange}
        />
        <label htmlFor="telephon">Telefonnummer</label>
        <input
          id="telephon"
          type="text"
          name="telephon"
          placeholder="00417943546"
          value={formValues.telephon}
          onChange={handleChange}
        ></input>
        <button type="submit">Erstellen</button>
      </form>
    </div>
  );
};

export default EditPanel;
