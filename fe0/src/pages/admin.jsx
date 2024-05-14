import React, { useEffect, useState } from "react";

import "./index.scss";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
function Admin() {
  const [products, setProducts] = useState([]);

  async function getAllProducts() {
    const res = await fetch("http://localhost:3000/Project/");
    const data = await res.json();
    setProducts(data);
  }
  useEffect(() => {
    getAllProducts();
  }, []);

  async function deleteProduct(id) {
    const res = await fetch("http://localhost:3000/Project/" + id, {
      method: "delete",
    });
    const data = await res.json();
    getAllProducts();
  }

  return (
    <div>
         <Helmet>
        <title>admin page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Title</th>
            <th>Price</th>
            <th>Options</th>
          </tr>
        </thead>

        <tbody>
          {products.map((x) => (
            <tr key={x._id}>
              <td style={{ textAlign: "center" }}>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src={x.image}
                  alt=""
                />
              </td>
              <td>{x.name}</td>
              <td>{x.title}</td>
              <td>{x.price}$</td>
              <td>
                <button><Link to={`/update/${x._id}`}>update</Link></button>
                <button onClick={() => deleteProduct(x._id)}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
