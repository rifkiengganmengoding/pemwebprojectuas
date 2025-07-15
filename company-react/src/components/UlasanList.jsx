import React from "react";

function UlasanList({ data }) {
  if (data.length === 0) return <p>Belum ada ulasan.</p>;

  return (
    <ul>
      {data.map((u) => (
        <li key={u.id} style={{ marginBottom: "15px", listStyle: "none" }}>
          <strong>{u.nama}</strong> ({u.rating}/5)
          <p>{u.komentar}</p>
          <hr />
        </li>
      ))}
    </ul>
  );
}

export default UlasanList;
