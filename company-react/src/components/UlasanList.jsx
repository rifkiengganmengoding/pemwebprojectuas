import React from "react";

function UlasanList({ data, onEdit, onDelete }) {
  return (
    <div>
      <h2>Daftar Ulasan</h2>
      <ul>
        {data.map(u => (
          <li key={u.id}>
            <strong>{u.nama}</strong> ({u.rating}/5)<br />
            {u.komentar}<br />
            <button onClick={() => onEdit(u)}>Edit</button>
            <button onClick={() => onDelete(u.id)}>Hapus</button>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UlasanList;
