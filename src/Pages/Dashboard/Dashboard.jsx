import React from "react";
import "./Dashboard.css";
import { useData } from "../../Contexts/DataContext";

const Dashboard = () => {
  const { inventories } = useData();

  const totalStock = inventories.reduce(
    (acc, { stock }) => acc + Number(stock),
    0
  );
  const lowStock = inventories.reduce(
    (acc, { stock }) => (stock <= 10 ? ++acc : acc),
    0
  );
  const totalDelivered = inventories.reduce(
    (acc, { delivered }) => acc + Number(delivered),
    0
  );

  return (
    <main className="container">
      <div className="dashboard-main">
        <section className="box ">
          <span className="totalStock">{totalStock}</span>
          <p>Total Stock</p>
        </section>
        <section className="box ">
          <span className="totalDelivered">{totalDelivered}</span>
          <p>Total Delivered</p>
        </section>
        <section className="box ">
          <span className="lowStock">{lowStock}</span>
          <p>Low Stock</p>
        </section>
      </div>
    </main>
  );
};

export default Dashboard;
