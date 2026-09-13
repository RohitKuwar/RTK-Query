import { useGetUsersQuery, useDeleteUserMutation } from "./usersApi";

function UserList() {
  const { data, isLoading } = useGetUsersQuery();
  const [ deleteUser, { isLoading: isDeleting } ] = useDeleteUserMutation();

  if (isLoading) {
    return <p>Loading users...</p>;
  }

  return (
    <ul>
      {data?.users?.map((user) => (
        <li key={user.id}>
          {user.firstName} {user.lastName}

          <button onClick={() => deleteUser(user.id)} disabled={isDeleting}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default UserList;