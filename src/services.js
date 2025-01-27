const ENDPOINT = "http://localhost:3000/users";

export const getDataFromEndpoint = async () => {
  try {
    const response = await fetch(ENDPOINT);
    if (!response.ok) {
      throw new Error("Error fetching users: ${response.statusText}");
    }
    const usersData = await response.json();
    return usersData
  } catch (error) {
    console.log("Error fetching the users", error);
    return [];
  }
};

export const createNewUser = async (body) => {
  try {
    const response = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(
        `Error creating the new user: ${response.statusText}`
      );
    }
    const newUser = await response.json()
    return newUser
  } catch (error) {
    console.log("Error", error);
    return null
  }
};

export const updateUser = async (id, userBody) => {
  try {
    const response = await fetch(`${ENDPOINT}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userBody)
    });
    if (!response.ok) {
      throw new Error(`Error updating the user with id: ${id}, ${response.statusText}`)
    }
    return true;

  } catch (error) {
    console.log("Error", error)
  }
}

export const deleteUser = async (id) => {
  try {
    const response = await fetch(`${ENDPOINT}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`Error deleting the user with id:${id}, ${response.statusText}`);
    }
    const deletedUser = await response.json();
    console.log("User deleted from server", deletedUser);
    return true

  } catch (error) {
    console.log("Error", error);
    return false

  }
};