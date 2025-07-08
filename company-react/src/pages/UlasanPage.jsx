import React, { useState, useEffect } from "react";
import FormUlasan from "../components/FormUlasan";
import UlasanList from "../components/UlasanList";

function UlasanPage() {
  const [ulasan, setUlasan] = useState([]);
  const [editData, setEditData] = useState(null);

  const loadUlasan = () => {
    fetch("http://localhost/list-ulasan.php")
      .then(res => res.json())
      .then(data => setUlasan(data));
  };

  const handleDelete = (id) => {
    if (window.confirm("Yakin ingin menghapus ulasan ini?")) {
      fetch(`http://localhost/delete-ulasan.php?id=${id}`, {
        method: "POST"
      })
        .then(res => res.json())
        .then(res => {
          alert(res.status || res.error);
          loadUlasan();
        });
    }
  };

  useEffect(() => {
    loadUlasan();
  }, []);

  return (
    <div>
      <FormUlasan
        onSukses={loadUlasan}
        editData={editData}
        setEditData={setEditData}
      />
      <hr />
      <UlasanList
        data={ulasan}
        onEdit={setEditData}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default UlasanPage;
