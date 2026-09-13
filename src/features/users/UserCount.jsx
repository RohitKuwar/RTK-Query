import { useGetUsersQuery } from "./usersApi";

function UserCount() {
  const { data } = useGetUsersQuery();

  return <h2>Total Users: {data?.users?.length || 0}</h2>;
}

export default UserCount;