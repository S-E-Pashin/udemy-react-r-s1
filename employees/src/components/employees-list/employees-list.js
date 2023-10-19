import React from "react";
import EmployeesListItem from "../emploeers-list-item/employees-list-item";
import './employees-list.css';

const EmployeesList = () => {
  return (
    <ul className="app-list list-group">
      <EmployeesListItem name="Тимофей" salary={800}/>
      <EmployeesListItem name="Никита" salary={3000}/>
      <EmployeesListItem name="Иван" salary={5000}/>
    </ul>
  )
}

export default EmployeesList;
