import { useUsers } from "../hooks/useUsers";

export function UserList() {
  const { users, loading, error } = useUsers();

  if (loading) return <p role="status">Chargement...</p>;
  if (error) return <p role="alert">Erreur : {error}</p>;

  if (users.length === 0) return <p>Aucun utilisateur trouvé</p>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
