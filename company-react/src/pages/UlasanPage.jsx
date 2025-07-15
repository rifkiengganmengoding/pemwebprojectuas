import React, { useEffect, useState } from "react";
import UlasanList from "../components/UlasanList";

function UlasanPage() {
  const [ulasan, setUlasan] = useState([]);

  useEffect(() => {
    fetch("http://localhost/list.php")
      .then(res => res.json())
      .then(data => setUlasan(data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Ulasan Pengguna</h2>
      <UlasanList data={ulasan} />
    </div>
  );
}

export default UlasanPage;
