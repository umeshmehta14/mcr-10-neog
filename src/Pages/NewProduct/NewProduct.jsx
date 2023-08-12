import React, { useState } from "react";
import "./NewProduct.css";
import { useNavigate } from "react-router-dom";
import { useData } from "../../Contexts/DataContext";

const NewProduct = () => {
  const navigate = useNavigate();
  const { setInventories } = useData();
  const [formValue, setFormValue] = useState({
    id: Date.now(),
    department: "",
    name: "",
    description: "",
    price: 0,
    stock: 0,
    sku: "",
    supplier: "",
    delivered: 0,
    imageUrl: "",
  });

  const {
    department,
    name,
    description,
    price,
    stock,
    sku,
    supplier,
    delivered,
    imageUrl,
  } = formValue;

  const submitHandler = (e) => {
    e.preventDefault();
    setInventories((prev) => [formValue, ...prev]);
    navigate("/products");
  };

  return (
    <main className="container">
      <h1>Add New Product</h1>
      <form onSubmit={submitHandler}>
        <div className="input-box">
          <label htmlFor="dep">Department:</label>
          <input
            type="text"
            id="dep"
            value={department}
            onChange={({ target }) =>
              setFormValue({ ...formValue, department: target.value })
            }
            required
          />
        </div>
        <div className="input-box">
          <label htmlFor="Name">Name:</label>
          <input
            type="text"
            id="Name"
            value={name}
            onChange={({ target }) =>
              setFormValue({ ...formValue, name: target.value })
            }
            required
          />
        </div>
        <div className="input-box">
          <label htmlFor="des">Description:</label>
          <textarea
            value={description}
            onChange={({ target }) =>
              setFormValue({ ...formValue, description: target.value })
            }
            id="des"
            cols="30"
            rows="10"
            required
          ></textarea>
        </div>
        <div className="input-box">
          <label htmlFor="Price">Price:</label>
          <input
            type="number"
            id="Price"
            value={price}
            onChange={({ target }) =>
              setFormValue({ ...formValue, price: target.value })
            }
            required
          />
        </div>
        <div className="input-box">
          <label htmlFor="Stock">Stock:</label>
          <input
            type="number"
            id="Stock"
            value={stock}
            onChange={({ target }) =>
              setFormValue({ ...formValue, stock: target.value })
            }
            required
          />
        </div>
        <div className="input-box">
          <label htmlFor="SKU">SKU:</label>
          <input
            type="number"
            id="SKU"
            value={sku}
            onChange={({ target }) =>
              setFormValue({ ...formValue, sku: target.value })
            }
          />
        </div>
        <div className="input-box">
          <label htmlFor="Supplier">Supplier</label>
          <input
            type="number"
            id="Supplier"
            value={supplier}
            onChange={({ target }) =>
              setFormValue({ ...formValue, supplier: target.value })
            }
          />
        </div>
        <div className="input-box">
          <label htmlFor="Delivered">Delivered</label>
          <input
            type="number"
            id="Delivered"
            value={delivered}
            onChange={({ target }) =>
              setFormValue({ ...formValue, delivered: target.value })
            }
          />
        </div>
        <div className="input-box">
          <label htmlFor="ImageUrl">Image Url</label>
          <input
            type="url"
            id="ImageUrl"
            value={imageUrl}
            onChange={({ target }) =>
              setFormValue({ ...formValue, imageUrl: target.value })
            }
            required
          />
        </div>
        <div className="button-section">
          <button type="submit" className="btn">
            Add Product
          </button>
          <button
            type="button"
            className="btn cancel"
            onClick={() => navigate("/products")}
          >
            Cancel
          </button>
        </div>
      </form>
    </main>
  );
};

export default NewProduct;
