import React, { createContext, useContext, useEffect, useState } from "react";
import { inventoryData } from "../Data/Data";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [inventories, setInventories] = useState(
    () => JSON.parse(localStorage.getItem("um-inventory-data")) || inventoryData
  );
  const [selectedDepartment, setSelectedDepartment] =
    useState("All Departments");

  useEffect(() => {
    localStorage.setItem("um-inventory-data", JSON.stringify(inventories));
  }, [inventories]);
  return (
    <DataContext.Provider
      value={{
        inventories,
        setInventories,
        selectedDepartment,
        setSelectedDepartment,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
