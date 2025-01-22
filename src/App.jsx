import React, { useState } from "react";

import SortMenu from "@components/SortMenu";
import Filter from "@components/Filter";
import EditPanel from "@components/EditPanel";
import styles from "@styles/app.module.css";
import ListRow from "./components/ListRow";
function App() {
  //http://localhost:3000/

  const [editPanelLabel, seteditPanelLabel] = useState("Neue user erstellen");

  const [users, setUsers] = useState([
    {
      id: 0,
      name: "David",
      email: "juan@hot.com",
      telephon: "1234",
    },
    {
      id: 1,
      name: "Carlos",
      email: "carlos@hot.com",
      telephon: "56789",
    },
  ]);

  const handleSort = (e) => {
    console.log("the seleciton is:", e.target.value);
  };

  const handleEdit = () => {
    console.log("editing....");
    const label = "Edit user";
    if (editPanelLabel !== label) {
      seteditPanelLabel(label);
    }
  };
  const handleDelete = (userID) => {
    console.log("deleting....", userID);
  };

  const handleAddUser = () => {
    console.log("add user...");
    const label = "Add new user";
    if (editPanelLabel !== label) {
      seteditPanelLabel(label);
    }
  };

  return (
    <main className={styles.appContainer}>
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <span>Verzeichnis Verwalter</span>
        </header>
        <div className={styles.wrapper}>
          <aside>
            <EditPanel label={editPanelLabel} handleAddUser={handleAddUser} />
          </aside>
          <div className={styles.userList}>
            <div className={styles.userListControls}>
              <Filter />
              <SortMenu handleSort={handleSort} />
            </div>
            <div>
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
