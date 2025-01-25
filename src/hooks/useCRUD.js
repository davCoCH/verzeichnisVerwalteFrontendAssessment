import { useState } from "react";
import { mockUsers, formModel, userModel } from "@helpers/models";

export default function useCRUD() {
  const [formValues, setFormValues] = useState(formModel);
  const [userBridge, setUserBridge] = useState(userModel);
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
  const [users, setUsers] = useState(mockUsers);
  const [filteredList, setFilteredList] = useState([]);
  const [filter, setFilter] = useState("");
  const [operation, setOperation] = useState("create");

  const handleAddUser = () => {
    if (operation !== "create") {
      setOperation("create");
    }
    setFormValues(formModel);
  };

  const handleEdit = (userID) => {
    if (operation !== "edit") {
      setOperation("edit");
    }
    setFormValues(formModel);
    const userToEdit = users.filter((user) => user.id === userID)[0];

    setUserBridge(userToEdit);
    console.log("the user to edit:", userToEdit);

    setFormValues({
      name: userToEdit.name,
      email: userToEdit.email,
      telephon: userToEdit.telephon,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFilter("");
    setFilteredList([]);

    if (operation === "edit") {
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
      handleAddUser();
    } else if (operation === "create") {
      const newUser = {
        id: users.length + 1,
        ...formValues,
      };
      console.log("New user added", newUser);
      setUsers([newUser, ...users]);
    }

    setFormValues(formModel);
  };

  const handleDelete = (userID) => {
    setShowConfirmationDialog(true);
    setUserBridge(users.filter((user) => user.id === userID)[0]);
  };

  const cancelDelete = () => {
    setUserBridge(userModel);
    setShowConfirmationDialog(false);
  }

  const confirmDeleteUser = (userID) => {
    setUsers(users.filter((user) => user.id !== userID));
    setFilteredList(filteredList.filter((user) => user.id !== userID));
    setFilter("");
    setFormValues(formModel);
    setUserBridge(userModel);
    setShowConfirmationDialog(false);
    console.log(`The user: ${userBridge.name} has been deleted!`);
  };

  const handleFilter = (e) => {
    const searchUser = e.target.value;
    setFilter(searchUser);

    if (searchUser === "") {
      setFilteredList([]);
      return;
    } else {
      const filteredUsers = users.filter(
        (user) =>
          user.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
          user.email.toLowerCase().includes(e.target.value.toLowerCase())
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

  return {
    users,
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
    handleFilter,
    handleSort
  }
}