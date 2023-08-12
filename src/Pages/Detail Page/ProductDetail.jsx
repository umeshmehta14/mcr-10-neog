import React from "react";
import "./ProductDetail.css";
import { useParams } from "react-router-dom";
import { useData } from "../../Contexts/DataContext";

const ProductDetail = () => {
  const { productId } = useParams();
  const { inventories } = useData();

  const selectedProduct = inventories?.find(({ id }) => id === +productId);
  const {
    name,
    description,
    department,
    sku,
    supplier,
    price,
    stock,
    imageUrl,
    delivered,
  } = selectedProduct;

  return (
    <main className="container detail-page">
      <h1>{name}</h1>
      <img src={imageUrl} alt={name} />
      <p>
        <strong>Price: </strong>
        {price}
      </p>
      <p>
        <strong>Stock: </strong>
        {stock}
      </p>
      <p>
        <strong>Supplier: </strong>
        {supplier}
      </p>
      <p>
        <strong>Department: </strong>
        {department}
      </p>
      <p>
        <strong>SKU: </strong>
        {sku}
      </p>
      <p>
        <strong>Delivered: </strong>
        {delivered}
      </p>
      <p>
        <strong>SKU: </strong>
        {sku}
      </p>
      <p>
        <strong>Description: </strong>
        {description}
      </p>
    </main>
  );
};

export default ProductDetail;
