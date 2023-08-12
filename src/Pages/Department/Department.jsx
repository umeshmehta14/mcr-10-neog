import React from "react";
import "./Department.css";
import { useData } from "../../Contexts/DataContext";
import { useNavigate } from "react-router-dom";

const Department = () => {
  const { inventories, setSelectedDepartment } = useData();
  const totalDepartment = [
    ...new Set(inventories?.map(({ department }) => department)),
  ];

  const navigate = useNavigate();

  return (
    <main className="container">
      <div className="dashboard-main">
        {totalDepartment.map((department) => (
          <div
            className="box dep-box"
            key={department}
            onClick={() => {
              navigate(`/products`);
              setSelectedDepartment(department);
            }}
          >
            <p className="dep-name">{department}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Department;
