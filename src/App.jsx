import React, { useState } from "react";

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
import useBtnDisabled from "@hooks/useBtnDisabled";

function App() {
  //http://localhost:3000/ for api mock...

  const [editPanelLabel, seteditPanelLabel] = useState("Neue User erstellen");
  const [buttonPanelLabel, setButtonPanelLabel] = useState("Erstellen");
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    telephon: "",
  });

  const [userBridge, setUserBridge] = useState({
    id: 0,
    name: "",
    email: "",
    telephon: "",
  });

  const [users, setUsers] = useState([]);

  useBtnDisabled(editPanelLabel);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (buttonPanelLabel !== "Erstellen") {
      setUsers(
        users.map((user) => {
          if (user.id === userBridge.id) {
            const updateUser = { id: userBridge.id, ...formValues };
            return updateUser;
          } else {
            return user;
          }
        })
      );
      console.log(`User with id: ${userBridge.id} updated`);
    } else {
      const newUser = {
        id: users.length + 1,
        ...formValues,
      };
      console.log("New user added", newUser);
      setUsers([newUser, ...users]);
    }

    setFormValues({
      name: "",
      email: "",
      telephon: "",
    });
  };

  const handleAddUser = () => {
    updateAddPanelUI({
      editPanelLabel,
      seteditPanelLabel,
      buttonPanelLabel,
      setButtonPanelLabel,
      handleBtnState,
    });
    console.log("add user presed");
    setFormValues({ name: "", email: "", telephon: "" });
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

    setUserBridge(userToEdit);
    console.log("the user to edit:", userToEdit);

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
            handleSubmit={handleSubmit}
            formData={{ formValues, setFormValues }}
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
