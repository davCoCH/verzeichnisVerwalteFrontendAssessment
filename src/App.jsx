import React from "react";

import SortMenu from "@components/SortMenu";
import Filter from "@components/Filter";
import EditPanel from "@components/EditPanel";
import ListRow from "./components/ListRow";
import ConfirmationDialog from "./components/ConfirmationDialog";
import useCRUD from "@hooks/useCRUD";
import styles from "@styles/app.module.css";

function App() {
  const {
    users,
    setUsers,
    userBridge,
    operation,
    handleEdit,
    handleAddUser,
    handleSubmit,
    handleDelete,
    cancelDelete,
    showConfirmationDialog,
    formValues,
    setFormValues,
    confirmDeleteUser,
    filter,
    filteredList,
    setFilteredList,
    handleFilter,
    handleSort,
  } = useCRUD();

  const renderUserList = () => {
    if (filteredList.length > 0) {
      return filteredList.map((user) => (
        <ListRow
          key={user.userID}
          user={user}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ));
    }

    if (users && users.length > 0) {
      return users.map((user) => (
        <ListRow
          key={user.userID}
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
            operationType={operation}
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
                  cancelDelete={cancelDelete}
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
