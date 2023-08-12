import React, { useState } from "react";
import "./Products.css";
import { useData } from "../../Contexts/DataContext";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const { inventories, selectedDepartment } = useData();

  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    departmentType: selectedDepartment,
    lowStock: false,
    sortType: "name",
  });
  const { departmentType, lowStock, sortType } = filters;

  const totalDepartment = [
    "All Departments",
    ...new Set(inventories?.map(({ department }) => department)),
  ];

  const departmentFilter =
    departmentType === "All Departments"
      ? inventories
      : inventories?.filter(({ department }) => department === departmentType);

  const lowStockFilter = lowStock
    ? departmentFilter?.filter(({ stock }) => stock <= 10)
    : departmentFilter;

  const sortedProducts = () => {
    switch (sortType) {
      case "name":
        return [...lowStockFilter].sort((a, b) => b.name.localeCompare(a));
      case "price":
        return [...lowStockFilter].sort((a, b) => a.price - b.price);
      case "stock":
        return [...lowStockFilter].sort((a, b) => a.stock - b.stock);

      default:
        break;
    }
  };

  return (
    <main className="container">
      <div className="product-main">
        <div className="filter-bar">
          <h1>Products</h1>
          <select
            value={departmentType}
            onChange={({ target }) =>
              setFilters({ ...filters, departmentType: target.value })
            }
          >
            {totalDepartment?.map((department) => (
              <option key={department} value={department}>
                {department}
              </option>
            ))}
          </select>

          <div className="low-stock">
            <input
              type="checkbox"
              onChange={() =>
                setFilters({ ...filters, lowStock: !filters.lowStock })
              }
              checked={lowStock}
            />
            Low Stock Items
          </div>

          <select
            onChange={({ target }) =>
              setFilters({ ...filters, sortType: target.value })
            }
            value={sortType}
          >
            <option value={""} disabled>
              Sort By
            </option>
            <option value={"name"}>Name</option>
            <option value={"price"}>Price</option>
            <option value={"stock"}>Stock</option>
          </select>

          <button className="btn" onClick={() => navigate("/new-product")}>
            New
          </button>
        </div>

        <table>
          <tr className="headings">
            <th title="Image">Image</th>
            <th title="Name">Name</th>
            <th title="Description">Description</th>
            <th title="Price">Price</th>
            <th title="Stock">Stock</th>
            <th title="Supplier">Supplier</th>
          </tr>

          {sortedProducts().length === 0 ? (
            <h1>No Product Available in this category</h1>
          ) : (
            sortedProducts()?.map(
              ({ id, name, description, price, stock, supplier, imageUrl }) => {
                return (
                  <tr className="table-data" key={id}>
                    <td>
                      <img
                        className="product-img"
                        src={imageUrl}
                        alt={name}
                        onClick={() => navigate(`/product-detail/${id}`)}
                      />
                    </td>
                    <td>{name}</td>
                    <td>{description}</td>
                    <td>${price}</td>
                    <td>{stock}</td>
                    <td>{supplier}</td>
                  </tr>
                );
              }
            )
          )}
        </table>
      </div>
    </main>
  );
};

export default Products;
