import { useGetUsersQuery, useLazyGetUsersQuery } from "./features/users/usersApi";

function App() {
  // const { data, isLoading, error } = useGetUsersQuery();
  const [getUsers, { data, isLoading, error }] = useLazyGetUsersQuery();

  return (
    <div>
      <h1>Users</h1>

      <button onClick={() => getUsers()}>Load Users</button>

      {isLoading && <h2>Loading...</h2>}

      {error && <h2>Something went wrong</h2>}

      <ul>
        {data?.users?.map((user) => (
          <li key={user.id}>
            {user.firstName} {user.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
