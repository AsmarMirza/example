import React, { useEffect } from "react";
import { useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
function Admin() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAllProducts();
  }, []);
  async function getAllProducts() {
    const res = await fetch("http://localhost:3000/employee/");
    const data = await res.json();
    setProducts(data);
  }
  async function deleteData(id) {
    const res = await fetch("http://localhost:3000/employee/" + id, {
      method: "delete",
    });
    const data = await res.json();
   await  getAllProducts();
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>options</th>
          </tr>
        </thead>
        <tbody>
          {products.map((x) => (
            <tr key={x._id}>
              <td>{x.name}</td>
              <td>{x.age}</td>
              <td>
                <button onClick={() => deleteData(x._id)}>delete</button>
                <button ><Link to={`/update/${x._id}`}>update</Link></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
