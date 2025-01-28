import { useState } from "react";
import { formModel, userModel } from "@helpers/models";
import { createNewUser, deleteUser, updateUser, getDataFromEndpoint } from "../services";

export default function useCRUD() {
  const [formValues, setFormValues] = useState(formModel);
  const [userBridge, setUserBridge] = useState(userModel);
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
  const [users, setUsers] = useState([]);
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFilter("");
    setFilteredList([]);

    if (operation === "edit") {

      const userUpdated = await updateUser(userBridge.id, { ...formValues });
      if (userUpdated) {
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user.id === userBridge.id
              ? { ...user, ...formValues }
              : user
          )
        );

        setFilteredList((prevUsers) =>
          prevUsers.map((user) =>
            user.id === userBridge.id
              ? { ...user, ...formValues }
              : user
          )
        );
        console.log(`User with id: ${userBridge.id} updated`);
        handleAddUser();
      }

    } else if (operation === "create") {
      const newUser = {
        id: crypto.randomUUID(),
        ...formValues,
      };
      const createdUser = await createNewUser(newUser)
      console.log("New user added", createdUser);
      setUsers([createdUser, ...users]);
      setFilteredList([createdUser, ...users])
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

  const confirmDeleteUser = async (id) => {
    const confirmDelete = await deleteUser(id);
    if (confirmDelete) {
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id))
      setFilteredList((prevUsers) => prevUsers.filter((user) => user.id !== id))
      setFilter("");
      setFormValues(formModel);
      setUserBridge(userModel);
      setShowConfirmationDialog(false);
      console.log(`The user: ${userBridge.name} has been deleted!`);
    }
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
    setFilteredList(sortedUser);
  };

  const fetchAndSetUsers = async () => {
    const usersData = await getDataFromEndpoint();
    setUsers(usersData);
    setFilteredList(usersData);
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
    handleSort,
    fetchAndSetUsers,
  }
}