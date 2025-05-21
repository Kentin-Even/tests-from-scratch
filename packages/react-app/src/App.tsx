/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { UserList } from "./components/UserList";
import { UserForm } from "./components/UserForm";
import { useUsers } from "./hooks/useUsers";
import "./App.css";

function App() {
  const { users, loading, error, refetch } = useUsers();

  const handleCreateUser = async (name: string) => {
    try {
      const response = await fetch("/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });

      if (!response.ok) {
        throw new Error("Failed to create user");
      }

      // Rafraîchir la liste des utilisateurs
      refetch();
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Utilisateurs</h1>
        <UserForm onCreated={handleCreateUser} />
        <UserList />
      </header>
    </div>
  );
}

export default App;
