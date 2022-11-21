import React from "react";
import AxiosRoutes from "../Routes/AxiosRoutes";

const NewEmp = (
  setName,
  setAge,
  setCountry,
  setPosition,
  setWage,
  setManagerID,
  name,
  age,
  country,
  position,
  wage,
  managerID,
  setEmployeeList,
  employeeList,
) => {
  return (
    <div className="inputs">
      <label>Name:</label>
      <input
        type="text"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <label>Age:</label>
      <input
        type="number"
        onChange={(event) => {
          setAge(event.target.value);
        }}
      />
      <label>Country:</label>
      <input
        type="text"
        onChange={(event) => {
          setCountry(event.target.value);
        }}
      />
      <label>Position:</label>
      <input
        type="text"
        onChange={(event) => {
          setPosition(event.target.value);
        }}
      />
      <label>Wage per hr:</label>
      <input
        type="number"
        onChange={(event) => {
          setWage(event.target.value);
        }}
      />
      <label>Manager:</label>
      <input
        type="number"
        onChange={(event) => {
          setManagerID(event.target.value);
        }}
      />
      <button
        className="infoBttn"
        onClick={() => {
          AxiosRoutes.addEmployee(
            name,
            age,
            country,
            position,
            wage,
            managerID,
            setEmployeeList,
            employeeList
          );
        }}
      >
        Add Employee
      </button>
    </div>
  );
};

export default NewEmp;
