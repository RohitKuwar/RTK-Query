import { useGetUsersQuery } from "./usersApi";

function UserList() {
  const { data, isLoading } = useGetUsersQuery();

  if (isLoading) {
    return <p>Loading users...</p>;
  }

  return (
    <ul>
      {data?.users?.map((user) => (
        <li key={user.id}>
          {user.firstName} {user.lastName}
        </li>
      ))}
    </ul>
  );
}

export default UserList;