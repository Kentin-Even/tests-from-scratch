import { useUsers } from "../hooks/useUsers";

export function UserList() {
  const { users, loading, error } = useUsers();

  if (loading) return <p role="status">Chargement...</p>;
  if (error) return <p role="alert">Erreur : Erreur réseau</p>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
