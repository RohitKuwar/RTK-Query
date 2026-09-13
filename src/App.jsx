import { useSelector, useDispatch } from 'react-redux';
import {
  addUser,
  removeUser,
  selectUser,
  fetchUsers,
} from "./features/users/usersSlice";
import './App.css'

function App() {
  const users = useSelector(state => state.users.users);
  const loading = useSelector(state => state.users.loading);
  const error = useSelector(state => state.users.error);
  const selectedUser = useSelector((state) => state.users.selectedUser);
  const dispatch = useDispatch();

  const handleAddUser = () => {
    const user = {
      id: Date.now(),
      name: `User ${users.length + 1}`
    };
    dispatch(addUser(user));
  }

  const handleFetchUsers = () => dispatch(fetchUsers());

  return (
    <div>
      <h1>User Management</h1>

      <button onClick={handleAddUser}>Add User</button>
      <button onClick={handleFetchUsers} disabled={loading}>
        {loading ? "Loading..." : "Fetch Users"}
      </button>
      {error && <p>{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name || `${user.firstName} ${user.id}`}
            <button onClick={() => dispatch(selectUser(user))}>Select</button>
            <button onClick={() => dispatch(removeUser(user.id))}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      {selectedUser && <h2>Selected User: {selectedUser.name}</h2>}
    </div>
  );
}

export default App
