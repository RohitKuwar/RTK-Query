import { useAddUserMutation } from "./features/users/usersApi";
import UserList from "./features/users/UserList";
import UserCount from "./features/users/UserCount";

function App() {
  const [addUser, result] = useAddUserMutation();
  const { data, isLoading, isSuccess, isError, error } = result;

  const handleAddUser = () => {
    addUser({
      firstName: "Rohit",
      lastName: "Test",
      age: 25,
    });
  };

  return (
    <div>
      <h1>Users</h1>

      <button onClick={handleAddUser}>Add User</button>

      {isLoading && <p>Adding user...</p>}

      {isSuccess && <p>User added successfully!</p>}

      {isError && <p>Failed to add user</p>}

      <UserCount />

      <UserList />
    </div>
  );
}

export default App;
