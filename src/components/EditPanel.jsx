import React from "react";
import styles from "@styles/editPanel.module.css";
import useUpdateEditPanelUI from "@hooks/useUpdateEditPanelUI";
import useSubmitDisabled from "@hooks/useSubmitDisabled";
import useBtnDisabled from "@hooks/useBtnDisabled";

const EditPanel = ({
  operationType,
  handleAddUser,
  handleSubmit,
  formData,
}) => {
  const { formValues, setFormValues } = formData;
  const { name, email, telephon } = formValues;
  const { btnIsDisabled, errorMessage } = useSubmitDisabled({ formData });
  const { titlePanel, buttonPanelLabel } = useUpdateEditPanelUI({
    operationType,
  });
  useBtnDisabled(titlePanel, "Neue User erstellen", "addBtn");

  const handleFormChanges = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <aside className={styles.aside}>
      <div className={styles.editPanelWrapper}>
        <header className={styles.editPanelHeader}>
          <span>{titlePanel}</span>
          <button id="addBtn" onClick={handleAddUser}>
            Neue user
          </button>
        </header>

        <form id="mainForm" onSubmit={async (e) => await handleSubmit(e)}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            name="name"
            value={name}
            onChange={handleFormChanges}
          />
          <label htmlFor="email">E-Mail-Adresse</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email-Adresse"
            value={email}
            onChange={handleFormChanges}
          />
          <label htmlFor="telephon">Telefonnummer</label>
          <input
            id="telephon"
            type="text"
            name="telephon"
            placeholder="00417943546"
            value={telephon}
            onChange={handleFormChanges}
          ></input>
          <button
            id="createBtn"
            name="createBtn"
            type="submit"
            disabled={!btnIsDisabled}
          >
            {buttonPanelLabel}
          </button>
        </form>
      </div>
      <div className={styles.errorLabel}>
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    </aside>
  );
};

export default EditPanel;
