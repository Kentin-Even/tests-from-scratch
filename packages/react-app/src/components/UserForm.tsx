import React, { useState } from "react";

interface Props {
  onCreate: (name: string) => void;
}

export function UserForm({ onCreate }: Props) { 
  const [name, setName] = useState("");

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        onCreate(name)
      }}>
      <label htmlFor="name">Nom :</label>
      <input
        id="name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button type="submit">Créer</button>
    </form>
  )
}