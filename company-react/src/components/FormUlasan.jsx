import React, { useState, useEffect } from "react";

function FormUlasan({ onSukses, editData, setEditData }) {
  const [form, setForm] = useState({
    nama: "",
    komentar: "",
    rating: 5,
  });

  useEffect(() => {
    if (editData) {
      setForm(editData);
    }
  }, [editData]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const url = editData
      ? `http://localhost/update-ulasan.php?id=${editData.id}`
      : "http://localhost/create-ulasan.php";

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    })
      .then(res => res.json())
      .then(res => {
        alert(res.status || res.error);
        setForm({ nama: "", komentar: "", rating: 5 });
        setEditData(null);
        onSukses();
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editData ? "Edit" : "Tambah"} Ulasan</h2>
      <input
        type="text"
        name="nama"
        value={form.nama}
        onChange={handleChange}
        required
      />
      <br />
      <textarea
        name="komentar"
        value={form.komentar}
        onChange={handleChange}
        required
      />
      <br />
      <select name="rating" value={form.rating} onChange={handleChange}>
        {[5, 4, 3, 2, 1].map(r => (
          <option key={r} value={r}>{r}</option>
        ))}
      </select>
      <br />
      <button type="submit">{editData ? "Update" : "Kirim"}</button>
    </form>
  );
}

export default FormUlasan;
