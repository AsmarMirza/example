import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    const res = await fetch("http://localhost:3000/employee/" + id);
    const data = await res.json();
    setProducts(data);
  }

  return (
    <div style={{ width: "200px", height: "200px", border: "1px solid black" }}>
      <h2>{products.name}</h2>
      <p>{products.age}</p>
    </div>
  );
}

export default Detail;
