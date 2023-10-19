import React from "react";
import EmployeesListItem from "../emploeers-list-item/employees-list-item";
import './employees-list.css';

const EmployeesList = () => {
  return (
    <ul className="app-list list-group">
      <EmployeesListItem/>
      <EmployeesListItem/>
      <EmployeesListItem/>
    </ul>
  )
}

export default EmployeesList;