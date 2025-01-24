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
import { mockUsers, formModel, userModel } from "@helpers/models";
import useBtnDisabled from "@hooks/useBtnDisabled";
import ConfirmationDialog from "./components/ConfirmationDialog";

function App() {
  //http://localhost:3000/ for api mock...

  const [editPanelLabel, seteditPanelLabel] = useState("Neue User erstellen");
  const [buttonPanelLabel, setButtonPanelLabel] = useState("Erstellen");
  const [formValues, setFormValues] = useState(formModel);
  const [userBridge, setUserBridge] = useState(userModel);
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
  const [users, setUsers] = useState(mockUsers);
  const [filteredList, setFilteredList] = useState([]);
  const [filter, setFilter] = useState("");

  useBtnDisabled(editPanelLabel);

  const handleSubmit = (e) => {
    e.preventDefault();

    setFilter("");
    setFilteredList([]);

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

    setFormValues(formModel);
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
    setFormValues(formModel);
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
    setShowConfirmationDialog(true);
    setUserBridge(users.filter((user) => user.id === userID)[0]);
  };

  const confirmDeleteUser = (userID) => {
    console.log("borrando...");
    setUsers(users.filter((user) => user.id !== userID));
    setFormValues(formModel);
    console.log(`The user: ${userBridge.name} has been deleted!`);
    setUserBridge(userModel);
    setShowConfirmationDialog(false);
  };

  const handleFilter = (e) => {
    const searchUser = e.target.value;
    setFilter(searchUser);

    if (searchUser === "") {
      setFilteredList([]);
      return;
    } else {
      const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setFilteredList(filteredUsers);
    }
  };

  const handleSort = (e) => {
    const sortedUser = [...users];
    if (e.target.value === "A-Z") {
      sortedUser.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      sortedUser.sort((a, b) => b.name.localeCompare(a.name));
    }
    setUsers(sortedUser);
  };

  const renderUserList = () => {
    if (filteredList.length > 0) {
      return filteredList.map((user) => (
        <ListRow
          key={user.id}
          user={user}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ));
    }

    if (users && users.length > 0) {
      return users.map((user) => (
        <ListRow
          key={user.id}
          user={user}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ));
    }

    return <h1>Add some users</h1>;
  };

  const renderListControls = () => {
    return (
      <div className={styles.userListControls}>
        <Filter handleFilter={handleFilter} filter={filter} />
        <SortMenu handleSort={handleSort} />
      </div>
    );
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
            {renderListControls()}
            <div className={styles.listWrapper}>
              {showConfirmationDialog ? (
                <ConfirmationDialog
                  user={userBridge}
                  deleteUser={confirmDeleteUser}
                />
              ) : (
                renderUserList()
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
