import UserList from "./features/users/UserList";
import UserCount from "./features/users/UserCount";

function App() {

  return (
    <div>
      <h1>Users</h1>

      <UserCount />

      <UserList />
    </div>
  );
}

export default App;
