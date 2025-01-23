import React, { useState, useEffect } from "react";

import SortMenu from "@components/SortMenu";
import Filter from "@components/Filter";
import EditPanel from "@components/EditPanel";
import styles from "@styles/app.module.css";
import ListRow from "./components/ListRow";
import {
  handleBtnState,
  updateEditPanelUI,
  updateAddPanelUI,
} from "@helpers/funcs.js";

function App() {
  //http://localhost:3000/ for api mock...

  const [editPanelLabel, seteditPanelLabel] = useState("Neue User erstellen");
  const [buttonPanelLabel, setButtonPanelLabel] = useState("Erstellen");

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    telephon: "",
  });

  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   handleBtnState("Edit user");
  // }, []);

  const handleAddUser = () => {
    updateAddPanelUI({
      editPanelLabel,
      seteditPanelLabel,
      buttonPanelLabel,
      setButtonPanelLabel,
      handleBtnState,
    });
  };

  const handleEdit = (userID) => {
    updateEditPanelUI({
      seteditPanelLabel,
      setButtonPanelLabel,
      handleBtnState,
      buttonPanelLabel,
      editPanelLabel,
    });

    const userToEdit = users.filter((user) => user.id === userID)[0];

    setFormValues({
      name: userToEdit.name,
      email: userToEdit.email,
      telephon: userToEdit.telephon,
    });
  };

  const handleDelete = (userID) => {
    console.log("deleting....", userID);
    setUsers(users.filter((user) => user.id !== userID));
    setFormValues({
      name: "",
      email: "",
      telephon: "",
    });
  };

  const handleFilter = (e) => {
    e.preventDefault();
    console.log("fitering");
  };

  const handleSort = (e) => {
    console.log("the seleciton is:", e.target.value);
  };

  return (
    <main className={styles.appContainer}>
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <span>Verzeichnis Verwalter</span>
        </header>
        <div className={styles.wrapper}>
          <EditPanel
            label={editPanelLabel}
            buttonLabel={buttonPanelLabel}
            handleAddUser={handleAddUser}
            formData={{ formValues, setFormValues }}
            users={users}
            setUsers={setUsers}
          />
          <div className={styles.userList}>
            <div className={styles.userListControls}>
              <Filter handleFilter={handleFilter} />
              <SortMenu handleSort={handleSort} />
            </div>
            <div className={styles.listWrapper}>
              {users && users.length > 0 ? (
                users.map((user) => (
                  <ListRow
                    key={user.id}
                    user={user}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                  />
                ))
              ) : (
                <h1>Add some users</h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
